import './App.css';
import TopBar from './components/TopBar';
import ScrollableContainer from './components/ScrollableContainer';
import React from 'react';
import { useEffect } from 'react';

const App = () => {
  const [data, setData] = React.useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/student');
        const result = await response.json();
        setData(result);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <TopBar/>
      <div className="separator"/>
      <ScrollableContainer
        jsonData={data}
      />
    </div>
  );
}

export default App;
