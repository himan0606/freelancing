import React, { useEffect, useState } from 'react'

const ListDeveloper = () => {
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/user/getall');
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setUserData(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [])

  const displayDevs = () => {
    return userData.map(user => (
      <div className='col-md-3 mb-3'>
        <div className="card">
          <img className='user-img' src={'http://localhost:5000/' + user.avatar} />
          <div className="card-body">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.bio}</p>
            <p>{user.number}</p>
          </div>
        </div>
      </div>
    ))
  }

  return (

    <div>
      <header>
        <div className="container">
          <h1 className='text-center my-5 display-1'>Search Developers</h1>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h3>Filter Developers</h3>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              {displayDevs()}

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ListDeveloper