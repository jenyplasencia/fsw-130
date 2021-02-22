import React from 'react'
import { ThemeContext } from "./Theme-Context";

function Main(){
    return(
        <ThemeContext.Consumer>
           <h1 style={theme.theme}> Let's Change Theme </h1> 
        </ThemeContext.Consumer>
    )
    
}

export default Main;

