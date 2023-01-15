import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
   );
}

const Statistics = (props) => {
  return (
    <table>
      <tbody>  
      <StatisticLine text='good' value={ props.good }/>
      <StatisticLine text='neutral' value={ props.neutral }/>
      <StatisticLine text='bad' value={ props.bad }/>
      <StatisticLine text='all' value={ props.all }/>
      <StatisticLine text='average' value={ props.average }/>
      <StatisticLine text='positive' value={ props.positive }/>
      </tbody>
    </table>
  );

}


const Buttons = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(((good + 1) - bad)/ (all + 1))
    setPositive(((good + 1) / (all + 1))*100)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good - bad)/ (all + 1))
    setPositive((good / (all + 1))*100)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - (bad + 1))/ (all + 1))
    setPositive((good / (all + 1))*100)

  }

  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
      <h1>give feedback</h1>
      <div className="button-bar">
        <Buttons handleClick={handleClickGood} text='good'/>
        <Buttons handleClick={handleClickNeutral} text='neutral'/>
        <Buttons handleClick={handleClickBad} text='bad'/>
      </div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    )

    
  } else {
    return (
    <div>
      <h1>give feedback</h1>
      <div className="button-bar">
        <Buttons handleClick={handleClickGood} text='good'/>
        <Buttons handleClick={handleClickNeutral} text='neutral'/>
        <Buttons handleClick={handleClickBad} text='bad'/>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}
}

export default App