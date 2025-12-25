// Notes
// 1. one component cant return multiple sibling element there should be only one element in which all other child element should be present
// 2. rerendering in react 
//    2.1 whenver the state change whole component rerender along with static child component it have
//    2.2 to avoid this push the state variable as down as possible
//    2.3 another changes way to avoid re-render is memeo prevents rendering the child component who is not using that state variable
import React from "react"
import { useState } from "react"

// defining the memo component
const Header = React.memo(function({ title }) {
  return <div>
    <p>my name is {title}</p>
  </div>
})

function App() {
  const [title,setTitle] = useState("name")


  return (
    <div>
      {/* using memeo  */}
      <button onClick={()=>{setTitle(Math.random())}}>Click here to change name</button>
      <Header title={title}></Header>
      <Header title="jadhao"></Header>
    </div>
  )
}



export default App


