import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeState(props) {
    const [theme, setTheme] = useState("dark")
    function toggleTheme() {
        setTheme(currTheme => (currTheme === "dark" ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;