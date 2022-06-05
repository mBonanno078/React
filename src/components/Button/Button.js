import React, {useState} from 'react';


const Button = () => {

    const [ title, setTitle ] = useState("Usestate");  

    const changeTitle = () => {
        setTitle('Ho cambiato il titolo');
    }

    return (
        <>
            <h1 className='my-3'>{title}</h1>
            <button 
            type='button'
            className='btn btn-info shadow my-3'
            onClick={changeTitle }>
             change me!
            </button>
        </>
    );
}

export default Button;