import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const noCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const validateNoCallback = (data) => {
        console.log("data", data);
    };

    const validateWithCallback = useCallback((data) => {
        console.log("WithCallback", data);
    }, []);

    useEffect(() => {
        validateNoCallback(data);
    }, [data]);

    useEffect(() => {
        noCallBack.current++;
    }, [validateNoCallback]);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>Renders without callback: {noCallBack.current}</p>
            <p>Renders with callback: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
