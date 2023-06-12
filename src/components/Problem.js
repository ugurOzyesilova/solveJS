import React from 'react'

const Problem = ({title, content, example}) => {
  return (
    <div className="problem">
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        {example?.map((ex) => (
          <div className='problem__description'>
            <span> <span>Input :</span>{ex.input}</span>
            <span><span>Output: </span>{ex.output}</span>
            <span><span>Explanation:</span>{ex.explanation}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Problem