import React, { useState } from 'react'

const ArrayObjects = (): JSX.Element => {

    interface SweetIntf {
        name: string,
        price: number,
    }
    const [sweets, setSweets] = useState<SweetIntf[]>(
        [
            {
                name: "Rasgulla",
                price: 100
            },
            {
                name: "Basundhi",
                price: 120
            }
        ]
    )

    const handleClick = () => {
        setSweets([
            ...sweets,
            {
                name: "Kaju Katli",
                price: 300,
            },
            {
                name: "Kaju Barfi",
                price: 400,
            }
        ]);
    };


    return (
        <>
            <h1>Array Objects</h1>
            {
                sweets.map((sweet, index) => {
                    return (<div key={index}>
                        <h1>Name : {sweet.name}</h1>
                        <h1>Price : {sweet.price}</h1>
                    </div>)
                })
            }

            <button onClick={handleClick} >Add More</button>

        </>
    )
}

export default ArrayObjects
