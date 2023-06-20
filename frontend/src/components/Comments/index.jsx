import Box from "../Box";
import formatDate from "../../utils/formatDate";
import "./style.css";

function Comment({ comment }) {
    return (
        <>
            <Box className="comment">
                <div className="sign-text-box topics-text-box">
                    <span>
                        <p>{comment.author.username}</p>
                        <p>{formatDate(comment.created_at)}</p>
                    </span>
                    <hr />
                    {comment.content}
                </div>
            </Box>
        </>
    );
}

export default Comment;
