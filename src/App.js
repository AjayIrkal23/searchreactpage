import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Announcement from './components/Anounce';
import Products from './components/Products';

function App() {
  return (
    <>
    <Announcement/>
      <Navbar/>
      <Products/>
      
    </>
  );
}

export default App;
