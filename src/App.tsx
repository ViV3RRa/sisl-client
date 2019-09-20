import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState("Hest");

  function buttonClick() {
    fetch('http://localhost:8080/accountvalue/search?to=1553310001000')
        .then(res => res.json())
        .then((result) => {
          const items = result.map((item: any, key: any) => <div key={item.id}>{item.accountValue}</div>);
          console.log(JSON.stringify(result));
          setData(items);
        })
        .catch(console.log);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {data}
        </div>
        <Button onClick={buttonClick} />
      </header>
    </div>
  );
}

export default App;
