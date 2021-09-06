import React from "react";
//Styles
import {Wrapper, ActiveWrapper} from "./Button.styles";

const Button = ({text, callback, pressed}) => {
    return pressed
        ? (<ActiveWrapper type="button" onClick={callback}>
            {text}
        </ActiveWrapper>)
        : (<Wrapper type="button" onClick={callback}>
            {text}
        </Wrapper>)
};

export default Button;
