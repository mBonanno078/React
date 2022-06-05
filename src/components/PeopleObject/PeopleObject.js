import React, {useState} from "react";

const PeopleObject = () => {

    /*
     * Utilizziamo gli oggetti perchè come in questo caso il codice è più mantenibile nel tempo
     * perchè se non usassi gli oggetti avvrei un n funzioni per aggioranre i singloli parametri, 
     * come adesso per drescrivere una persone. 
     * E sempre meglio lavorare con gli oggetti sopratutto quando si descrivono proprietà di un prodotto o persone.
     * Altrimenti avrei un codice come questo praticamente una funzione per ogni proprietà.
     * // const [name,setName] = useState('dario')
     * // const [age,setAge] = useState(24)
     * // const [saluto,setSaluto] = useState('ciao')
     */

    const [person , setPerson] = useState({
        name: 'Mario',
        age: '30',
        work: 'Programer',
        message: 'I\'m programer'
    });

    const changeMessage = () => {
        setPerson({
            ...person,
            message: 'cambio',
            name: 'giovanni'
        });
    }

    return (
        <>
            <div className="item shadow">
                <div>
                    <h3 className="text-left">Name: {person.name}</h3>
                    <h4 className="text-left"> Work: {person.work}</h4>
                    <h4 className="text-left"> Age: {person.age}</h4>
                    <h4 className="text-left"> Message: {person.message}</h4>
                </div>
                <button 
                    type="button" 
                    className="button burder px-2" 
                    onClick={changeMessage}>
                    Change
                </button>
            </div>
        </>
    );

}

export default PeopleObject;