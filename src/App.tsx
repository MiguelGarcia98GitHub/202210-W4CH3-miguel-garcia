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
                            name={joffreyData[0]}
                            family={joffreyData[1]}
                            age={joffreyData[2]}
                            kingdomYears={joffreyData[3]}
                            imageURL={joffreyData[4]}
                            status={joffreyData[5]}
                        />
                    </>
                }
            />
        </div>
    );
}

export default App;
