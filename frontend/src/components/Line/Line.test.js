import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Line from "../Line";

describe("Line component", () => {
    test("should render Line correctly", () => {
        render(<Line />);

        const lineElement = screen.getByRole("separator");
        expect(lineElement).toBeInTheDocument();
    });

    test("renders with props correctly", () => {
        render(<Line data-testid="test-line" width="90%" />);

        const lineElement = screen.getByTestId("test-line");
        expect(lineElement).toHaveStyle("width: 90%");
    });
});
