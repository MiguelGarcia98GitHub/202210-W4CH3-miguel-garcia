import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Header } from "./Header";

test("renders header", () => {
    render(
        <Router>
            <Header />
        </Router>
    );

    const element = screen.getByText(/react/i); // regular expression - i significa insensitivo a mayuscula y minuscula
    expect(element).toBeInTheDocument();
});
