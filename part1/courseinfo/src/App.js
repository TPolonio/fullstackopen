
const Header = (course) => {
  return ( 
  <div>
    <h1>{course.name}</h1>
  </div>
  )
}
 
const Part = (contents) =>{
  return(
    <div>
      <p>{contents.part} {contents.exercise}</p>
    </div>
  )
}


const Content = (parts) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
        <Part part={part1} exercise={exercises1}/>
        <Part part={part2} exercise={exercises2}/>
        <Part part={part3} exercise={exercises3}/>
    </div>
  )
 }

const Total = (exercises) => {
  return (
  <div>
    <p>Number of exercises {exercises.exercises1 + exercises.exercises2 + exercises.exercises3}</p>
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header name={course.name}/>
      <Content />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises}  exercises3={course.parts[2].exercises}/>
    </div>
  )
}

export default App