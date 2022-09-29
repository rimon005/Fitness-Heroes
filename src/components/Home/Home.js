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

    const [totalItme , setTotalTime] = useState([]);
    const addTime = (seletedItem) =>{
        console.log(seletedItem);
        let newItem = [];
        const exists = totalItme.find(i => i.id === seletedItem.id);
        // console.log(exists)
        if(!exists){
            newItem = [...totalItme , seletedItem]
        }
        else{
            newItem = [...totalItme , seletedItem]
        }
        setTotalTime(newItem)
    }
    return (
        <div>
            <div className='row'>
                <div className="col-lg-9 contain">
                <Exercises exercises={exercises} addTime={addTime}></Exercises>
                </div>
                <div className="col-lg-3 mt-5 ">
                    <Profile totalItme={totalItme}  ></Profile>
                </div>
            </div>
        </div>
    );
};

export default Home;