import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import Button from "../Button";
import Box from "../Box";

function Header({ children, ...rest }) {
    const token = localStorage.getItem("ongame-token");

    const handleLogout = () => {
        localStorage.removeItem("ongame-token");
        window.location.href = "/";
    };

    return (
        <StyledHeader {...rest}>
            <Box className="header-container" shadow="unset">
                <Link to="/" className="logo-container">
                    <h1 className="logo">OnGame Forum</h1>
                </Link>
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
