import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//routes import
import HomePage from './routes/homepage';
import All from './routes/all';
import Query from './routes/query';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="all" element={<All />} />
          <Route exact path="/book/:id" element={<Query />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
