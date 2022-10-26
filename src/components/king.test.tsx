import { screen, render } from "@testing-library/react";
import { joffreyData } from "../models/listOfCharacters";
import { King } from "./King";

export {};

describe("Given King Component", () => {
    describe("When we render the component...", () => {
        test("Then it should display Años de reinado somewhere", () => {
            render(
                <King
                    name={"Rey Paco"}
                    family={"Los Pacos"}
                    age={"40"}
                    kingdomYears={"10"}
                    imageURL={"paco.png"}
                    status={"alive"}
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
                    age={"40"}
                    kingdomYears={"10"}
                    imageURL={"paco.png"}
                    status={"alive"}
                />
            );

            const element = screen.getByAltText("Rey Paco");
            expect(element).toBeInTheDocument();
        });
    });
});
