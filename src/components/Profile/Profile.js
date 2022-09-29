import React, { useState } from 'react';
import './Profile.css'
import Swal from 'sweetalert2'
import logo from './img/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt.jpg'

const Profile = ({totalItme}) => {
    let time = 0;
    for(const item of totalItme){
        time = time + item.time;
    }
    const toastify =()=>{
        Swal.fire(
            'Good job!',
            'Your activity completed',
            'success'
          )
    }
    const [timeout , setTimeOut] = useState(0);
    // console.log(timeout)
    const rest =(event)=>{
        const value = event.target.innerText ;
        setTimeOut(value);
        localStorage.setItem("bookmark" , JSON.stringify([value]));
        const prevBookmark = localStorage.getItem('bookmark');
        const oldBookmark = JSON.parse(prevBookmark);
        setTimeOut(oldBookmark)
    }
    return (
        <div className='p-3'>
                <div className="card mb-4 profile-info">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h5>Asif Iqbal Rimon</h5>
                        <p className='info'>Dhaka ,Bangladesh</p>
                    </div>
                </div>
                <div className='body-info'>
                    <div>
                        <h5>75kg</h5>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h5>5.5</h5>
                        <p>Height</p>
                    </div>
                    <div>
                        <h5>25yrs</h5>
                        <p>Age</p>
                    </div>
                </div>

                <h5 className='mb-4'>Add A Break</h5>

                <div className='break-btn mb-4'>
                      <button className='mb-2' onClick={rest} >10 min</button>
                    <button onClick={rest}>15 min</button>
                    <button onClick={rest}>20 min</button>
                    <button onClick={rest}>30 min</button>
                    <button onClick={rest}>1 hr</button>
                </div>
                <h5 className='mb-4'>Exercise Details</h5>
                <div className='d-flex justify-content-between count mb-4'>
                    <h5>Exercise time</h5>
                    <p>{time} Minites</p>
                </div>
                <div className='d-flex justify-content-between count mb-4'>
                    <h5>Break time</h5>
                    <p>{timeout}</p>
                </div>
                <button className='w-100 complite p-3' onClick={toastify}>Activity Completed</button>
        </div>
    );
};

export default Profile;