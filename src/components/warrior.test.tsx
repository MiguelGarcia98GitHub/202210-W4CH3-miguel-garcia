import { screen, render } from "@testing-library/react";
import { Warrior } from "./Warrior";

describe("Given King Component", () => {
    describe("When we render the component...", () => {
        test("Then it should display Arma somewhere", () => {
            render(
                <Warrior
                    name={"Pepe el Guerrero"}
                    family={"Los Pepes"}
                    age={40}
                    status={true}
                    imageURL={"./paco.jpg"}
                    customMessage={"Primero golpeo y luego pregunto"}
                    weapon={"sword"}
                    dexterity={7}
                />
            );

            const element = screen.getByText(/Arma/i);
            expect(element).toBeInTheDocument();
        });
        test("Then it should show some alt text somewhere", () => {
            render(
                <Warrior
                    name={"Pepe el Guerrero"}
                    family={"Los Pepes"}
                    age={40}
                    status={true}
                    imageURL={"./paco.jpg"}
                    customMessage={"Primero golpeo y luego pregunto"}
                    weapon={"sword"}
                    dexterity={7}
                />
            );

            const element = screen.getByAltText("Pepe el Guerrero");
            expect(element).toBeInTheDocument();
        });
    });
});
