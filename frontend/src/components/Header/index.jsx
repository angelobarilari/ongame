import { StyledHeader } from "./style";

import { verifyJwtIsValid } from "../../services/auth/authService"

import Button from "../Button";
import Box from "../Box";

function Header({ children, ...rest }) {
    const token = verifyJwtIsValid()

    const handleLogout = () => {
        localStorage.removeItem("ongame-token");
        window.location.href = "/";
    };

    return (
        <StyledHeader {...rest}>
            <Box className="header-container" shadow="unset">
                <a href="/" className="logo-container">
                    <h1 className="logo">OnGame Forum</h1>
                </a>
            </Box>

            {token ? (
                <Button
                    className="logout-btn"
                    margin="unset"
                    background="var(--orange-1)"
                    color="var(--white)"
                    hover="var(--orange-2)"
                    children={"Logout"}
                    onClick={() => handleLogout()}
                />
            ) : (
                <Button
                    className="login-btn"
                    margin="unset"
                    background="var(--orange-1)"
                    color="var(--white)"
                    hover="var(--orange-2)"
                    children={"Login"}
                    onClick={() => (window.location.href = "/login")}
                />
            )}
        </StyledHeader>
    );
}

export default Header;
