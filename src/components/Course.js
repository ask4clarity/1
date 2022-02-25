import React from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Part = ({part}) => {
  return (
    <li>{part.name} {part.exercises}</li>
  )
}

const Course = (props) => {
  
  const {courses} = props
  console.log(courses)

  return (
    <>
    {courses.map(course =>
      <div key={course.id}>
      <Header name={course.name}/>
      <ul>
        {course.parts.map(part => 
          <Part key={part.id} part={part}/>  
        )}
      </ul>
      <Total parts={course.parts}/>
      </div>
    )}
    </>
  )
}

const Total = ({parts}) => {
  return (
    <>
      <p>Number of exercises {parts.reduce((a,b) => a + b.exercises, 0)}</p>  
    </>
  )
}

export default Course