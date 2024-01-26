import logo from './logo.svg';
import './App.css';

function App() {
    var classes = "App"
    if (process.env.NODE_ENV === "development") {
        classes = "App DebugApp"
    }
    console.log(process.env.NODE_ENV)
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
