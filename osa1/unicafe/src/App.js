import React, { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>

const Statistics = (props) => (
  <div>{props.text} {props.count}</div>
)

const App = () => {
  //tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const all = () => good + neutral + bad
  const average = () => (good - bad) / all()
  const positive = () => good * 100 / all()

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics text='good' count={good} />
      <Statistics text='neutral' count={neutral} />
      <Statistics text='bad' count={bad} />
      <div>all {all()}</div>
      <div>average {average()}</div>
      <div>positive {positive()} %</div>
    </div>
  )
}

export default App;
