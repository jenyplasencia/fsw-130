import React from 'react'
import { ThemeContext } from "./Theme-Context";

function Navbar(){
    
    return(
        <ThemeContext.Consumer>
            <ul style={theme.theme}>
                <li style={theme.theme}> Home    </li>
                <li style={theme.theme}> About   </li>
                <li style={theme.theme}> Contact </li>   
            </ul>
    </ThemeContext.Consumer>
    )
    
}
export default Navbar;