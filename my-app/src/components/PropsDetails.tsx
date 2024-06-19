import React from 'react'

interface PropsIntf { greet: string, age: number, name?: string }

const PropsDetails = ({ greet, age }: PropsIntf) => {
    return (
        <h1>
            PropsDetails Hi {greet} and {age} years old
        </h1>
    )
}

// const PropsDetails:React.FC<PropsIntf> = ({ greet, age }) => {
//     return (
//         <h1>
//             PropsDetails Hi {greet} and {age} years old
//         </h1>
//     )
// }

export default PropsDetails


