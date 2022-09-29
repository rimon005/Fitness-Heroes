import React from 'react';

const Exercise = ({exercise}) => {
    console.log(exercise)
    const {picture ,name, age,time} = exercise
    return (
        <div className='col-lg-4 pb-5'>
            <div className="card ">
                <img src={picture} alt="" />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>Age: {age}</p>
                    <h6>Time required {time} Minites</h6>
                    <button className='btn border'> Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;