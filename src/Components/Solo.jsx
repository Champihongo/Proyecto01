
import "./Solo.css"


const Solo = (props) => {

    return <div className="carta">
        <hr></hr>
        <p className="nombre">{props.nombre}</p>
        <hr></hr>
        <p className="arch" >{props.arch}</p>
        <p className="atk" >{props.atk}</p>
        <p className="def" >{props.def}</p>
        <p className="level">{props.level}</p>
        <p className="race" >{props.race}</p>
        <p className="attribute" >{props.attribute}</p>
        <p className="desc" >{props.desc}</p>
        <p className="misc" >{props.misc}</p>


    </div>
}
export default Solo