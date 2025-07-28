import logo from './ft_logo.png';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';
import Objectif from './pages/Objectives';
import Home from './pages/Home';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="FitTrack Logo" className="logo" />
        </Link>
        <h1>FitTrack - Follow your weightloss</h1>
      </div>

      <nav className="nav">
         <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/objectif">Objectives</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="small-size-text">Version 1.0.0</p>
      <p className="small-size-text">© 2025 FitTrack. All rights reserved.</p>
      <p className="small-size-text">Developed by Assokeng Karelle</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/objectif" element={<Objectif />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
