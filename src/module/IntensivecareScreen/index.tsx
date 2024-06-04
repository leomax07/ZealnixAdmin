import { Card } from "primereact/card";
import { TabPanel, TabView } from "primereact/tabview";
import IcuRoom from "./IcuRoom";

function IntensivecareScreen() {

  return (
    <div>
      <div>
        <Card >

          {/* <TabView>
            <TabPanel header="Dashboard"> */}
              <IcuRoom />
            {/* </TabPanel> */}
            {/* <TabPanel header="ICU Room">
              <IcuRoom />
            </TabPanel> */}
{/* 
          </TabView> */}

        </Card>
      </div>
    </div>
  )
}

export default IntensivecareScreen;