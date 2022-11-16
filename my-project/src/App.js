import './App.css';
import { Route, Routes } from 'react-router-dom'
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<HomePage />}/>
        <Route path={'/detail/:name'} element={<DetailPage />}/>
      </Routes>
    </div>
  );
}

export default App;
