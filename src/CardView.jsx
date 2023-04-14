import { useMatch } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from 'axios';
import Solo from "./Components/Solo"
import { useNavigate } from "react-router-dom";


const Pag = ()=> {
    const { params } = useMatch("/carta/:id");
    const id = params?.id;
    const navigate = useNavigate();



    const HandlerOnBack=()=>{
      navigate("/");
    }
    
    const [listaSolo, setListaSolo] = useState([])

  
    console.log(id);
  
    useEffect(()=>{
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + id).then(data=>{
      setListaSolo(data.data.data)
    }
      
      )
    },[])

return(
  <>

<button onClick={HandlerOnBack}>Back</button>


  <div className="Nuevo">
    {
      listaSolo.map((item,index)=>
      <Solo key={index} nombre={item.name} className="nombre" arch={`Archetype: ${item.archetype}`} attribute={`Attribute: ${item.attribute}`} level={`Level: ${item.level}`}  atk={`Attack: ${item.atk}`} def={`Defence: ${item.def}`} desc={`"${item.desc}"`}></Solo>
      )
    }
     
    </div>
  
  </>
)
}


  
  export default Pag