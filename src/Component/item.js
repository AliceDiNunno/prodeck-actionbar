export const increment = (state, props) => ({
    value: state.value + 1
});

export const Item = ({ children }) => {
    const itemStyle = {
        width: "12.5%",
        height: "100%",
        backgroundColor: "#2c3e50",
        border: "1px solid #34495e",
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

