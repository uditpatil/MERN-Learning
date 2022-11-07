import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Jane"} LastName={"Doe"} age={45} hairColor={"Black"} />
      <PersonCard firstName={"John"} LastName={"Smith"} age={88} hairColor={"Brown"} />
      <PersonCard firstName={"Millard"} LastName={"Fillmore"} age={50} hairColor={"Brown"} />
      <PersonCard firstName={"Maria"} LastName={"Smith"} age={62} hairColor={"Brown"} />
    </div>
  );
}

export default App;
