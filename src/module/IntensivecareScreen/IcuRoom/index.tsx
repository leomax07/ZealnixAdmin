import React, { useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import GridAndListToggleHeader from '../../../Components/GridAndListToggleHeader/Index';
import { Iculabtabledata, IcuRoomData } from '../mock';
import { ProfileImageTemplate } from '../../../Components/DataTableTemplates/Index';
import ButtonComponent from '../../../Components/Buttons/Index';
import Dots from "../../../Icon/dots.svg";
import EyeIcon from "../../../assets/eye.svg";
import { EditIcon } from 'evergreen-ui';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Image } from 'primereact/image';
import './index.scss'
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

import Dout from '../../../Icon/dots.svg'
import { Avatar } from 'primereact/avatar';
import IcuRoomListItem from './CardIcuRoom';

const IcuRoom: React.FC = () => {
    const [view, setView] = useState<string>("list");
    const [onHovered, setOnHovered] = useState<number>();
    const [search, setSearch] = useState<string>("");
    const [selectedProducts, setSelectedProducts] = useState<IcuRoomData[] | null>(null);
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const [dialogHeader, setDialogHeader] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);


    const roomData = [
        {
            imageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            title: 'ICU #1',
            id: 'ID-2132',
            admission: '18 May 2022, 9:00 AM',
            patientName: 'John Johnny',
            doctorAvatars: [
                'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
                'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
                'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
            ],
        },
        {
            imageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            title: 'ICU #2',
            id: 'ID-2133',
            admission: '19 May 2022, 10:00 AM',
            patientName: 'Jane Doe',
            doctorAvatars: [
                'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
                'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
                'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
            ],
        },
        {
            imageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            title: 'ICU #3',
            id: 'ID-2134',
            admission: '20 May 2022, 11:00 AM',
            patientName: 'Bob Smith',
            doctorAvatars: [
                'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
                'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
                'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
            ],
        },
        {
            imageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            title: 'ICU #3',
            id: 'ID-2134',
            admission: '20 May 2022, 11:00 AM',
            patientName: 'Bob Smith',
            doctorAvatars: [
                'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
                'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
                'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
            ],
        },
        {
            imageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            title: 'ICU #3',
            id: 'ID-2134',
            admission: '20 May 2022, 11:00 AM',
            patientName: 'Bob Smith',
            doctorAvatars: [
                'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
                'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
                'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
            ],
        },
        {
            imageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            title: 'ICU #3',
            id: 'ID-2134',
            admission: '20 May 2022, 11:00 AM',
            patientName: 'Bob Smith',
            doctorAvatars: [
                'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
                'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
                'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
            ],
        },
        {
            imageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            title: 'ICU #3',
            id: 'ID-2134',
            admission: '20 May 2022, 11:00 AM',
            patientName: 'Bob Smith',
            doctorAvatars: [
                'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
                'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
                'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
            ],
        },
        {
            imageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            title: 'ICU #3',
            id: 'ID-2134',
            admission: '20 May 2022, 11:00 AM',
            patientName: 'Bob Smith',
            doctorAvatars: [
                'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
                'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
                'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
            ],
        },
        // Add more room data entries as needed
    ];


    const op = useRef<OverlayPanel>(null);

    const toggleAddNew = () => {
        setDialogHeader("Add Admission");
        setDialogVisible(true);
    };

    const hotlinkTemplateHelper = (string: string) => (
        <p className="blue__text">{string}</p>
    );

    const actionTemplateHelper = () => (
        <div className="action__template__controller" onClick={(e) => op.current && op.current.toggle(e)} >
            <img src={Dots} alt="dots" height={20} width={20} />
        </div>
    );

    const viewTemplateHelper = () => (
        <div className="view__template__helper">
            <ButtonComponent
                label="View"
                type="outlined"
                onClick={() => setVisible(true)}
                image={EyeIcon}
            />
        </div>
    );

    const handleHover = (index: number) => {
        setOnHovered(index);
    };

    const handleEdit = () => {
        setDialogHeader("Edit Admission");
        setDialogVisible(true);
    };

    const [selectedCity1, setSelectedCity1] = useState<any>(null);
    const [selectedCity2, setSelectedCity2] = useState<any>(null);
    const [selectedCity3, setSelectedCity3] = useState<any>(null);
    const [date, setDate] = useState<Date | null>(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div>
            <div className='heading__icuform'>ICU Rooms</div>
            <GridAndListToggleHeader
                changeTab={setView}
                handleAddNewClick={toggleAddNew}
                setSearch={setSearch}
                buttonText="New Admission"
            />
            <br />
            {view === "list" && (
                <DataTable
                    value={Iculabtabledata}
                    selectionMode="checkbox"
                    dataKey="id"
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="roomName" header="Room Name" body={(rowData: IcuRoomData) => hotlinkTemplateHelper(rowData.roomName)}></Column>
                    <Column field="roomId" header="Room ID" body={ProfileImageTemplate}></Column>
                    <Column field="patientName" header="Patient Name"></Column>
                    <Column field="supervisingNurse" header="Supervising Nurse"></Column>
                    <Column field="doctor" header="Doctor"></Column>
                    <Column field="admissionDate" header="Admission Date"></Column>
                    <Column field="profileLink" header="Profile"></Column>
                    <Column body={viewTemplateHelper} />
                    <Column body={actionTemplateHelper} />
                </DataTable>
            )}

            {view === "grid" && (
              
              <div>
              {[...Array(Math.ceil(roomData.length / 3))].map((_, rowIndex) => (
                  <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between',marginBottom:'22px'}}>
                      {roomData.slice(rowIndex * 3, rowIndex * 3 + 3).map((room, index) => (
                          <IcuRoomListItem
                              key={index}
                              imageSrc={room.imageSrc}
                              title={room.title}
                              id={room.id}
                              admission={room.admission}
                              patientName={room.patientName}
                              doctorAvatars={room.doctorAvatars}
                          />
                      ))}
                  </div>
              ))}
          </div>
          
            )}


            <OverlayPanel ref={op} className="overalay_action table__overlay__component">
                <div className="overalay_action header">ACTIONS</div>
                <div
                    className="overlay_action edit__container list__item blue__on__hover"
                    // onMouseEnter={() => handleHover(0)}
                    // onMouseLeave={() => handleHover(4)}
                    onClick={handleEdit}
                >
                    <EditIcon
                        color={onHovered === 0 ? "blue" : "black"}
                        className="overlay_action blue__on__hover"
                    />
                    Edit
                </div>
            </OverlayPanel>

            {/* Rest of the code */}
        </div>
    );
};

export default IcuRoom;
