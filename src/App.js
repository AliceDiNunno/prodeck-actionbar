import './App.css';

import React from 'react';

import {Row} from "./Component/row";
import {Item} from "./Component/item";

import {Empty} from "./Component/widget/empty";
import {FrTime} from "./Component/widget/FrTime";
import {QcTime} from "./Component/widget/QcTime";

function viewMapping() {
    let mapping = new Map()

    mapping.set(1, FrTime)
    mapping.set(2, QcTime)

    return mapping
}

function widgetForIndex(index) {
    console.log("index: " + index)

    const mapping = viewMapping()

    console.log(mapping, index, mapping.has(index))

    if (mapping.has(index)) {
        console.log("OK for", index)
        return mapping.get(index)()
    } else {
        console.log("Empty for", index)
        return Empty()
    }
}

function App() {
    var classes = "App"
    if (process.env.REACT_APP_EMBEDDED === "false") {
        classes = "App DebugApp"
    }
    console.log("embed: " + process.env.REACT_APP_EMBEDDED)
    console.log(classes)

    var TwoTimesEightArray = Array(2).fill(Array(8).fill(0))

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
                                {
                                    widgetForIndex(col)
                                }
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
