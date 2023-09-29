import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import Swal from 'sweetalert2'

const SignUp = () => {

  const navigate = useNavigate();

  // initialize the formik
  const signUpform = useFormik({
    initialValues: {
      name : '',
      email : '',
      password : ''
    },
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true);
      setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 3000);

    // send the data to the server
    const res = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    console.log(res.status);
    if(res.status === 200){
      Swal.fire({
        icon: 'success',
        title: 'Nice',
        text: 'You have signed up successfully'
      })
      .then((result) => {
        navigate('/login');
        
      }).catch((err) => {
        
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'oops!!',
        text: 'Something went wrong'
      })
    }

  },
    // validationSchema: SignupSchema,
  });

  const uploadfile = async (e) => {
    if(!e.target.files) return;

    const file = e.target.files[0];
    console.log(file.name);
    
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('/http://localhost:5000/utils/uploadfile',{
      method: 'POST',
      body: fd
    });

    console.log(res.status);
    

  }

  return (
    <div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5, stiffness: 100, type: 'spring' }}>
      <div className="form-body">
        <div className="formcontainer">
          <form onSubmit={signUpform.handleSubmit}>
            <h2 className="main-heading">SignUp Here</h2>
            <label>
              <h4>Full Name<span style={{ color: 'red' }}> <sup>*</sup></span></h4>
            </label>
            <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.name && signUpform.errors.name}</span>
            <input type="text" name='name' className="input" placeholder="Your Name" onChange={signUpform.handleChange} value={signUpform.values.name} />
            <label htmlFor="">
              <h4>Email <span style={{ color: 'red' }}> <sup>*</sup></span></h4>
            </label>
            <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.email && signUpform.errors.email}</span>
            <input type="email" name='email' className="input" placeholder="Your Email"
              onChange={signUpform.handleChange} value={signUpform.values.email} />
            <label htmlFor="">
              <h4>Password <span style={{ color: 'red' }}> <sup>*</sup></span></h4>
            </label>
            <input type="password" name='password' className="input" placeholder="Your Password" onChange={signUpform.handleChange} value={signUpform.values.password} />
            <input type="file" onChange={uploadfile} />
            <br />
            <p>
              <input type="checkbox" required /> I'd like to receive more information about
              company. I understand and agree to the
              <mark>Privacy Policy</mark>
            </p>
            <button disabled={signUpform.isSubmitting} className="mybtn1" type='submit'>
              {
                signUpform.isSubmitting ? (
                  <>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '10px' }}></span>Loading...
                  </>
                ) : 'Submit'
              }
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUp