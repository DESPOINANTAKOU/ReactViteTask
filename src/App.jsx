import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/index";
import ChartPage from "./components/ChartPage/index";
import MapPage from "./components/MapPage/index";
import UserCommentsPage from "./components/UserCommentsPage/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<LoginPage />} />
      <Route path="/ChartPage" element={<ChartPage />} />
      <Route path="/MapPage" element={<MapPage />} />
      <Route path="/UserCommentsPage" element={<UserCommentsPage />} />
    </Routes>
  );
};
export default App;
