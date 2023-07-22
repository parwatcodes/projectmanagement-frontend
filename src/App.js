import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <div className="app">
      <header>

      </header>
      <div className='main'>
        <Sidebar />
        <div className='line-v'></div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
