import './App.css';
import TopBar from './components/TopBar';
import ScrollableContainer from './components/ScrollableContainer';

const jsonData = [{"id":1,"name":"Gen","email":"gen.eral@gmail.com","dob":"2000-01-05","age":23},
{"id":2,"name":"Steve","email":"Ste.ve@gmail.com","dob":"2002-02-02","age":21}]

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className="separator"/>
      <ScrollableContainer
        jsonData={jsonData}
      />
    </div>
  );
}

export default App;
