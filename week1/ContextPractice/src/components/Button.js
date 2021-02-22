import React from 'react'
import { ThemeContext } from "./Theme-Context";

function Button(){
    return(
        <ThemeContext.Consumer>
             <button onclick = {toggle.theme}> Click here to change theme </button>
        </ThemeContext.Consumer>
)
    
}

export default Button;

