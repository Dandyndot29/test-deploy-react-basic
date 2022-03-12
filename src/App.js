import CatList from './components/CatList.js';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";


function App() {
  return (
    <div className="App">
       <h1 style={{backgroundColor: "lightblue", textAlign: "center",}}>DAFTAR MEONG</h1>
      <CatList />
    </div>

    
  );
}

export default App;