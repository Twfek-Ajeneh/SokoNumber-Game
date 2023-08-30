//import react
import React , {useRef} from "react";
import { useNavigate } from "react-router-dom";

//import style sheet
import './LinkButton.css';

function LinkButton(props){
    const div = useRef();
    const nav = useNavigate();

    const handleEffect = () => {
        if(props.disabled !== true && props.disabled !== 1){
            if(div.current.classList.contains('main-button-effect-after')){
                div.current.classList.remove('main-button-effect-after');
                div.current.classList.add('main-button-effect-before');
            }
            else{
                div.current.classList.remove('main-button-effect-before');
                div.current.classList.add('main-button-effect-after');
            }
        }
    }

    const handleNavigate = () => {
        nav(props.to);
    }

    return(
        <div className='main-button' ref={div} onClick={handleEffect}>
            <button
                style={{backgroundColor : props.color , width : props.width , height : props.height}} 
                onClick = {handleNavigate}
                disabled = {props.disabled}
            >
                {props.title}
            </button>
        </div>
    );
}

export default LinkButton;