import React from 'react';
import './Home.css'
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
    },[]);
    const [time , setTime] = useState([])
    
    return (
        <div>
            <div className='row'>
                <div className="col-lg-9 contain">
                ,<Exercises exercises={exercises}></Exercises>
                </div>
                <div className="col-lg-3 mt-5 ">
                    <Profile time={time} setTime={setTime}></Profile>
                </div>
            </div>
        </div>
    );
};

export default Home;