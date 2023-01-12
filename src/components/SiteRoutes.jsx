import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import RegisterFrom from './RegisterFrom';
import Users from './Users';

const SiteRoutes = ({
    isRegistered,
    isLoggedIn,
    setIsRegistered,
    setIsLoggedIn,
}) => {
    console.log(isRegistered, 'isreg');
    return (
        <>
            {/* <Routes>
                {isRegistered ? (
                    isLoggedIn ? (
                        <>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/about-us" element={<AboutUs />} />
                        </>
                    ) : (
                        <Route
                            path="/login"
                            element={
                                <LoginForm
                                    isLoggedIn={isLoggedIn}
                                    setIsLoggedIn={setIsLoggedIn}
                                />
                            }
                        />
                    )
                ) : (
                    <Route
                        path="/register"
                        element={
                            <RegisterFrom
                                isRegistered={isRegistered}
                                setIsRegistered={setIsRegistered}
                            />
                        }
                    />
                )}
            </Routes> */}
            {/* <Routes>
                <Route path="login" element={<LoginForm />} />
            </Routes> */}
            {/* {isRegistered ? (
                isLoggedIn ? (
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about-us" element={<AboutUs />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route
                            path="/login"
                            element={
                                <LoginForm
                                    isLoggedIn={isLoggedIn}
                                    setIsLoggedIn={setIsLoggedIn}
                                />
                            }
                        />
                    </Routes>
                )
            ) : (
                <Routes>
                    <Route
                        path="/register"
                        element={
                            <RegisterFrom
                                isRegistered={isRegistered}
                                setIsRegistered={setIsRegistered}
                            />
                        }
                    />
                </Routes>
            )} */}
            {/* <Routes>
                {isRegistered ? (
                    <Route
                        path="/login"
                        element={
                            <LoginForm
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                            />
                        }
                    />
                ) : isLoggedIn ? (
                    <>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about-us" element={<AboutUs />} />
                    </>
                ) : (
                    <Route
                        path="/register"
                        element={
                            <RegisterFrom
                                isRegistered={isRegistered}
                                setIsRegistered={setIsRegistered}
                            />
                        }
                    />
                )}
            </Routes> */}
            {/* {isRegistered ? (
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <LoginForm
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                            />
                        }
                    />
                </Routes>
            ) : isLoggedIn ? (
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            ) : (
                <Routes>
                    <Route
                        path="/register"
                        element={
                            <RegisterFrom
                                isRegistered={isRegistered}
                                setIsRegistered={setIsRegistered}
                            />
                        }
                    />
                </Routes>
            )} */}
            {/* <Routes>
                {!isRegistered && (
                    <Route
                        path="/register"
                        element={
                            <RegisterFrom
                                isRegistered={isRegistered}
                                setIsRegistered={setIsRegistered}
                            />
                        }
                    />
                )}
                {isRegistered && (
                    <Route
                        path="/login"
                        element={
                            <LoginForm
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                            />
                        }
                    />
                )}

                {isRegistered && isLoggedIn && (
                    <>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about-us" element={<AboutUs />} />
                    </>
                )}
            </Routes> */}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </>
    );
};

export default SiteRoutes;
