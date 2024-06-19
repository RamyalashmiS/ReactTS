import React from 'react'

// interface DiffPropIntf{
//   backgroundColor:string,
//   color:string
// }

// interface DiffPropIntf {
//   style: {
//     backgroundColor: string,
//     color: string
//   }
// }

interface DiffPropIntf {
  style: React.CSSProperties
}

const DifferentProps = ({style}: DiffPropIntf): JSX.Element => {
  return (
    <div style={style}>
      Different Props
    </div>
  )
}

export default DifferentProps
