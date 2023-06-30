import styled from "styled-components";

export const StyledLine = styled.hr`
    border: 1px solid #fff;
    width: ${(props) => props.width || "100%"};
    margin: 2px 0px;
`;
