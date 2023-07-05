import { render, screen } from "@testing-library/react";
import Box from ".";

describe("Box component", () => {
    test("should render Box correctly", () => {
        render(<Box>random text</Box>);

        const boxElement = screen.getByText("random text");
        expect(boxElement).toBeInTheDocument();
        expect(boxElement).toHaveClass("sc-bdVaJa");
    });

    test("should render children correctly", () => {
        render(<Box>random text</Box>);

        const boxElement = screen.getByText("random text");
        expect(boxElement).toBeInTheDocument();
        expect(boxElement.textContent).toBe("random text");
    });

    test("renders with props correctly", () => {
        render(<Box data-testid="test-box" background="red" />);

        const boxElement = screen.getByTestId("test-box");
        expect(boxElement).toHaveStyle("background: red");
    });
});
