/* eslint-disable react/prop-types */
import Name from "./components/Name"
import Calculator from "./components/Calculator"
import Description from "./components/Description"
import Greetings from "./components/Greetings"
function App() {
  let auth = false;
  return (
    <>
      <Name name="Rishi Patodiya" />
      <Name name="Rishi" />
      <Description />
      {/* {auth ? (
        <>
          <Calculator a="10" b="20" />
          <Calculator a="50" b="20" />
          <Greetings />
        </>
      ) : null
      } */}

      {/* both need to be true */}
      {auth && (<>
          <Calculator a="10" b="20" />
          <Calculator a="50" b="20" />
          <Greetings />
        </>)}
      {/* if(auth){
        <Calculator a="10" b="20"/>
        <Calculator a="50" b="20"/>
        <Greetings/>
      } */}
    </>
  )
}




export default App
