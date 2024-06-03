// import React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import { VitalTemplate, VitalsList, tableDateTemplate } from "../../../../Components/DataTableTemplates/Index";
import DetailsTabHeader from "./DetailsTabHeader";
import {  RootState } from "../../../../redux/store";
// import { getVitals } from "../../store/patientMiddleware";
import { vitals } from "../../patients.mock";
function VitalsTable() {
  // const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id?: string }>();
  // const { vitals } = useSelector<RootState, RootState["patientsReducers"]>(
  //   (state) => state.patientsReducers,
  // );

  // const fetchData = async () => {
  //   const defaultIncludeQuery = {
  //     filter: {
  //       where: {
  //         patientId: id,
  //       },
  //     },
  //   };
  //   await dispatch(getVitals(defaultIncludeQuery.filter));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <DetailsTabHeader />
      <DataTable value={vitals}>
        <Column
          header="Appointment ID"
          field="appointmentID"
          // body={(rowData: any) =>
          //   VitalTemplate(rowData.appointmentId.slice(0, 5))
          // }
        />
        <Column
          header="Date and Time"
          body={(rowData: any) => tableDateTemplate(rowData?.dateAndTime)}
        />
        <Column
          header="vitals"
          body={(rowData) =>
            VitalsList(
              rowData.vitals.height,
              rowData.vitals.weight,
              rowData.vitals.temperature,
              rowData.vitals.bloodPressureSystolic,
              rowData.vitals.bloodPressureDiastolic,
              rowData.vitals.bloodSugar,
            )
          }
        />
      </DataTable>
    </div>
  );
}

export default VitalsTable;
