import { useState } from "react";
import { useForm } from "react-hook-form";
import { addHero, getHeroes } from "../DATA/heroes";

const Form = () =>{

    const [heroName, setHeroName] = useState("");
    const [heroAlias, setHeroAlias] = useState("");
    const [heroAge, setHeroAge] = useState(0);

    const {register, handleSubmit} = useForm({
        defaultValues: {
          heroName: "",
          heroAlias: "",
          age:0,
        },
      });

      const onSubmit = () =>{ // Question: why dont I have to put heroName,heroAge,heroAlias into the ()?
        const heroes = getHeroes();
        const id = (heroes.length +1)
        addHero(id, heroName,heroAge,heroAlias);
      }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="heroName">Hero Name</label>
            <input type="text"  placeholder="superman" {...register("heroName")} onChange={(event) => setHeroName(event.target.value)}/>
            <br/>
            <label htmlFor="heroAlias">Hero Alias</label>
            <input type="text" placeholder="Clark Kent" {...register("heroAlias")} onChange={(event) => setHeroAlias(event.target.value)}/>
            <br/>
            <label htmlFor="heroAge">Hero Age</label>
            <input type="number"  placeholder="43" {...register("heroAge")} onChange={(event) => setHeroAge(event.target.value)}/>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;