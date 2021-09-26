import './App.css';
import Header from './components/Header/Header';
import Students from './components/Students/Students';

function App() {
  return (
    <div className="App">
      {/* header component */}
      <Header></Header>
      {/* students component */}
      <Students></Students>
    </div>
  );
}

export default App;
