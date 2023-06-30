import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SubHeader from ".";

describe("SubHeader component", () => {
    test("should render SubHeader correctly", () => {
        render(<SubHeader text="Test SubHeader" />);

        const subHeaderElement = screen.getByText("Test SubHeader");
        expect(subHeaderElement).toBeInTheDocument();
    });

    test("should render children correctly", () => {
        render(
            <SubHeader text="Test SubHeader">
                <div>Child Component</div>
            </SubHeader>
        );

        const childElement = screen.getByText("Child Component");
        expect(childElement).toBeInTheDocument();
    });

    test("renders with props correctly", () => {
        render(
            <SubHeader
                text="Test SubHeader"
                data-testid="test-subheader"
                width="90%"
            >
                <div>Child Component</div>
            </SubHeader>
        );

        const subHeaderElement = screen.getByTestId("test-subheader");
        expect(subHeaderElement).toHaveStyle("width: 90%");
    });
});
