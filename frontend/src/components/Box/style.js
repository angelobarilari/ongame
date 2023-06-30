import styled from "styled-components";

export const StyledBox = styled.div`
    display: flex;

    min-width: ${(props) => props.minWidth || "unset"};
    max-width: ${(props) => props.maxWidth || "unset"};

    height: ${(props) => props.height || "unset"};
    margin: ${(props) => props.margin || "10px"};

    padding: 5px 10px;
    border-radius: 5px;

    background-color: ${(props) => props.background || "unset"};
    box-shadow: ${(props) => props.shadow || "0px 0px 5px 1px var(--black)"};
`;
