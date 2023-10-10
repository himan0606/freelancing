import React from 'react'
import mylogo from '../logo.svg';

const Home = () => {
  
  
  return (
    <div className='home1'>
      <header class="bg-dark">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-md-4 ">
                  <img className='w-100'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2suRidvYsfJc2Tyg5-PmEaBhkM2eOGVaRIA&usqp=CAU" alt="" />
                
            </div>
            
            <div class="col-md-6 text-white "><h1>Find the right freelance</h1>
                <p class="display-1 fw-bold">  service, right away</p>
                <h1 class="fw-bold"></h1>
                <div class="row">
                    <div class="col-md-3 mt-4">
                    <button class="btn btn-warning rounded-pill  w-100"> Search...</button>
                </div>
                <div class="col-md-4 lg-3 mt-4">
                    <div class="align-items-center">
                        <i class="fa-brands fa-twitter fa-2x"></i>&nbsp;&nbsp;
                        <i class="fa-brands fa-linkedin fa-2x" ></i>&nbsp;&nbsp;
                        <i class="fa-brands fa-instagram fa-2x"></i>&nbsp;&nbsp;
                        <i class="fa-brands fa-facebook fa-2x"></i>&nbsp;&nbsp;
                    </div>

                </div>
                

                </div>
                <div class="col-md-8"></div>
            </div>
            </div>

        </div>
    </header>

    </div>
  )
}


export default Home