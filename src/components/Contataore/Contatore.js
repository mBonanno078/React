import React, {useState} from "react";

/**
 * UseState ha due tipy di return, return value e return funzionale!!
 * il return value si basa sul valore corrente del valere al momento dell'attivazione della funzione
 * ma non tiente traccia del valore. Se io utilizzassi setCounter(counter + 1) questo funzionarebbe lo stesso, ma se mettessi
 * demtro un setTimeoit() co 2 secondi di ritardo e cliccassi molte volte, il valore aumentato non corrisposnderebbe al numero 
 * di click effettuato. Cosi nei casi un cui il valore da ritornare dipende co0me in questo caso dal valore precendente è più consigliato 
 * utilizzare il return funzinale.
 */

const Contatore = () => {
    const [counter, setCounter] = useState(0);

    const decrease = () => {
        setCounter(oldCounter => {

            if (oldCounter - 1 >= 0 ) return oldCounter - 1;

            return oldCounter;
        });
    }

    // return funzionale
    const increase = () => setCounter( oldCounter => oldCounter + 1 );

    // return value setcounter(counter + 1);
    // setCounter(0); utilizzato per il reset che riporta il valore a 0
    
    return (
        <>
           <div className="bg-white shadow roudend py-5 w 75 col-6 offset-3  my-5">
               <h3>{counter}</h3>
               <div className="d-flex justify-content-between padding">
                   <button className="button my-2" onClick={decrease} >Decrease</button>
                   <button className="button my-2" onClick={increase} >Increase</button>
               </div>
                <button 
                    type="button" 
                    className="button reset-button my-2 padding"
                    onClick={ () => setCounter(0) }> 
                    Reset Counter
                </button>
           </div>
        </>
    );
}

export default Contatore;