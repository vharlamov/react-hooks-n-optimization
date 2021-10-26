import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const sizeRef = useRef();
    const innerRef = useRef();

    const handleChange = () => {
        innerRef.current.innerText = "Текст";
        sizeRef.current.style.height = "150px";
        sizeRef.current.style.width = "80px";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={sizeRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={innerRef}>Блок</small>
            </div>
            <button className="btn btn-secondary mt-2" onClick={handleChange}>
                Change size
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
