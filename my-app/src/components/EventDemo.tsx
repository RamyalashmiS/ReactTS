import React from 'react'
type Eventbtn = {
  value:string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const EventDemo = (props: Eventbtn): JSX.Element => {

  return (
    <div>
      <input type='text' onChange={props.handleChange} value={props.value} />
      <button onClick={props.handleClick}>Click here!</button>
    </div>
  )
}

export default EventDemo
