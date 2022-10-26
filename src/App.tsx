import { King } from "./components/King";
import { Container } from "./components/Container";
import { joffreyData } from "./models/listOfCharacters";

function App() {
    return (
        <div className="app">
            {" "}
            <Container
                children={
                    <>
                        <King
                            name={joffreyData.name}
                            family={joffreyData.family}
                            age={joffreyData.age.toString()}
                            kingdomYears={joffreyData.kingdomYears.toString()}
                            imageURL={joffreyData.imageURL.toString()}
                            status={joffreyData.status ? "alive" : "dead"}
                        />
                    </>
                }
            />
        </div>
    );
}

export default App;
