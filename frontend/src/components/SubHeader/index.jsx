import { StyledSubHeader } from "./style";

import Line from "../Line";

function SubHeader({ children, text, ...rest }) {
    return (
        <StyledSubHeader {...rest}>
            <span className="subheader-span">
                <h2>{text}</h2>
                {children}
            </span>
            <Line />
        </StyledSubHeader>
    );
}

export default SubHeader;
