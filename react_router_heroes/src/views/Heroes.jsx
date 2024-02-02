import { getHeroes } from "../DATA/heroes"
import { useNavigate } from "react-router-dom";
import HeroTemplate from "../components/HeroTemplate";

const Heroes = () =>{
    const heroes = getHeroes();
    const navigate = useNavigate();

    return (
        <>
        <h2>All Heroes</h2>
        <button onClick={() => {navigate("/heroes/add")}}>Add Hero</button>
        <ul>
            {heroes.map((hero) =>(
               <HeroTemplate key={hero.id} hero={hero} navigate={navigate}/> // Would you implement navigate as a prop or is it better to import it within the HeroTemplate?
            ))}
        </ul>
        </>
    )
}

export default Heroes