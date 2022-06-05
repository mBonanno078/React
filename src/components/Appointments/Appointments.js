import React from "react";

// scss
import './Appointments.scss';

const ListPeople = props => {
    const {person, removePerson} = props;
    return (
        <>
        {person.map(el => {
            const {id, name, avatar, message} = el;

            return (
                <article key={id} className="container-wrapper">
                    <div className="content-info">
                        <img src={avatar} alt="" className="avatar"/>
                        <div className="content-text">
                            <h5 className="name">{name}</h5>
                            <p className="message">{message}</p>
                        </div>
                    </div>
                    <button 
                        type="button"
                        className="button-delete-item"
                        onClick={ () => removePerson(id) }>
                        Delete
                    </button>
                </article>
            );
        })}
        </>
    );

}

export default ListPeople;
