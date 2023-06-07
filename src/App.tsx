import { Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes></Routes>
      </Layout>
    </div>
  );
}

export default App;