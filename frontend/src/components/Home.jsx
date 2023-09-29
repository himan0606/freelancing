import React from 'react'
import mylogo from '../logo.svg';

const Home = () => {
  let name = "Himanshu";
  let num1 = 40;
  let num2 = 60;
  const addnums = (a, b) => {
    return a+b;
  }
  return (
    <div><div className='home-img bg-warning' >
    <h1 className='text-left ps-4 '>Motion 33</h1>
    
    <h1 style={{color:'white', backgroundColor: 'black', fontSize: '50px'}} className='font'>Find the right freelance service, right away</h1>
    {name}
    <h3>Product of {num1} and {num2} is {num1*num2}</h3>
    <h1>{addnums(26375, 827)}</h1>

    

    <p className='myclass'>Find your path</p>
    <img src="/logo192.png" alt="" /><br />
    <img className='' src={mylogo} alt="" />

</div>
</div>
  )
}

export default Home