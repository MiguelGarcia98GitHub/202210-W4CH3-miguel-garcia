import { screen, render } from "@testing-library/react";
import { King } from "./King";

describe("Given King Component", () => {
    describe("When we render the component...", () => {
        test("Then it should display Años de reinado somewhere", () => {
            render(
                <King
                    name={"Rey Paco"}
                    family={"Los Pacos"}
                    age={40}
                    status={true}
                    imageURL={"./paco.jpg"}
                    kingdomYears={15}
                    customMessage={"Vais a morir todos"}
                />
            );

            const element = screen.getByText(/Años de reinado/i);
            expect(element).toBeInTheDocument();
        });
        test("Then it should show some alt text somewhere", () => {
            render(
                <King
                    name={"Rey Paco"}
                    family={"Los Pacos"}
                    age={40}
                    status={true}
                    imageURL={"./paco.jpg"}
                    kingdomYears={15}
                    customMessage={"Vais a morir todos"}
                />
            );

            const element = screen.getByAltText("Rey Paco");
            expect(element).toBeInTheDocument();
        });
    });
});
