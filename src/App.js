import './App.css';

function App() {
    var classes = "App"
    if (process.env.REACT_APP_EMBEDDED === "false") {
        classes = "App DebugApp"
    }
    console.log("embed: " + process.env.REACT_APP_EMBEDDED)
    console.log(classes)
  return (
    <div className={classes}>
      <header className="App-header">
        🇫🇷15:20
          🇨🇦 9:20
      </header>
    </div>
  );
}

export default App;
