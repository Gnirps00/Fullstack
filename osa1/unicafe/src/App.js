import React, { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>

const StatisticLine = ({ text, value }) => {
  if(text === 'positive'){
    return <div>{text} {value} %</div>
  } else {
    return <div>{text} {value}</div>
  }
}

const Statistics = ({ good, neutral, bad }) => {
  const all = () => good + neutral + bad
  if(all() === 0){
    return <div>No feedback given</div>
  }

  const average = () => (good - bad) / all()
  const positive = () => good * 100 / all()
  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all()} />
      <StatisticLine text='average' value={average()} />
      <StatisticLine text='positive' value={positive()} />
    </div>
  )
}

const App = () => {
  //tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
