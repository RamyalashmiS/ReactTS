import React from 'react'

type DefaultProp={
    name:string,
    feeling?:string;
}

const DefaultProps = ({name,feeling="Neutral"}:DefaultProp) => {
  return (
    <div>
      Default demo Name :{name} feeling: {feeling}
    </div>
  )
}

export default DefaultProps
