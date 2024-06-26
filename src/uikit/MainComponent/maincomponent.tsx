import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../../module/Dashboard/DashboardScreen";
import AccountsScreen from "../../module/Accounts/AccountsScreen";
import HumanResourceScreen from "../../module/Human Resources/HumanResourseScreen";
import OperationTheatreScreen from "../../module/Operation Theatre/OperationTheatreScreen";
import "./maincomponent.css";
import ProtectedLayout from "./ProtectedLayout";
import IntensiveCareScreen from "../../module/IntensivecareScreen";

function MainComponent() {
  return (
    <div>
      <div className="main__component__container">
        <div className="">
          <Routes>
            <Route element={<ProtectedLayout />}>
              <Route path="/" element={<DashboardScreen />} />
              <Route path="/accounts" element={<AccountsScreen />} />
              <Route path="/human-resource" element={<HumanResourceScreen />} />
              <Route
                path="/operation-theatre"
                element={<OperationTheatreScreen />}
              />
              {/* <Route path="/human-resource" element={<HumanResourceScreen />} /> */}
              <Route path="/intensive-care" element={<IntensiveCareScreen />} />
              <Route
                path="/operation-theatre"
                element={<OperationTheatreScreen />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
