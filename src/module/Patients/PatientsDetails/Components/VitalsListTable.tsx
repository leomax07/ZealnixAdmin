import React, { useEffect } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { VitalTemplate, VitalsList, tableDateTemplate } from "../../../../Components/DataTableTemplates/Index";
import DetailsTabHeader from "./DetailsTabHeader";
import { AppDispatch, RootState } from "../../../../redux/store";
import { getVitals } from "../../store/patientMiddleware";

function VitalsTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id?: string }>();
  const { vitals } = useSelector<RootState, RootState["patientsReducers"]>(
    (state) => state.patientsReducers,
  );

  const fetchData = async () => {
    const defaultIncludeQuery = {
      filter: {
        where: {
          patientId: id,
        },
      },
    };
    await dispatch(getVitals(defaultIncludeQuery.filter));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <DetailsTabHeader />
      <DataTable value={vitals}>
        <Column
          header="Appointment ID"
          field="name"
          body={(rowData: any) =>
            VitalTemplate(rowData.appointmentId.slice(0, 5))
          }
        />
        <Column
          header="Date and Time"
          body={(rowData: any) => tableDateTemplate(rowData?.createdAt)}
        />
        <Column
          header="Vitals"
          body={(rowData) =>
            VitalsList(
              rowData.height,
              rowData.weight,
              rowData.temperature,
              rowData.systolicBloodPressure,
              rowData.diastolicBloodPressure,
              rowData.bloodSugar,
            )
          }
        />
      </DataTable>
    </div>
  );
}

export default VitalsTable;
