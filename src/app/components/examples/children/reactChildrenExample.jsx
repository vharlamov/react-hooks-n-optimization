import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});

    const handleChange = (target) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ""
        };
        return React.cloneElement(child, config);
    });
    // console.log(children);
};
const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField label="email" name="email" />
                <TextField label="Пароль" name="password" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
