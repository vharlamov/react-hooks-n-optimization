import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(true);

    const toggleOtherState = () => {
        setOtherState((prev) => !prev);
    };

    useEffect(() => {
        renderCount.current += 1;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
