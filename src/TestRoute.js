
import './App.css';
import "./Components/Titulo.css"
import Card from './Components/Card';
import {useEffect, useState} from "react"
import axios from 'axios';
import Titulo from './Components/Titulo';
import { useNavigate } from "react-router-dom";

const TestRoute = () => {

  const [listaCartas, setListaCartas] = useState([])
 
  const [searhItem, setSearchItem] = useState("")

  const navigate = useNavigate();

  const HandlerOnChange = (event)=>{
  setSearchItem(event.target.value)
  }

  const HandlerOnSummit=()=>{
axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype="+ searhItem).then(data=>{
    console.log(data.data.data)
    setListaCartas(data.data.data)
  }
    
    )
  }


  useEffect(()=>{
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=melffy").then(data=>{
    console.log(data.data.data)
    setListaCartas(data.data.data)
  }
    
    )
  },[])

  const HandlerOnNext=()=>{
    navigate("/X");
  }
  const HandlerOnBack=()=>{
    navigate("/");
  }



 return (

    <>
    <button onClick={HandlerOnBack}>Back</button>
    <button onClick={HandlerOnNext}>Next</button>
    

    <div className='titulo'>
<Titulo></Titulo>
    </div>
    
    <input type='text' onChange={HandlerOnChange}></input><button onClick={HandlerOnSummit}>Go</button>

    <div className="App">
    {
      listaCartas.map((item,index)=>
      <Card key={index} titulo={item.name} imagen={item.card_images[0].image_url} calif={item.calif} precio={item.card_prices[0].cardmarket_price}></Card>
      )
    }
     
    </div>
</>


  );



}



export default  TestRoute
