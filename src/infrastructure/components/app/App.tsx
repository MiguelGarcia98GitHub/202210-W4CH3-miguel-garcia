import { AppRoutes } from "../../../routes/app.routes";
import { Layout } from "../layout/Layout";
import { Menu } from "../menu/Menu";

function App() {
    return (
        <div className="app">
            {" "}
            <h1>
                <Layout>
                    <AppRoutes></AppRoutes>
                </Layout>
            </h1>{" "}
        </div>
    );
}

export default App;
