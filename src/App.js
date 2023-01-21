
import './App.css';
import Header from './component/Header';
import Input from "./component/Input";
import Currency from './component/Currency';
import Group from './component/Group';
import Rate from './component/Rate';
import React, { useState } from 'react';






function App() {
  // const [currency_one, setCurrency_one] = useState(" ")
  const [amountOne, setAmountOne] = useState(1)
  const [amountTwo, setAmountTwo] = useState(1)
  const [rate, setRate] = useState("")

  function GetValue(e) {
    const {value, name} = e.target
    const currency_two = document.getElementById("currency-two")
    const currency_one = document.getElementById("currency-one")
    var currencyOne = currency_one.value

      // console.log(value)
      if (name == "amount-one" ) {
        setAmountOne(value)
        
      }

      function calculate() {
        fetch(`https://v6.exchangerate-api.com/v6/a40f76ca0a78732395285851/latest/${currencyOne}`)
        .then(data=>{
          // console.log(data)
         return data.json()
        }).then(res=>{
          
          var data= res;
          var currencyTwo = currency_two.value
          var rates = data.conversion_rates[currencyTwo];
          var text = '1 ' + currencyOne + ' is ' + rates + ' ' + currencyTwo
          setRate(text)
          const amount = ( amountOne.value * rates ).toFixed(2)
          setAmountTwo(amount)
          console.log(amountOne)
          
        })
      }

      calculate()
    }


  return (
    
    <div className='margin'>
    {/* <img src='./img/money.png' /> */}
    <Header />
    <Group>
    <Currency 
      name = "currency-one"
      calc ={GetValue}
      value = {amountOne}
      id="currency-one"
    />
    <Input
    name= "amount-one"
    type ="number"
    calc ={GetValue}
     />
     </Group>
    <Rate rate= {rate}/>
     <Group>
    <Currency 
      calc ={GetValue}
      id="currency-two"
    />
    <Input
    name= "amount-two"
    type ="number"
    value = {amountTwo}
    calc ={GetValue}

     />
     </Group>
    </div>

  );
}

export default App;
