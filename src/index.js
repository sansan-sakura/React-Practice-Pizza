import React from "react"
import  ReactDOM  from "react-dom/client"
import "./index.css"
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){
    return (
    <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>)
}

function Header(){
const style={}
     return (
     <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
     </header>)
}

function Footer(){
    const hour = new Date().getHours()
    const openHour=8;
    const closeHour=22
    const isOpen=hour>=openHour&& hour<=closeHour? "open":"closed";
  
return(
<footer className="footer">{new Date().toLocaleDateString()} We're currently {isOpen}</footer>)
}

function Menu(){
    const pizzas=pizzaData
    const numPizza=pizzas.length
    return(
         <main className="menu">
        <h2>Our Menu</h2>

      {numPizza>0 ?
      <>
      <p>Authentic Italian cuisinme. 6 createve dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      <ul className="pizzas">
            {pizzaData.map(pizza=> 
            (<Pizza key={pizza.name} name={pizza.name} ingredient={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut}/>))}
        </ul></>: <p>"We're still working on our menu. Please come back leter!"</p>
        }
    </main>)}
    


function Pizza(props){
    return ( 
    <li className={`pizza ${props.soldOut? "sold-out":""}`}>
    <img src={props.photoName} alt={props.name}/>
    <div>
     <h3>{props.name}</h3>
    <p>{props.ingredient}</p>
    <span>{props.soldOut? "Sold Out":props.price}</span>
    </div>
    </li>)
}

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<React.StrictMode><App/></React.StrictMode>)