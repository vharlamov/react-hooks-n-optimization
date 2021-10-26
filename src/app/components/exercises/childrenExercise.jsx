import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Divider from "../common/divider";

const ListComp = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return (
            <div className="d-flex">
                <span>{index + 1}.</span>
                <span className=" ms-1">{child}</span>
            </div>
        );
    });
};

ListComp.propTypes = {
    children: PropTypes.oneOfType(
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    )
};

const ListComp2 = ({ children }) => {
    const list = React.Children.toArray(children);

    return (
        <>
            {list.map((child, index) => {
                return (
                    <div className="d-flex" key={index}>
                        <span>{index + 1}.</span>
                        <span className=" ms-1">{child}</span>
                    </div>
                );
            })}
        </>
    );
};

ListComp2.propTypes = {
    children: PropTypes.oneOfType(
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    )
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <h4>With React.Children.map:</h4>
            <ListComp>
                <Component />
                <Component />
                <Component />
            </ListComp>
            <Divider />
            <h4>With React.Children.toArray:</h4>
            <ListComp2>
                <Component />
                <Component />
                <Component />
            </ListComp2>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
