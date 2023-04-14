
import './App.css';
import "./Components/Titulo.css"
import Card from './Components/Card';
import {useEffect, useState} from "react"
import axios from 'axios';
import Titulo from './Components/Titulo';
import { useNavigate } from "react-router-dom";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const App = () => {

  const ariaLabel = { 'aria-label': 'description' };

  

  const nombres = ["toon", "dark magician", "ABC", "Archfiend", "Elemental HERO", "ghostrick", "Earthbound", "koala", "Performapal", "worm"];
  const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
  
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
  const HandlerOnNext=()=>{
    navigate("/X");
  }
  const HandlerOnBack=()=>{
    navigate("/");
  }

  useEffect(()=>{
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + nombreAleatorio).then(data=>{
    console.log(data.data.data)
    setListaCartas(data.data.data)
  }

  
    
    )
  },[])



 return (

    <>
    




    <Button
  color="primary"
  size="small"
  variant="outlined"
  onClick={HandlerOnBack}
  ><ChevronLeftIcon/>Previous</Button>

  <Button
  color="primary"
  size="small"
  variant="outlined"
  onClick={HandlerOnNext}
  >Next<ChevronRightIcon/></Button>

  
    


    <div className='titulo'>
      <Titulo></Titulo>
    </div>
    
    <Input sx={{marginBottom: "10px", marginLeft:"5px"}} onChange={HandlerOnChange} placeholder="Search by archetype" value={searhItem} inputProps={ariaLabel} />
    
    <button className='summit' onClick={HandlerOnSummit}>Go</button>
    
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



export default  App
