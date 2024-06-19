const Calculator = (props) => {
  // const Calcultor = (num1,num2) => { //listing
  // let a = 10, b = 30;
  // let {a,b} = props destructuring method
  return (
    <>
      <p>This is the calcultor</p>
      <p>The ans is {parseInt(props.a) + parseInt(props.b)}</p>
    </>
  )
}

export default Calculator
