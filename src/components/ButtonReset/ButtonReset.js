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

// function saveDataToLocalStorage(idPost){

//     let postArticleId = localStorage.getItem("postId") ? JSON.parse(localStorage.getItem("postId")) : [];
    
//     postArticleId.push(idPost);

//     localStorage.setItem("postId", JSON.stringify(postArticleId));

// }

/* prendere dati dal local storage */

// function getDataToLocalStorageFeedback(){
//     // content feedback 
//     let feedBack = document.querySelector('.content-feedback');

//     // buton clocle feedback 
//     let feedBackClose = document.querySelector('.close-feedback');

//     let getDataFeedback = localStorage.getItem('postDelete');


//     if(getDataFeedback){
//         feedBack.classList.add('content-feedback-visible');
//         jQuery( document ).ajaxComplete(function() {
//             feedBack.style.opacity = "1" ;
//             setTimeout(function(){
//                 feedBack.style.opacity = "0" ;
//                 localStorage.removeItem('postDelete');
//              },2000); 
//              setTimeout(function(){
//                 feedBack.style.display = "none" ;
//              },2500); 

            
           
//           });

//         // close feedback   
//         feedBackClose.addEventListener('click' , () => {
//             feedBack.style.opacity = "0" ;        
//         });   

      
    
//     }

// }