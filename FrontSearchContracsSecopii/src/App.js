import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.js';
import Table from './components/Table.js';
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/jobs" element={<Table />} />

        </Routes>
      </Router>
    );
  }
export default App;