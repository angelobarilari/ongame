import styled from "styled-components";

export const StyledComment = styled.div`
    display: flex;
    flex-direction: column;

    padding: 5px 10px;
    border-radius: 5px;

    margin: 10px;
    box-shadow: ${(props) => props.shadow || "0px 0px 5px 1px var(--black)"};
`;
