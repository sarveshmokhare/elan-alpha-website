import { useState } from "react";
import AnimationContext from "./AnimationContext";

function AnimationState(props) {
    const [animationComplete, setAnimationComplete] = useState(false)

    return (
        <AnimationContext.Provider value={{animationComplete, setAnimationComplete}}>
            {props.children}
        </AnimationContext.Provider>
    )
}

export default AnimationState;