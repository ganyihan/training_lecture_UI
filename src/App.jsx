import './App.css';
import Header from './components/Header';
import Tradition from './components/Tradition';
import Nlp from './components/Nlp';
import Table from './components/Table';



function App() {
  return (
    <div className="App">
        <Header></Header>
        <Tradition></Tradition>
        <Nlp></Nlp>
        <hr className="line"/>
        <Table></Table>
        <div id="container" className="chart"></div>
    </div>   
  );
}

export default App;
