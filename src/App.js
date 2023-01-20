
import './App.css';
import Header from './component/Header';
import Input from "./component/Input";
import Currency from './component/Currency';
import Group from './component/Group';
import Rate from './component/Rate';

function App() {
  return (
    
    <div className='margin'>
    {/* <img src='./img/money.png' /> */}
    <Header />
    <Group>
    <Currency 
      name = "currency-one"
    />
    <Input
    name= "amount-one"
    type ="number"
     />
     </Group>
    <Rate rate= "The Rate Btw USD to EUR is $0.92" />
     <Group>
    <Currency 
      name="currency-two"
    />
    <Input
    name= "amount-two"
    type ="number"
     />
     </Group>
    </div>

  );
}

export default App;
