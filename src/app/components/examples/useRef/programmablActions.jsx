import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "200px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                name="email"
                id="email"
            />
            <button className="btn btn-primary mt-2" onClick={handleClick}>
                Фокус
            </button>
            <button
                className="btn btn-primary mt-2 ms-2"
                onClick={handleClickWidth}
            >
                Изменить ширину
            </button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
