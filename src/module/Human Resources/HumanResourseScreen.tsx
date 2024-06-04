import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import Dashboard from "./Dashboard";
import "./HumanResource.scss";
import LeaverequestTab from "./LeaveRequest/LeaverequestTab";

function HumanResourceScreen() {
  return (
    <div>
      <Card>
        <TabView>
          <TabPanel header="Announcements">
            <Dashboard />
          </TabPanel>
          <TabPanel header="Leave Requests">
            {/* <Dashboard /> */}
            <LeaverequestTab/>
          </TabPanel>
          <TabPanel header="Holiday List">
            <Dashboard />
          </TabPanel>
        </TabView>
      </Card>
    </div>
  );
}

export default HumanResourceScreen;
