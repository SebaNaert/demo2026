import Affichage from "./Affichage";

const Membre = ({nom, age, children, handleChange, hideName}) => {
    // const nom = props.nom
    // const age = props.age

    // const {nom, age} =  

    return ( 
        <>
            <Affichage
                nom = {nom}
                age = {age}
            />
            <input type="text" value={nom} onChange={handleChange} />
            <button onClick={hideName}>X</button>
            { children ? <p>{children}</p> : null }
        </>
     );
}
 
export default Membre;