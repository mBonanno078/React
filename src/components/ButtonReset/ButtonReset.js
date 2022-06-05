import { Button } from "bootstrap";
import React from "react";

const ButtonReset = (props) => {

    const { message, actions } = props;
    
    return (
        <button 
            type="button"
            onClick={actions}
            className={message === "Remove all"  ? "button-delete-item reset" :  "button-delete-item  reload"}>
                {message}
        </button>
    );
}

export default ButtonReset;