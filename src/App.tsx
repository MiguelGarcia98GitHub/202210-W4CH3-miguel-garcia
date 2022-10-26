import { King } from "./components/King";
import { Container } from "./components/Container";
import { jaimeData, joffreyData } from "./models/listOfCharacters";
import { Warrior } from "./components/Warrior";

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
                            age={joffreyData.age}
                            status={joffreyData.status}
                            customMessage={joffreyData.customMessage}
                            kingdomYears={joffreyData.kingdomYears}
                            imageURL={joffreyData.imageURL.toString()}
                        />
                        <Warrior
                            name={jaimeData.name}
                            family={jaimeData.family}
                            age={jaimeData.age}
                            status={jaimeData.status}
                            imageURL={jaimeData.imageURL}
                            weapon={jaimeData.weapon}
                            dexterity={jaimeData.dexterity}
                            customMessage={jaimeData.customMessage}
                        />
                    </>
                }
            />
        </div>
    );
}

export default App;
