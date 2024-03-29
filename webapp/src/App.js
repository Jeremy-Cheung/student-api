import './App.css';
import TopBar from './components/TopBar';
import Tabs from './components/Tabs';
import ScrollableContainer from './components/ScrollableContainer';
import React from 'react';
import { useEffect } from 'react';

const App = () => {
  const [data, setData] = React.useState([])
  const [tab, setTab] = React.useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1/student');
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
      <TopBar tab={setTab}/>
      <Tabs state={tab}/>
      <div className="separator"/>
      <ScrollableContainer
        jsonData={data}
      />
    </div>
  );
}

export default App;
