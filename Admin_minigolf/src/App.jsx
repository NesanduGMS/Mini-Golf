import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home'
import Enquiries from './Pages/Enquiries/Enquiries'
import Analytics from './Pages/Analitics/Analitics'

function App() {
  return (
    <Router>
      <div className="flex p-7">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/enquiries" element={<Enquiries/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/messages" element={<h1>Messages Page</h1>} />
            <Route path="/inventory" element={<h1>Inventory Page</h1>} />
            <Route path="/settings" element={<h1>Settings Page</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
