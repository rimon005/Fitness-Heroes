import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div>
                <div className="card mb-4">
                    <img src="./img/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt.jpg" alt="" />
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

        </div>
    );
};

export default Profile;