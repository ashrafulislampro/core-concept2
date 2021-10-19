import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayok = ["Alamgir" , "Hero Alam", "BappaRaz", "Jashim", "Shakib"];
  const nayka = ["Monmon", "Shabanah", "Bobli", "Nosrat"];
  const products = [
    {name : 'PhotoShop', price : '$890'},
    {name : 'Illustrator', price : '$456'},
    {name : 'SafeLer Soft', price : '$453'},
    {name : 'PDF', price : '$6.45'},
    {name : 'Premium' , price : '$456.56'}
  ]
  const productsName = products.map(pd => pd.name);
  console.log(productsName);
  return (
    <div className="App">
      <header className="App-header">
        <h2>I am a react developer.</h2>
        <ul>
          {
            nayok.map(name => <li>{name}</li>)
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }
        </ul>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {
          nayok.map(nak => <Person name={nak}></Person>)
        }
        
        <Person name ={nayok[2]} nayka={nayka[2]}></Person>
        <Person name ={nayok[3]} nayka={nayka[3]}></Person>
      </header>
    </div>
  );

  function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    },[]);
    return (
      <div>
        <h2>Dynamic Users : {users.length}</h2>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }
    function Counter(){
      const [count, setCount] = useState(10);
      // const handleButton = () => {
      //   const newCount = count + 1;
      //   setCount(newCount);
      // }
      return (
        <div>
          <h1>Count : {count}</h1>
          <button onMouseMove={ () => setCount(count + 1)}>Increase</button>
          <button onMouseEnter={ () => setCount(count - 1)}>Decrease</button>
        </div>
      )
    }
    function Product(props){
      const {name, price} = props.product;
      const productStyle ={
        backgroundColor: "lightgrey",
        border: "1px solid black",
        borderRadius: "5px",
        width: "300px",
        height: "250px"
      }
      return(
        <div style={productStyle}>
          <h4>{name}</h4>
          <h5>{price}</h5>
          <button>Buy Now</button>
        </div>
      )
    }

  function Person(props) {
    let personStyle={
        border: '5px solid yellow',
        borderRadius: '10px',
        margin: '10px',
        width: '600px',
        padding: '10px'
      }
    return (
      <div style={personStyle}>
        <h2>Nayok : {props.name}</h2>
        <h3>Heroen of the year : {props.nayka}</h3>
        <h4>Na Na ore arto habe nah amer moner sathe.</h4>
      </div>
    )
  }
}

export default App;
