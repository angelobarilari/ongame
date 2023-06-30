import styled from "styled-components";

export const StyledSubHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${(props) => props.width || "100%"};

    .subheader-span {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;
