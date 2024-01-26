export const increment = (state, props) => ({
    value: state.value + 1
});

export const Item = ({ children }) => {
    const itemStyle = {
        width: "12.5%",
        height: "100%",
        backgroundColor: "black",

        border: "1px solid #7f8c8d",

        marginLeft: "-1px",
        marginRight: "-1px",
        marginTop: "-1px",
        marginBottom: "-1px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={itemStyle}>
            {children}
        </div>
    );
}

