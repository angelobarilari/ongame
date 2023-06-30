import { StyledLine } from "./style";

function Line({ children, ...rest }) {
    return <StyledLine {...rest}>{children}</StyledLine>;
}

export default Line;
