import React from 'react'

const InternalStyling:React.FC = () => { //Either fun type - react.fc or return type - jsx.element
    interface DesignVal{
        color:string,
        backgroundColor:string,
        fontSize:string
    }

    let design:DesignVal={
        color:"red",
        backgroundColor:"yellow",
        fontSize:"30px"
    }
  return (
    <div style={design}>
      Internal Styling
    </div>
  )
}

export default InternalStyling