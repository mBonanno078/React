import React, {useState} from 'react';

// assets 
import {data} from '../../assets/data';

const People = () => {

    const [ people, setPeople ] = useState(data);

    const removePeople = id => {
        let newPeople = people.filter(el => el.id !== id);
        setPeople(newPeople);
    }
 
    return (
        <>
            {people.map( el => {
               const {id , name} = el;
               return (
                   <div key={id} className="item shadow">
                       <h5>{name}</h5>
                       <button 
                        type='button'
                        className='button delete-button' 
                        onClick={ () => removePeople(id)}>
                           X
                       </button>
                   </div>

               );

            })}
        </>
    );

}

export default People;