/* eslint-disable no-eval */

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import CheckSolutionModal from "react-modal"

const Solution = ({ title }) => {
    const [code, setCode] = useState(() => {
        const storedCode = localStorage.getItem(title);
        return storedCode ? storedCode : `console.log("${title}");`;
    });

    const [codeOutput, setCodeOutput] = useState([]);
    const [apiResponse, setApiResponse] = useState("");
    const [isCheckSolutionModalOpen, setIsCheckSolutionOpenModal] = useState(false)

    var usersConsoleOutput = 'window.output = []; window.usersConsoleLog = function (value) { console.log(value); window.output.push(JSON.stringify(value)); } ;';


    const handleClick = () => {
        try {
            eval(usersConsoleOutput);
            let compile = code.replaceAll('console.log', 'window.usersConsoleLog');
            eval(compile);
            let result = eval('window.output;');
            setCodeOutput([...codeOutput, result]);
           
        } catch (error) {
            setCodeOutput([...codeOutput, error.toString()]);
           
        }
    };

    const returnResult = () => {
        return codeOutput.join('<br> <br>');
    };

    const handleChange = (value) => {
        setCode(value);
        console.log(code);
        localStorage.setItem(title, value);
    };


    const configuration = new Configuration({
        apiKey: 'YOUR_API_KEY',
    });
    const openai = new OpenAIApi(configuration);


    const handleSubmit = async () => {

        try {
            // Implementing rate limiting with a delay of 10 seconds
            const result = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: `The given Problem: ${title} was this and my solution is ; \nCode:\n${code} so can you fix it and explain it in detail ? `,
                temperature: 0.5,
                max_tokens: 4000,
            });
            setApiResponse(result.data.choices[0].text);
            console.log(result);
            console.log(apiResponse);
        } catch (e) {
            setApiResponse("Something is going wrong. Please try again.");
        }
    }

    const clearConsole = () => {
        setCodeOutput([])
    }

    const openCheckSolutionModal = () => {
        setIsCheckSolutionOpenModal(true)
    }

    const closeCheckSolutionModal = () => {
        setIsCheckSolutionOpenModal(false)
    }

    const checkSolution = () => {
        handleSubmit()
        openCheckSolutionModal()
    }



    const myTheme = createTheme({
        theme: 'dark',
        settings: {
            background: '#000',
            foreground: '#5d00ff',
            caret: '#5d00ff',
            selection: '#036dd626',
            selectionMatch: '#036dd626',
            lineHighlight: '#8a91991a',
            gutterBackground: '#000',
            gutterForeground: '#5d00ff',
        },
        styles: [
            { tag: t.comment, color: '#787b8099' },
            { tag: t.variableName, color: '#efefef' },
            { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
            { tag: t.number, color: '#5c6166' },
            { tag: t.bool, color: '#5c6166' },
            { tag: t.null, color: '#5c6166' },
            { tag: t.keyword, color: '#5c6166' },
            { tag: t.operator, color: '#5c6166' },
            { tag: t.className, color: '#efefef' },
            { tag: t.definition(t.typeName), color: '#5c6166' },
            { tag: t.typeName, color: '#efefef' },
            { tag: t.angleBracket, color: '#efefef' },
            { tag: t.tagName, color: '#5d00ff' },
            { tag: t.attributeName, color: '#5c6166' },
        ],
    });

    return (
        <div className='solution'>
            <CodeMirror
                value={code}
                onChange={handleChange}
                height="50vh"
                theme={myTheme}
                extensions={[javascript({ jsx: true })]}
            />
            <div className='solution__buttons'>
                <button onClick={handleClick}>Run Code</button>
                <button onClick={checkSolution}>CheckSolution</button>
                <button onClick={clearConsole}>Clear Console</button>
            </div>

            <div className='solution__outputs'>
                <span dangerouslySetInnerHTML={{ __html: returnResult() }}></span>
            </div>
            <CheckSolutionModal
                isOpen={isCheckSolutionModalOpen}
                contentLabel="Example Modal"
                className="solution__modal">
                <nav>
                    <span>.checkSolution("{title}")</span>
                    <span onClick={closeCheckSolutionModal}>.closeModal()</span>
                </nav>
                <CodeMirror value={apiResponse}
                    theme={myTheme}
                    extensions={[javascript({ jsx: true })]}>
                </CodeMirror>

            </CheckSolutionModal>



        </div>
    );
};

export default Solution;


