import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * (factorial(n - 1) || 1) : 0;
}

function runFactorial(n) {
    console.log("Run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(150);
    const [other, setOther] = useState(true);
    const buttonColor = other ? "primary" : "danger";
    const fact = useMemo(() => runFactorial(value), [value]);

    useEffect(() => {
        console.log("render");
    });

    const handleInc = () => {
        setValue(value < 160 ? value + 10 : Infinity);
    };

    const handleDec = () => {
        setValue(value > 10 ? value - 10 : 0);
    };

    const toggleOther = () => {
        setOther(!other);
    };

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Result factorial: {fact}</p>
                <p>N-value: {value}</p>
                <button className="btn btn-primary ms-md-2" onClick={handleInc}>
                    Increment
                </button>
                <button className="btn btn-primary ms-md-2" onClick={handleDec}>
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn btn-${buttonColor} ms-md-2`}
                    onClick={toggleOther}
                >
                    Other state
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
