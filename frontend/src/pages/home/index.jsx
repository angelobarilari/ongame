import React, { useEffect, useContext, useState } from "react";
import DefaultPage from "../../components/DefaultPage";
import Header from "../../components/Header";
import Box from "../../components/Box";
import { UsersDataContext } from "../../providers/users";
import { getUserById, updateUserById } from "../../services/users/usersService";
import formatDate from "../../utils/formatDate";

import jwt_decode from "jwt-decode";
import "./style.css";
import Button from "../../components/Button";

function Home() {
    const token = localStorage.getItem("ongame-token");
    const decodedToken = jwt_decode(token);

    if (token)
        if (decodedToken.exp * 1000 < new Date())
            window.location.href = "/login";

    const { user, setUser } = useContext(UsersDataContext);
    const [editing, setEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({});

    useEffect(() => {
        getUserById(decodedToken.user_id)
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err.response.data));
    }, [setUser]);

    const handleEditProfile = () => {
        setEditing(true);
    };

    const handleInputChange = (event) => {
        setEditedUser((prevUser) => ({
            ...prevUser,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSaveChanges = () => {
        updateUserById(decodedToken.user_id, editedUser)
            .then((res) => {
                setUser(res.data);
                setEditing(false);
            })
            .catch((err) => console.log(err.response.data));
    };

    return (
        <>
            <Header />

            <DefaultPage className="home-page">
                <Box className="home-box" minWidth="30%" height="70%">
                    <div className="sign-text-box">
                        <h2>My data</h2>
                        <hr />
                    </div>
                    <Box
                        className="user-data-box"
                        minWidth="90%"
                        background="var(--grey-4)"
                        height="100%"
                    >
                        <p>
                            Username:{" "}
                            {editing ? (
                                <input
                                    type="text"
                                    name="username"
                                    value={editedUser.username}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                user.username
                            )}
                        </p>
                        <p>
                            Name:{" "}
                            {editing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={editedUser.name}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                user.name
                            )}
                        </p>
                        <p>
                            Surname:{" "}
                            {editing ? (
                                <input
                                    type="text"
                                    name="surname"
                                    value={editedUser.surname}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                user.surname
                            )}
                        </p>
                        <p>
                            Gender:{" "}
                            {editing ? (
                                <input
                                    type="text"
                                    name="gender"
                                    value={editedUser.gender}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                user.gender
                            )}
                        </p>
                        <p>
                            Birthdate:{" "}
                            {editing ? (
                                <input
                                    type="text"
                                    name="birthdate"
                                    value={editedUser.birthdate}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                formatDate(user.birthdate)
                            )}
                        </p>
                        <div className="edit-box-btns">
                            {editing ? (
                                <>
                                    <Button 
                                        children={"Save Changes"}
                                        onClick={handleSaveChanges} />
                                        
                                    <Button 
                                        children={"Cancel"}
                                        onClick={() => setEditing(false)} />
                                </>
                            ) : (
                                <Button 
                                    children={"Edit"}
                                    onClick={handleEditProfile} />
                            )}
                        </div>
                    </Box>
                </Box>
            </DefaultPage>
        </>
    );
}

export default Home;
