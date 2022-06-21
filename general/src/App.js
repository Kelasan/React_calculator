import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 style="text-align: end; color: white">0</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 bar1">
          <h1>AC</h1>
        </div>
        <div class="col-md-3">
          <h1>+/-</h1>
        </div>
        <div class="col-md-3">
          <h1>%</h1>
        </div>
        <div class="col-md-3 last">
          <h1>÷</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 bar1">
          <h1>7</h1>
        </div>
        <div class="col-md-3">
          <h1>8</h1>
        </div>
        <div class="col-md-3">
          <h1>9</h1>
        </div>
        <div class="col-md-3 last">
          <h1>x</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 bar1">
          <h1>4</h1>
        </div>
        <div class="col-md-3">
          <h1>5</h1>
        </div>
        <div class="col-md-3">
          <h1>6</h1>
        </div>
        <div class="col-md-3 last">
          <h1>-</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 bar1">
          <h1>1</h1>
        </div>
        <div class="col-md-3">
          <h1>2</h1>
        </div>
        <div class="col-md-3">
          <h1>3</h1>
        </div>
        <div class="col-md-3 last">
          <h1>+</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 bar1">
          <h1>0</h1>
        </div>
        <div class="col-md-3">
          <h1>.</h1>
        </div>
        <div class="col-md-3 last">
          <h1>=</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
