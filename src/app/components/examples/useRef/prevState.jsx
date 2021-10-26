import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("true");

    const toggleOtherState = () => {
        setOtherState((prev) => (prev === "false" ? "true" : "false"));
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Previous state: {prevState.current}</p>
            <p>Current state: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
