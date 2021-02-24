
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const phones=[
  {
    name:'iPhone',
    brand:'11 ultra pro max',
    price:'$999',
    info:'The iPhone 11 Pro and Pro Max both have an A13 Bionic processor. Both phones have three internal storage options: 64 GB, 256 GB, and 512 GB, and have 4 GB of RAM. Both models are rated IP68 water and dust resistant, and are resistant for 30 minutes at a depth of 4 meters.'
  },
  {
    name:'Huawei',
    brand:'P40 pro',
    price:'$799',
    info:'As an overall camera package, the P40 Pro is nothing short of brilliant. Its the best smartphone shooter that money can buy, and is the reason to purchase the phone. Full-resolution Huawei P40 Pro photo samples are available here'
  },
  {
    name:'Oppo',
    brand:'F9 pro',
    price:'$699',
    info:'My Android phone has a more beautiful screen, a better camera, can do way more things with more features, and costs less than your top of the line iPhone. The fact of the matter is, Android phones have come a really long way over the years and are much better today than they ever used to be'
  },
  {
    name:'Vivo',
    brand:'X50 5G',
    price:'$799',
    info:'The Vivo X50 comes with the build quality and design of a flagship smartphone without a doubt. The smartphone comes with a glass back and metal frame making it super sturdy and it has a punch hole on the front.In conclusion, Vivo X50 is a true flagship smartphone with great build quality and design'
  }
];
function App() {
  return (
    <div>
      {
        phones.map(phone=><Phone name={phone.name} model={phone.brand} info={phone.info} price={phone.price}></Phone>)
      }
    </div>
  )
}
function Phone(props){
  const parentDiv={
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItem:'center'

  }
  const phoneStyle ={
    width:'500px',
    border:'2px solid red',
    margin:'10px',
    padding:'10px',
    backgroundColor:'yellow'
  }
  return(
    <header style={parentDiv}>
      <div style={phoneStyle}>
        <img src={logo} className='app-logo' alt='React-log'></img>
        <h2>Phone Name: {props.name}</h2>
        <h3>Phone Model: {props.model}</h3>
        <h2>Price:{props.price}</h2>
        <p>Description: {props.info}</p>
        <QuantityCounter></QuantityCounter>
      </div>
    </header>
  )
}
function QuantityCounter(props){
  let [count ,setCount]=useState(0);

  // Adding handleCLick
  const handleAdd=()=>{
    setCount(count+1);
  }
  const handleRemove=()=>{
      if(count<=0){
        alert('warning');
      }else{
        setCount(count-1);
      }
  }
  const buttonStyle={
    border:'2px solid tomato',
    padding:'10px 20px',
    backgroundColor:'tomato',
    color:'white',
    cursor:'pointer'
    
  }
  return(
    <div>
      <button onClick={handleAdd} style={buttonStyle}>Add</button>
      <h3>{count}</h3>
      <button onClick={handleRemove} style={buttonStyle}>Remove</button>
    </div>
  )
}
export default App;
