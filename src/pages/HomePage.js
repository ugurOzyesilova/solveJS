// HomePage.js

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../questions.js';

const HomePage = () => {
 
    console.log(questions[0].example[0].input)

    const [questionStates, setQuestionStates] = useState(() => {
        const storedStates = localStorage.getItem('questionStates');
        return storedStates ? JSON.parse(storedStates) : questions.map(() => ({ check: '-' }));
    });

    const checkQuestion = (index) => {
        setQuestionStates((prevState) => {
            const updatedStates = prevState.map((state, i) =>
                i === index ? { ...state, check: state.check === '+' ? '-' : '+' } : state
            );
            localStorage.setItem('questionStates', JSON.stringify(updatedStates));
            return updatedStates;
        });
    };

    const formatTitle = (title) => {
        return title.replace(/\s+/g, '-');
    };

    

    return (
        <div className='homepage'>
        <div className='homepage__content'>
                <h2>[...questions]<span>.</span><span>map()</span>;</h2>
                <ul>
                    {questions.map((question, index) => (
                        <li key={index}>
                            <Link className="link" to={`/problems/${index}/${encodeURIComponent(formatTitle(question.title))}`}><span>&#123;</span>{question.title}<span>&#125;</span></Link>
                            <button><span>onclick=</span><span>&#123;"</span>solveProblem()<span>"&#125;</span></button>
                            <button className="question__check" onClick={() => checkQuestion(index)}>{questionStates[index].check}</button>
                        </li>
                    ))}
                </ul>
        </div>
           
           
        </div>
    );
};

export default HomePage;

