import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='container'>
            <h2 className='text-=center'>This is question part</h2>
            <div>
                <h5 className='fw-bold'>How dose react work.??</h5>
                <p><span className='fw-bold' >ANS:</span> So you want to learn about React so you can build better user interfaces, but where do you begin?

                  Today, we’re going to answer how React works by breaking down its core ideas. This is your first step towards building intuitive, beautifully coded apps! </p>
            </div>
            <div>
                <h5 className='fw-bold'>What is difference between props and state in react??</h5>
                <p><span className='fw-bold' >ANS:</span> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div>
                <h5 className='fw-bold'>Where to use useeffect without load data.??</h5>
                <p><span className='fw-bold' >ANS:</span> For example, now that I have dealt with useEffect for quite some time, I have realized that it is key to fully understand the component flow of functional components. As such, this aspect is an important topic in this article.</p>
            </div>
        </div>
    );
};

export default Question;