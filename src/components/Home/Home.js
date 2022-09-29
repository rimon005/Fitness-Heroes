import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Exercises from '../Exercises/Exercises'
import Profile from '../Profile/Profile';

const Home = () => {
    const [exercises , setExercises] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    
    return (
        <div>
            <div className='row'>
                <div className="col-lg-9">
                ,<Exercises exercises={exercises}></Exercises>
                </div>
                <div className="col-lg-3 mt-5 ">
                    <Profile></Profile>
                </div>
            </div>
        </div>
    );
};

export default Home;