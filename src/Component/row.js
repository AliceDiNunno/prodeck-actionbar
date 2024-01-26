export const Row = ({ children }) => {
    const rowStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        height: "50%",
    }

    return (
        <div style={rowStyle}>
            {children}
        </div>
    );
};
