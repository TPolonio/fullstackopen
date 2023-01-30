const Total = ( {parts} ) => {
    const total = parts.reduce((prev, curr) => 
    prev + curr.exercises, 0)
    return (  
      <p>Total of {total} </p>
    );
  }

const Course = ( {courses}) => { 
        return ( 
          <div>
            {courses.map(course => 
            <div>
               <h2 className="course-title">{ course.name }</h2>
               <ul>{course.parts.map(part => (
                <li key={part.id}>
                  {part.name} {part.exercises}
                </li>
               ))}</ul>
               <Total parts={course.parts}/>
               
            </div>   
               )}
         {/*    <ul>
            {course.parts.map(part => 
              <li key={part.id}> {part.name} {part.exercises} </li>
              )}
            </ul>
             */}{/* <p>Total of {exercises.reduce((s,p) => s + p)}</p> */}
            
          </div>
      
         );
      }
 
export default Course;