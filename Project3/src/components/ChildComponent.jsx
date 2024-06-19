const ChildComponent = (props) => {
    return (
        <>
            <button onClick={() => {
                // eslint-disable-next-line react/prop-types
                props.onNameChange();
            }}>Change the Name (child)</button>
        </>
    )
}
export default ChildComponent