import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, setIsLoggedIn, isLoggedIn, isRegistered }) => {
    return (
        <>
            {/*header section*/}
            {isRegistered && isLoggedIn && (
                <Header setIsLoggedIn={setIsLoggedIn} />
            )}

            {/*main content section*/}
            {children}

            {/*footer section*/}
            <Footer />
        </>
    );
};

export default Layout;
