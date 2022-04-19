import './App.css';
import Sidebar from './components/Sidebar';
import BookList from './components/BookList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>  
    <div className="App">
      <Routes>
        <Route path = "/" element = {<BookList />} />
        <Route path = "/book" element = {<Sidebar />} />
      </Routes>
    </div>
    </Router>
  );
}



export default App;
