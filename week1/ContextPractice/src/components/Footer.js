import React from 'react';
import { ThemeContext } from "./Theme-Context";

function Footer(){
    return(
        <ThemeContext.Consumer>
             <footer style = {theme.theme}> 
                <p>Jeny Plasencia - DEV360 </p> 
             </footer>
        </ThemeContext.Consumer>
    )
    
};

export default Footer;

