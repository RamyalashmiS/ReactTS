import './App.css';
import ArrayObjects from './components/ArrayObjects';
import ArrayState from './components/ArrayState';
import ChildProp from './components/ChildProp';
import DefaultProps from './components/DefaultProps';
import DifferentProps from './components/DifferentProps';
import ExternalStyling from './components/ExternalStyling/ExternalStyling';
import IncrementDecrement from './components/IncrementDecrement';
// import Home from './components/Home';
import InlineStyling from './components/InlineStyling';
import LightSwitch from './components/LightSwitch';
import ObjectState from './components/ObjectState';
import PropsDetails from './components/PropsDetails';
import Start from './components/Start';
// import InternalStyling from './components/InternalStyling';
// import Start from './components/Start';
import "bootstrap/dist/css/bootstrap.css"
import StateTask from './components/StateTask';
import EventDemo from './components/EventDemo';

// import "node_modules\bootstrap\dist\css\bootstrap.css"
function App() {
  return (
    <>
      {/* <Home />
      <h1>Hi Everyone!</h1>
      <Start/>
      <InternalStyling/> */}
      {/* <InlineStyling/> */}
      {/* <ExternalStyling/> */}
      {/* <PropsDetails greet="Good evening!" age={10}/> */}
      {/* <DefaultProps name="Ramya" feeling="Happy"/>
      <DefaultProps name="Ramya" /> */}
      {/* <DifferentProps backgroundColor="red" color="white" /> */}
      {/* <DifferentProps style={{backgroundColor:"red", color:"white", fontSize:10}} /> */}
      {/* <ChildProp>Are you ready</ChildProp>
      <ChildProp><p>From p tag inside child prop</p></ChildProp> */}

      {/* <ChildProp kid={<Start/>}/> */}

      {/* <LightSwitch/>
      <IncrementDecrement/>
      <ObjectState/>
      <ArrayState/> */}
      {/* <ArrayObjects/> */}

      <StateTask/>
      <EventDemo value="Enter name" handleChange={(event)=>{console.log("Text got changed", event)}} handleClick={((event)=>{console.log("Button got clicked")})} />
    </>
  );
}

export default App;


// import React from 'react'
// type ChangeEvt={
//     value:string,
//     handleCh:(e:React.ChangeEvent<HTMLInputElement>)=>void
// }
// const EventChange = ({value,handleCh}:ChangeEvt):JSX.Element => {
//   return <input type="text" value={value} onChange={handleCh}/>
// }
// export default EventChange 


// <EventChange value="%%%%%" handleCh={(e)=>console.log("Text got changed",e)}/>