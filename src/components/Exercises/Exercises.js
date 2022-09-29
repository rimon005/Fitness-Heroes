import React from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = ({exercises}) => {
    // console.log(exercises);
    return (
        <div className='row container'>
            {
                exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}></Exercise>)
            }
        </div>
    );
};

export default Exercises;