import React, { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  downloadTemplate,
  OverLayTemplateHelper,
  ProfileImageTemplate,
  tableDateTemplate,
} from "../../../../Components/DataTableTemplates/Index";
import DetailsTabHeader from "./DetailsTabHeader";
import { AppDispatch, RootState } from "../../../../redux/store";
import {
  deleteLaboratoryReport,
  getLaboratoryReport,
} from "../../../Laboratory/store/laboratoryMiddleware";
import AddNewModal from "../../../../Components/AddNewModal/Index";
import AddNewReport from "../../../Laboratory/Components/AddNewReport";
import { LaboratoryType } from "../../../Laboratory/store/laboratoryType";

function ReportsTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id?: string }>();
  const { reports } = useSelector<RootState, RootState["laboratoryReducer"]>(
    (state) => state.laboratoryReducer,
  );
  const [selectedId, setSelectedId] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState<LaboratoryType>();

  const fetchData = async () => {
    const defaultIncludeQuery = {
      filter: {
        where: {
          patientId: id,
        },
        include: [
          { relation: "patient" },
          { relation: "department" },
          { relation: "labTechnician" },
          { relation: "headDoctor" },
        ],
      },
    };
    await dispatch(getLaboratoryReport(defaultIncludeQuery.filter));
  };
  useEffect(() => {
    fetchData();
  }, []);

  function testTemplate(rowData: any) {
    return <span className="timeClass">{rowData.illness}</span>;
  }

  const handleAction = (action: any) => {
    const { type, payload } = action;
    switch (type) {
      case "delete":
        setSelectedId(payload.id);
        setShowConfirmation(true);
        break;
      case "edit":
        setSelectedItem({
          ...payload,
        });
        setShowEdit(true);
        break;

      default:
        break;
    }
  };

  const handleDeleteReport = async () => {
    await dispatch(deleteLaboratoryReport(selectedId));
    setShowConfirmation(false);
    await fetchData();
  };

  return (
    <div>
      <DetailsTabHeader tabName="Reports" />
      <DataTable value={reports}>
        <Column
          header="TEST"
          field="name"
          body={(rowData: any) => testTemplate(rowData)}
        />
        <Column
          header="DOCTOR"
          body={(rowData: any) => ProfileImageTemplate(rowData.headDoctor)}
        />
        <Column
          header="DATE AND TIME"
          body={(rowData: any) => tableDateTemplate(rowData.testDateAndTime)}
        />
        <Column
          header="REPORT"
          body={(rowData: any) =>
            downloadTemplate("Download", rowData?.reportFileUrl)
          }
        />
        <Column
          body={(row: object) => OverLayTemplateHelper(row, handleAction)}
        />
      </DataTable>
      <AddNewModal
        visible={showConfirmation}
        setVisible={setShowConfirmation}
        header="Delete Appointment"
        primaryLabel="Delete"
        handleSaveClick={handleDeleteReport}
      >
        <p>Are you sure, you want to delete this Report?</p>
      </AddNewModal>
      {showEdit && (
        <AddNewReport
          visible={showEdit}
          setVisible={setShowEdit}
          isEditing
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
}

export default ReportsTable;
