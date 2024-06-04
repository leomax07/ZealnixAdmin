import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";
import { ROWS_PER_PAGE, ROWS_PER_PAGE_OPTIONS } from "../../../constants";
import {
  OverLayTemplateHelper,
  ProfileImageTemplate,
  StatusTemplate,
  paginatorTemplate,
} from "../../../Components/DataTableTemplates/Index";

const LeaverequestTab = () => {
  const handleSelect = async (e: any) => {};
  const handleAction = async (e: any) => {};
  return (
    <div>
      <DataTable
        value={[]}
        onRowClick={(e: any) => handleSelect(e)}
        paginator
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
        rows={ROWS_PER_PAGE}
        paginatorTemplate={paginatorTemplate}
      >
        <Column selectionMode="multiple" />
        <Column header="EMLOYEE" body={ProfileImageTemplate} />
        <Column header="EMPLOYEE ID" field="phone" />
        <Column header="DEPARTMENT" field="phone" />
        <Column header="REASON" field="phone" />
        <Column header="FROM" field="phone" />
        <Column header="TO" field="phone" />
        <Column header="DAYS" field="phone" />
        <Column header="REQUESTED ON" field="phone" />
        <Column header="STATUS" body={StatusTemplate} />
        <Column
          header=""
          body={(row: object) => OverLayTemplateHelper(row, handleAction)}
        />
      </DataTable>
    </div>
  );
};

export default LeaverequestTab;
