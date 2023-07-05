import { render, screen } from "@testing-library/react";
import DefaultPage from ".";

describe("DefaultPage component", () => {
    test("should render DefaultPage correctly", () => {
        render(<DefaultPage data-testid="test-default-page" />);

        const defaultPageElement = screen.getByTestId("test-default-page");
        expect(defaultPageElement).toBeInTheDocument();
    });

    test("should render children correctly", () => {
        render(
            <DefaultPage data-testid="test-default-page">
                <div data-testid="child">Test children</div>
            </DefaultPage>
        );

        const childElement = screen.getByTestId("child");
        expect(childElement).toBeInTheDocument();
        expect(childElement.textContent).toBe("Test children");
    });

    test("renders with props correctly", () => {
        render(
            <DefaultPage data-testid="test-default-page" className="test-class">
                Test children
            </DefaultPage>
        );

        const defaultPageElement = screen.getByTestId("test-default-page");
        expect(defaultPageElement).toHaveClass("test-class");
    });
});
