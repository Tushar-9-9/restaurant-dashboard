import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateStore from './pages/CreateStore';
import OrderManagement from './pages/OrderManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/create-store" element={<CreateStore />} />
        <Route path="/admin/orders" element={<OrderManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
