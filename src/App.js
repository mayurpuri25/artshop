import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";

import Auth from "./pages/Auth/Auth";
import Admin from "./pages/Admin/Admin";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      {user ? <Admin /> : <Auth />}
    </>
  );
}

export default App;
