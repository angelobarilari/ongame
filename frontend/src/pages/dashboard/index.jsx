import React, { useEffect, useContext, useState } from "react";

import DefaultPage from "../../components/DefaultPage";
import SubHeader from "../../components/SubHeader";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Box from "../../components/Box";

import { getUserById, updateUserById } from "../../services/users/usersService";
import { verifyJwtIsValid } from "../../services/auth/authService"

import { UsersDataContext } from "../../providers/users";

import formatDate from "../../utils/formatDate";

import "./style.css";

function Dashboard() {
    const token = verifyJwtIsValid()

    const { user, setUser } = useContext(UsersDataContext);
    const [editing, setEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({});

    useEffect(() => {
        getUserById(token.user_id)
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
        updateUserById(token.user_id, editedUser)
            .then((res) => {
                setUser(res.data);
                setEditing(false);
            })
            .catch((err) => console.log(err.response.data));
    };

    return (
        <>
            {token ? (
                <>
                    <Header />

                    <DefaultPage className="dashboard-page">

                        <Box className="dashboard-box" minWidth="30%" height="70%">
                            <SubHeader width="90%" text={"My data"} />
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
                                <Box className="edit-box-btns" shadow="unset">
                                    {editing ? (
                                        <>
                                            <Button
                                                className="edit-btn"
                                                minWidth="60%"
                                                background="var(--orange-1)"
                                                color="var(--white)"
                                                hover="var(--orange-2)"
                                                children={"Save Changes"}
                                                onClick={handleSaveChanges}
                                            />

                                            <Button
                                                className="edit-btn"
                                                minWidth="20%"
                                                background="var(--orange-1)"
                                                color="var(--white)"
                                                hover="var(--orange-2)"
                                                children={"Cancel"}
                                                onClick={() => setEditing(false)}
                                            />
                                        </>
                                    ) : (
                                        <Button
                                            className="edit-btn"
                                            minWidth="100%"
                                            background="var(--orange-1)"
                                            color="var(--white)"
                                            hover="var(--orange-2)"
                                            children={"Edit"}
                                            onClick={handleEditProfile}
                                        />
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </DefaultPage>
                </>
            ) : (
                window.location.href = "/"
            )}
        </>
    );
}

export default Dashboard;
