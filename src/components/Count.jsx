import { useState } from 'react'; // чтобы использовать useState

export const Count = (props) => { //props получаем из APP.jsx
    const [count, setCount] = useState(1); // count - название, setCount - функция, useState(1) - изначальное значение count

    const handleClick = () => {
        setCount(count + 1);
    }

    return <>
        <p>FUNCTION FORM</p>
        <p>{props.name}</p>
        <p>Count state: {count}</p>
        <button type="button" onClick={handleClick}>click</button>
    </>
}