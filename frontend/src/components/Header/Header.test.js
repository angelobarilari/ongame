import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("Header component", () => {
    test("should render Header correctly", () => {
        render(
            <MemoryRouter>
                <Header data-testid="test-header" />
            </MemoryRouter>
        );

        const header = screen.getByTestId("test-header");
        expect(header).toBeInTheDocument();
    });

    test("should render a logo", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const logo = screen.getByText("OnGame Forum");
        expect(logo).toBeInTheDocument();
    });

    test("should render a link to /", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const homeLink = screen.getByRole("link", { name: "OnGame Forum" });
        expect(homeLink).toHaveAttribute("href", "/");
    });
});
