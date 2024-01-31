import { getHeroes } from "../DATA/heroes"
import { useNavigate } from "react-router-dom";

const Heroes = () =>{
    const heroes = getHeroes();
    const navigate = useNavigate();

    return (
        <>
        <h2>All Heroes</h2>
        <button onClick={() => {navigate("/heroes/add")}}>Add Hero</button>
        <ul>
            {heroes.map((hero) =>(
                <li key={hero.id}>
                    <h4><button onClick={()=>{navigate(`/heroes/hero/${hero.id}`)}}>{hero.name}</button></h4>
                    <p>{hero.age}</p>
                    <p>{hero.alias}</p>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Heroes