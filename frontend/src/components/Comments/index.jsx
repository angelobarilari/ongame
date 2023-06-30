import SubHeader from "../SubHeader";
import { StyledComment } from "./style";
import formatDate from "../../utils/formatDate";

function Comment({ children, rest }) {
    return (
        <StyledComment {...rest}>
            <SubHeader className="" text={children.author.username}>
                <p>{formatDate(children.created_at)}</p>
            </SubHeader>
            <p>{children.content}</p>
        </StyledComment>
    );
}

export default Comment;
