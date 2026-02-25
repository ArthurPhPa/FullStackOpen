// const funcTest = singleParameter => console.log(singleParameter)

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.p} {props.e}
    </p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part p={props.part1.name} e={props.part1.exercises} />
      <Part p={props.part2.name} e={props.part2.exercises} />
      <Part p={props.part3.name} e={props.part3.exercises} />
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App
