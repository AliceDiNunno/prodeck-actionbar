import './App.css';

const Item = ({ children }) => {
    const itemStyle = {
        width: "12.5%",
        height: "100%",
        backgroundColor: "red",
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


const Row = ({ children }) => {
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


function App() {
    var classes = "App"
    if (process.env.REACT_APP_EMBEDDED === "false") {
        classes = "App DebugApp"
    }
    console.log("embed: " + process.env.REACT_APP_EMBEDDED)
    console.log(classes)

    var TwoTimesEightArray = Array(2).fill(Array(8).fill(0))
    //set values in array from 0 to 15
    TwoTimesEightArray = TwoTimesEightArray.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            return rowIndex * 8 + colIndex
        })
    })


    console.log(TwoTimesEightArray)

  return (
    <div className={classes}>
      <header className="App-header">
          {
                TwoTimesEightArray.map((row, rowIndex) => (
                    <Row>
                        {row.map((col, colIndex) => (
                            <Item>
                                {col}
                            </Item>
                        ))}
                    </Row>
                ))
          }
      </header>
    </div>
  );
}

export default App;
