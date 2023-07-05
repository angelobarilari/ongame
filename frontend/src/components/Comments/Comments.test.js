import { render, screen } from "@testing-library/react";
import Comment from ".";
import formatDate from "../../utils/formatDate";

describe("Comment component", () => {
    const mockComment = {
        author: {
            username: "username",
        },
        created_at: "2022-06-01T14:30:00Z",
        content: "This is a comment",
    };

    test("should render authors username correctly", () => {
        render(<Comment>{mockComment}</Comment>);

        const authorElement = screen.getByText("username");
        expect(authorElement).toBeInTheDocument();
    });

    test("should render created_at date correctly", () => {
        formatDate(mockComment.created_at);
        render(<Comment>{mockComment}</Comment>);

        const dateElement = screen.getByText("1/6/2022 11:30");
        expect(dateElement).toBeInTheDocument();
    });

    test("should render comment content correctly", () => {
        render(<Comment>{mockComment}</Comment>);

        const contentElement = screen.getByText("This is a comment");
        expect(contentElement).toBeInTheDocument();
    });
});
