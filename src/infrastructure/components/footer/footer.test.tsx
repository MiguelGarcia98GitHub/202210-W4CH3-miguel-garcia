import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Given Footer Component", () => {
    describe("When we render the component...", () => {
        test("Then it should display 'ISDI' somewhere", () => {
            render(<Footer />);

            const element = screen.getByText(/ISDI/i); // regular expression - i significa insensitivo a mayuscula y minuscula
            expect(element).toBeInTheDocument();
        });
        test("Then it should display today data somewhere", () => {
            render(<Footer />);

            const element = screen.getByText(new Date().toLocaleDateString());

            expect(element).toBeInTheDocument();
        });
    });
});
