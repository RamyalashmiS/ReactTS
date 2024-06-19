import React from 'react'

// interface ChildProp{
//     children:React.ReactNode
// }

// const ChildProp = ({children}:ChildProp) => {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

interface ChildProp{
    kid:React.ReactNode
}

const ChildProp = ({kid}:ChildProp) => {
  return (
    <div>
      {kid}
    </div>
  )
}

export default ChildProp
