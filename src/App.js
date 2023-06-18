import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Home />
      
    </div>
  );
}

export default App;
