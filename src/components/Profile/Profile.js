import React from 'react';
import './Profile.css'
import Swal from 'sweetalert2'

const Profile = ({totalItme}) => {
    // console.log(totalItme)
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
    return (
        <div className='p-3'>
                <div className="card mb-4">
                    <img src={Profile} alt="" />
                    <div>
                        <h5>Asif Iqbal Rimon</h5>
                        <p>Dhaka ,Bangladesh</p>
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
                    <button className='mb-2'>10 min.</button>
                    <button>15 min.</button>
                    <button>20 min.</button>
                    <button>30 min.</button>
                </div>
                <h5 className='mb-4'>Exercise Details</h5>
                <div className='d-flex justify-content-between count mb-4'>
                    <h5>Exercise time</h5>
                    <p>{time} Minites</p>
                </div>
                <div className='d-flex justify-content-between count mb-4'>
                    <h5>Break time</h5>
                    <p> Minites</p>
                </div>
                <button className='w-100 complite p-3' onClick={toastify}>Activity Completed</button>
        </div>
    );
};

export default Profile;