export const Child = ({ name, handleChangeCount }) => { // props
    const handleClick = () => {
        handleChangeCount(count => count + 1);
    }

    return <>
        <p>FUNCTION CHILD</p>
        <p>{name}</p>
        <button onClick={handleClick}>click</button>
    </>;
}