import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {dataPeople} from './assets/data';

// components
import ListPeople from './components/Appointments/Appointments';
import ButtonReset from './components/ButtonReset/ButtonReset';


function App() {

  const [ person , setPerson ] = useState(dataPeople);

  const removePerson = id => setPerson( oldPerson => oldPerson.filter(el => el.id !== id) );

  const reload = () => setPerson(dataPeople);

  const removeAllPerson = () => setPerson([]);

  return (
    <div className="App">
      <section className="content">
          <h1 className="title">
            lista appuntamenti
          </h1>
         <ListPeople person={person} removePerson={removePerson}/>
      </section>
      <div className="action-buttons">
        <ButtonReset message="Remove all" actions={removeAllPerson}/>
        <ButtonReset message="Reload Person" actions={reload}/>
      </div>
    </div>
  );
}

export default App;
