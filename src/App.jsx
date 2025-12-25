// Notes
// 1. one component cant return multiple sibling element there should be only one element in which all other child element should be present
// 2. rerendering in react 
//    2.1 whenver the state change whole component rerender along with static child component it have
//    2.2 to avoid this push the state variable as down as possible
//    2.3 another changes way to avoid re-render is memeo prevents rendering the child component who is not using that state variable
// 3. Wrapper component : it takes react compones as input and returns another react component
import React from "react"

function App() {

  return (
    <div>
      {/* this way is not mostly used and not legit way of creating wrapper component */}
      <CardWrapper InnerComponent = {<InnerComponent/>}/>
      {/* given below is correct way of creating a wrapper component */}
      <RealCardWrapper>
        <div>this is inner component code of real wrapper</div>
      </RealCardWrapper>
    </div>
  )
}

function InnerComponent(){
  return <div>
    Hi there
  </div>

}

function RealCardWrapper({children}){
  return <div style={{border : "2px solid white"}}>
    {children}
  </div>
}
function CardWrapper({InnerComponent}){
  return <div style={{border : "2px solid white"}}>
    {InnerComponent}
  </div>

}


export default App


