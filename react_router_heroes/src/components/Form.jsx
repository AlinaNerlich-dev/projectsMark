import { useState } from "react";
import { useForm } from "react-hook-form";
import { addHero, getHeroes } from "../DATA/heroes";

const Form = () =>{

    const [heroName, setHeroName] = useState(""); // Question: Cant I create a useState of the whole form instead of 3 seperate ones?
    const [heroAlias, setHeroAlias] = useState("");
    const [heroAge, setHeroAge] = useState(0);

    const {register, handleSubmit, formState} = useForm({
        defaultValues: {
          heroName: "",
          heroAlias:  "",
          age:0,
        },
      });
      console.log(formState)

      const onSubmit = () =>{ // Question: why dont I have to put heroName,heroAge,heroAlias into the () to pass it on??
        const heroes = getHeroes();
        const id = (heroes.length +1)
        addHero(id, heroName,heroAge,heroAlias);
      }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="heroName">Hero Name</label>
            <input type="text"  placeholder="superman" {...register("heroName", {required:{
                value: true,
                message:"You must provide a superhero name to continue"
            }})} onChange={(event) => setHeroName(event.target.value)}/>
            {formState.errors.heroName ? (<p>{formState.errors.heroName.message}</p>) : null}
            <br/>
            <label htmlFor="heroAlias">Hero Alias</label>
            <input type="text" placeholder="Clark Kent" {...register("heroAlias")} onChange={(event) => setHeroAlias(event.target.value)}/>
            <br/>
            <label htmlFor="heroAge">Hero Age</label>
            <input type="number"  placeholder="43" {...register("heroAge")} onChange={(event) => setHeroAge(event.target.value)}/>
            <br />
            <button type="submit" disabled={!formState.isDirty}>Submit</button> {/* // Question: Why is the disabled not working? */}
            
        </form>
    )
}

export default Form;