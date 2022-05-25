import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';
import NewComponent1 from './NewComponent1';
import NewComponent2 from './NewComponent2';
import NewComponent3 from './NewComponent3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is header section.
        </p>
      </header>
      <section>
        <p> Let's begin React.JS practice.</p>
      </section>
      <NewComponent company="Suzuki"/>
      <NewComponent1/>
      <NewComponent2/>
      <NewComponent3/>
      
    </div>
  );
}

export default App;
