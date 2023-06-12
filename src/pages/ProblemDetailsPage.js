// ProblemDetailsPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Problem from "../components/Problem.js"
import Solution from "../components/Solution.js"
import { questions } from '../questions.js';

const ProblemDetailsPage = () => {

    const { index } = useParams();
    
    const question = questions[parseInt(index)];

    if (!question) {
        return <div>Question not found</div>;
    }

    const { title, content, example } = question;

    console.log(content)
    console.log(example)


    return (
        <div className = "problemdetailspage">
            <Problem title = {title} content={content} example={example}/>
            <Solution title={title} content={content} example={example} />
        </div>
    );
};

export default ProblemDetailsPage;


