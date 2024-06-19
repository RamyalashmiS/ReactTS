import React, { useState } from 'react'

const ObjectState = () => {
    type IdentityType = {
        name: string,
        age: number,
        address: string
    }

    const [identity, setIdentity] = useState<IdentityType>({
        name: "Priyal",
        age: 21,
        address: "Mumbai"
    })
    return (
        <>
            <h1>Object state variable</h1>
            <h1>Name : {identity.name}</h1>
            <h1>Age : {identity.age}</h1>
            <h1>Address : {identity.address}</h1>
            <button className='btn btn-success' onClick={() => {
                setIdentity({
                    name: "Ramya",
                    age: 25,
                    address: "Salem"
                })
            }} >Change the value</button>
        </>
    )
}

export default ObjectState
