import React, { useState } from 'react'

const ArrayState = (): JSX.Element => {

    const [subjects, setSubjects] = useState<string[]>(["Maths", "Science", "English"])

    return (
        <>
            <h1>Array as state variable</h1>
            <h1>Subjects</h1>
            <ul>
                {subjects.map((sub,index) => <li key={index}>{sub}</li>)}
            </ul>
            <button onClick={() => { setSubjects([...subjects, "node"]) }}>Add More</button>


        </>
    )
}

export default ArrayState
