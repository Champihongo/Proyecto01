import "./Card.css"
import { useNavigate } from "react-router-dom";



const Card = (props) => {
    const navigate = useNavigate();

    const HandlerOnClick=()=>{
        navigate("/carta/" + props.titulo);
      }

    return <div className="carta" onClick={HandlerOnClick}>
        
        <p className="titulo">{props.titulo}</p>
        <img className="imagen"  src={props.imagen} alt="" />
        <p>CardMarket Price:</p>
        <p>$ {props.precio} </p>

    </div>
}
export default Card