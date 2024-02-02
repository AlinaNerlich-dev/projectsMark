import { useParams } from "react-router-dom"
import { getHero } from "../DATA/heroes";

const Hero = () =>{
    const { id } = useParams();
    console.log(id)
    const hero = getHero(id);
    console.log(hero)
    return (
        <>
            <h1>Hero {id}</h1>
            <h2>{hero.name}</h2>
            <p>{hero.age}</p>
            <p>{hero.alias}</p>
        </>
    )
}

export default Hero