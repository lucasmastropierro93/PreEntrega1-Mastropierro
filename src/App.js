
import './App.css'
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';



function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <Navbar/>
      </header>
      <main className='App-main'>
      <ItemListContainer greeting={"Bienvenido a mi primer entrega"}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
