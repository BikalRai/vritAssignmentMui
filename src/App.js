import { CssBaseline } from '@mui/material';
import './App.css';
// import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
// import Homepage from './components/Homepage';
// import AboutUs from './components/AboutUs';
import Layout from './components/Layout';
import SiteRoutes from './components/SiteRoutes';
import RegisterFrom from './components/RegisterFrom';
import { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="App">
            <CssBaseline />
            {/* <RegisterFrom
                isRegistered={isRegistered}
                setIsRegistered={setIsRegistered}
            />
            <LoginForm setIsLoggedIn={setIsLoggedIn} /> */}
            <Router>
                <Layout>
                    <SiteRoutes
                        setIsRegistered={setIsRegistered}
                        isRegistered={isRegistered}
                        isLoggedIn={isLoggedIn}
                    />
                </Layout>
            </Router>
        </div>
    );
}

export default App;
