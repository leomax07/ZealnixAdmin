/* eslint-disable react-hooks/exhaustive-deps */
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ButtonComponent from "../../../../Components/Buttons/Index";
// import {
//   CategoryTemplateHelper,
//   // tableDateTemplate,
// } from "../../../../Components/DataTableTemplates/Index";
import { AppDispatch } from "../../../../redux/store";
import { getStaffsReportsById } from "../../store/staffsMiddleware";
import DownloadIcon from "../../../../assets/darkDownloadIcon.svg";
import diagnosisData from "../mock";

function StaffReportsTable() {
  const dispatch = useDispatch<AppDispatch>();
  // const { staffReports } = useSelector<RootState, RootState["staffsReducers"]>(
  //   (state) => state.staffsReducers,
  // );

  const fetchData = async () => {
    const payload = {
      include: [
        { relation: "patient" },
        { relation: "department" },
        { relation: "labTechnician" },
      ],
    };
    await dispatch(getStaffsReportsById(payload));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const downloadButtonTemplate = () => (
    <ButtonComponent label="Export" type="outlined" image={DownloadIcon} />
  );
  return (
    <div className="staff__reports__table__container">
      <DataTable value={diagnosisData}>
        <Column header="Patient Name" field="patientName" />
        <Column header="Patient ID" field="patientID" />
        <Column
          header="Diagnosis"
          field="diagnosis"
        // body={(row: any) => CategoryTemplateHelper(row.department.name)}
        />
        <Column header="Prepared By" field="preparedBy" />
        <Column
          header="Date and Time"
          field="date"
        // body={(rowData: any) => tableDateTemplate(rowData.testDateAndTime)}
        />
        <Column header="Report"

          body={downloadButtonTemplate}
        />
        <Column header="" />
      </DataTable>
    </div>
  );
}

export default StaffReportsTable;
