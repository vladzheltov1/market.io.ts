import "jquery";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { useRoutes } from "./components/helpers/routes";
import "./css/index.scss";
import "./css/market.io.scss";
import "./css/style.scss";

function App() {

  const routes = useRoutes(false);

  return (
    <Router>
      <Header />
      {routes}
    </Router>
  );
}

export default App;
