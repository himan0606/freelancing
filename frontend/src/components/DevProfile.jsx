import { Formik } from 'formik';
import React, { useState } from 'react'


const DevProfile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [selFile, setSelFile] = useState('');

  const submitForm = async (values) => {
    values.avatar = selFile;
    console.log(values);

    const res = await fetch('http://localhost:5000/user/update/' + currentUser._id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data));
    }
  }

  const uploadfile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    console.log(file.name);
    setSelFile(file.name);

    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);


  }

  return (
    <div>
      <div className='bg-primary vh-100'>
        <div className='w-75 m-auto pt-3'>
          <div className='card shadow'>
            <div className='row'>
              <div className='col-md-5 p-5 contact-left text-white bg-dark'>
                <img src={'http://localhost:5000/' + currentUser.avatar} alt="" className='avatar-img' />
                <div className='text-center'>

                  <label htmlFor="upload" className='btn btn-success'> &uarr; Upload Image</label>
                </div>
                <input type="file" onChange={uploadfile} id="upload" hidden />
              </div>
              <div className='col-md-7 p-5'>

                <Formik initialValues={currentUser} onSubmit={submitForm}>
                  {
                    (profileForm) => (
                      <form onSubmit={profileForm.handleSubmit}>
                        <label><h4>Full Name</h4></label>
                        <input onChange={profileForm.handleChange} value={profileForm.values.name} id="name" type="text" className='form-control border-secondary mb-4' placeholder='Your Name..' />
                        <label><h4>Email</h4></label>
                        <input onChange={profileForm.handleChange} value={profileForm.values.email} id="email" type="email" className='form-control border-secondary mb-4' placeholder='Your Email..' />
                        <label><h4> Bio </h4></label>


                        <textarea onChange={profileForm.handleChange} value={profileForm.values.bio} id="bio" type="text" className='form-control border-secondary mb-4' placeholder='Your Phone No..' ></textarea>
                        <label><h4>Message</h4></label><br />
                        <textarea name="" id="" cols="30" rows="4" className='form-control border-secondary mb-3' placeholder='Tell us what we can help you with'></textarea>
                        <p><input type="checkbox" /> I'd like to receive more information about company.I understand and agree to the <mark>Privacy Policy</mark></p>
                        <button className='mybtn1'>Submit</button>
                      </form>
                    )
                  }
                </Formik>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevProfile