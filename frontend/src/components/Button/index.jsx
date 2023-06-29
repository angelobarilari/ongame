import { StyledButton } from "./style";

function Button({ children, ...rest }) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
