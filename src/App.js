import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppProvider from "./context/AppContext";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-100  p-4 items-center">
      React template with Tailwind, router , useContext
      <AppProvider>
        <Router>
          <nav>
            <ul className="flex flex-row items-center space-x-2 bg-blue-200 p-2 rounded-md">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/users">
              <UserPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
