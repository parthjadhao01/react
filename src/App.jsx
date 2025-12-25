// Notes
// 1. one component cant return multiple sibling element there should be only one element in which all other child element should be present
// 2. rerendering in react 
//    2.1 whenver the state change whole component rerender along with static child component it have
//    2.2 to avoid this push the state variable as down as possible
//    2.3 another changes way to avoid re-render is memeo
import { useState } from "react"



// function Header(props){
//   return <div>
//     <h1>{props.title}</h1>
//   </div>
// }
function Header({ title }) {
  return <div>
    <p>my name is {title}</p>
  </div>
}

function HeaderWithButton() {
  const [title, setTitle] = useState("name")
  return <>
    <button onClick={() => { setTitle(Math.random()) }}>Click here to change name</button>
    <Header title={title}></Header>
  </>
}

function App() {
  // pushing state variable down
  // const [title,setTitle] = useState("name")


  return (
    <div>
      {/* pushing state variable down  */}
      {/* <button onClick={()=>{setTitle(Math.random())}}>Click here to change name</button>
      <Header title={title}></Header> */}
      <HeaderWithButton></HeaderWithButton>
      <Header title="jadhao"></Header>
    </div>
  )
}



export default App


