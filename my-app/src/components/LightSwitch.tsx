import React, { useState } from 'react'

const LightSwitch = ():JSX.Element => {
    // let light: string = "off"
    const [light,setLight]=useState<string>("off")

    const handleClick = () => {
        // light="on";
        // console.log(light)
        setLight("on")
    }

    return (
        <>
            <h1>Light is {light}</h1>
            <button onClick={handleClick}>Switch</button>
        </>
    )
}

export default LightSwitch
