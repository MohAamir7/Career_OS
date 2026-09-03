import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/Dashboard/DashBoard";
import DashBoardLayout from "./Layouts/DashBoardLayout";
import Application from "./pages/Applications/Application";
import ApplicationDetails from "./pages/Applications/ApplicationDetails";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/dashboardLayout" />} /> */}
          <Route element={<DashBoardLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="applications" element={<Application />} />
            <Route
              path="applications/:applicationId"
              element={<ApplicationDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
