import React from 'react'


//normal fun with return type
// function Comp1:():React.ReactElement {
//   return React.createElement("h1",{},"Hello World"  )
// }

//arrow fun with return type
// const Comp1=():JSX.Element=>{
//     return(
//         <>
        
//         </>
//     )
// }

//arrow fun with function type
const Comp1:React.FC=()=>{
    return(
        <>
        <h1>Comp1</h1>
        </>
    )
}

//normal funs can't accept function type, only return type can be given
//whereas, arrow funs --> either function type or return type will do!

export default Comp1
