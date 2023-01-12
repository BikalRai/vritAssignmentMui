import { CssBaseline } from '@mui/material';
import './App.css';
// import Header from './components/Header';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
// import Homepage from './components/Homepage';
// import AboutUs from './components/AboutUs';
import Layout from './components/Layout';
import SiteRoutes from './components/SiteRoutes';
import { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isRegistered && isLoggedIn) {
            navigate('/');
        } else if (isRegistered) {
            navigate('/login');
        } else {
            navigate('/register');
        }
    }, [isRegistered, isLoggedIn]);

    return (
        <div className="App">
            <CssBaseline />
            {/* <RegisterForm
                isRegistered={isRegistered}
                setIsRegistered={setIsRegistered}
            />
            <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}

            {/* <Router> */}
            <Layout
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
                isRegistered={isRegistered}
            >
                <SiteRoutes
                    isRegistered={isRegistered}
                    setIsRegistered={setIsRegistered}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                />
            </Layout>
            {/* </Router> */}
            {/* <Homepage /> */}
        </div>
    );
}

export default App;
