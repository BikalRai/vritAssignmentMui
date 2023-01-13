import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import CreateUser from './CreateUser';
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Users from './Users';

const SiteRoutes = ({
    isRegistered,
    isLoggedIn,
    setIsRegistered,
    setIsLoggedIn,
}) => {
    const navigate = useNavigate();
    console.log(isRegistered, 'isreg');
    // useEffect(() => {
    //     if (isRegistered) {
    //         navigate('/');
    //     } else {
    //         navigate('/register');
    //     }
    // });

    const [editData, setEditData] = useState({});

    return (
        <>
            {/* {isRegistered
                ? navigate('/login')
                : isLoggedIn
                ? navigate('/')
                : navigate('/register')} */}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route
                    path="/users"
                    element={<Users setEditData={setEditData} />}
                />
                <Route
                    path="/login"
                    element={
                        <LoginForm
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    }
                />
                <Route
                    path="/register"
                    element={
                        <RegisterForm
                            isRegistered={isRegistered}
                            setIsRegistered={setIsRegistered}
                        />
                    }
                />
                <Route
                    path="/create-user"
                    element={<CreateUser editData={editData} />}
                />
            </Routes>
            {/* {isRegistered ? (
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/register" element={<RegisterFrom />} />
                </Routes>
            )} */}
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
                        <Route path="/users" element={<Users />} />
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
        </>
    );
};

export default SiteRoutes;
