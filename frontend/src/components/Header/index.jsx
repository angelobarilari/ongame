import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import Button from "../Button";

function Header({ children, ...rest }) {
    const token = localStorage.getItem("ongame-token");

    const handleLogout = () => {
        localStorage.removeItem("ongame-token");
        window.location.href = "/";
    };

    return (
        <StyledHeader {...rest}>
            <div id="header-container">
                <Link to="/" id="logo-container">
                    <h1 id="logo">OnGame Forum</h1>
                </Link>
            </div>

            {token ? (
                <Button
                    className="logout-btn"
                    margin="unset"
                    background="var(--purple-1)"
                    color="var(--white)"
                    hover="var(--purple-2)"
                    children={"Logout"}
                    onClick={() => handleLogout()}
                />
            ) : (
                <Button
                    className="login-btn"
                    margin="unset"
                    background="var(--purple-1)"
                    color="var(--white)"
                    hover="var(--purple-2)"
                    children={"Login"}
                    onClick={() => (window.location.href = "/login")}
                />
            )}
        </StyledHeader>
    );
}

export default Header;
