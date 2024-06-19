import React, { useState } from 'react'

const StateTask = () => {

    const [greeting, setGreeting] = useState<string>("Hello All !")
    const greetingSetter = (val: string) => {
        setGreeting(val)
    }

    return (
        <>
            <div className='my-4 container-fluid offset-3 cols-6'>
                <h2 className=' offset-2 cols-6'>{greeting}</h2>

                <div className='my-5 cols-6'>
                    <button className='btn btn-primary' onClick={() => greetingSetter("Good Day")}>Good Day</button>
                    <button className='offset-1 btn btn-danger' onClick={() => greetingSetter("Good Morning")}>Good Morning</button>
                    <button className='offset-1 btn btn-warning' onClick={() => greetingSetter("Good Evening")}>Good Evening</button>
                </div>
            </div>
        </>
    )
}

export default StateTask
