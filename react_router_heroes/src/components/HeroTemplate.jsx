
const HeroTemplate = ({ hero, navigate }) => {
    return (
        <>
         <li key={hero.id}>
                    <h4><button onClick={()=>{navigate(`/heroes/hero/${hero.id}`)}}>{hero.name}</button></h4>
                    <p>{hero.age}</p>
                    <p>{hero.alias}</p>
        </li>
        </>
    )
}

export default HeroTemplate;