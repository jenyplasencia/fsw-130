import React, { useState } from 'react'
import ThemeContext, {themes} from './components/Theme-Context';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
    const [theme, setTheme] = useState(themes.dark)
    const toggleTheme = () =>
     theme === themes.dark ? setTheme(themes.light): setTheme(themes.dark);
        return (
            <ThemeContext.Provider value ={theme} >
                <Navbar />
                <Main />
                <Button />
                <Footer />    
            </ThemeContext.Provider>
        )
    }

  export default App;