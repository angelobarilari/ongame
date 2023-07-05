import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
    test("should render Button correctly", () => {
        render(<Button>random text</Button>);

        const buttonElement = screen.getByText("random text");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.textContent).toBe("random text");
    });

    test("should render children correctly", () => {
        render(<Button>Click me</Button>);

        const buttonElement = screen.getByText("Click me");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.textContent).toBe("Click me");
    });

    test("renders with props correctly", () => {
        render(<Button data-testid="test-button" background="red" />);

        const buttonElement = screen.getByTestId("test-button");
        expect(buttonElement).toHaveStyle("background: red");
    });
});
