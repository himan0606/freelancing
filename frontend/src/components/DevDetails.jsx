import React from 'react'

const DevDetails = () => {
  return (
    <div className='bg-primary vh-100'>
      <div className='w-75 m-auto pt-3'>
        <div className='card shadow'>
          <div className='row'>
            <div className='col-md-5 p-5 contact-left text-white'>
              <img src="/logo1.png" alt="" className='d-block m-auto w-75 mb-4' />
              <h3 className='mb-4'>Get in touch</h3>
              <h4><i class="fa-solid fa-location-dot mb-2"></i> Visit us</h4>
              <p>Come say hello at our office HQ. 67 Victoria Way Croydon South.</p>
              <h4><i class="fa-solid fa-message mb-2"></i> Chat to us</h4>
              <p>Our Friendly team is here to help. hello@paysphere.com</p>
              <h4><i class="fa-solid fa-phone mb-2"></i> Call us</h4>
              <p> Mon-Fri from 8am to 5pm... (+995)555-55-55-55</p>
              <h4 className='mb-3'>Social Media</h4>
              <i class="fa-brands fa-facebook fa-lg icon px-2"></i>
              <i class="fa-brands fa-instagram fa-lg icon px-2"></i>
              <i class="fa-brands fa-youtube fa-lg icon px-2"></i>
              <i class="fa-brands fa-linkedin fa-lg icon px-2"></i>
              <i class="fa-brands fa-twitter fa-lg icon px-2"></i>
            </div>
            <div className='col-md-7 p-5'>
              <form action="">
                <label><h4>Full Name</h4></label>
                <input type="text" className='form-control border-secondary mb-4' placeholder='Your Name..' />
                <label><h4>Email</h4></label>
                <input type="email" className='form-control border-secondary mb-4' placeholder='Your Email..' />
                <label><h4>Phone No.</h4></label>
                <input type="text" className='form-control border-secondary mb-4' placeholder='Your Phone No..' />
                <label><h4>Message</h4></label><br />
                <textarea name="" id="" cols="30" rows="4" className='form-control border-secondary mb-3' placeholder='Tell us what we can help you with'></textarea>
                <p><input type="checkbox" /> I'd like to receive more information about company.I understand and agree to the <mark>Privacy Policy</mark></p>
                <button className='mybtn1'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default DevDetails;