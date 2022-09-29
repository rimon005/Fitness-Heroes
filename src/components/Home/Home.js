import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Exercises from '../Exercises/Exercises'

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
                <div className="col-9">
                ,<Exercises exercises={exercises}></Exercises>
                </div>
                <div className="col-3">col-4
                </div>
            </div>
        </div>
    );
};

export default Home;