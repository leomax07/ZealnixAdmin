
// mock.ts
export interface IcuRoomData {
    id: string;
    roomName: string;
    roomId: string;
    patientName: string;
    supervisingNurse: string;
    doctor: string;
    admissionDate: string;
    profileLink: string;
    actions: string[];
}

export const Iculabtabledata: IcuRoomData[] = [
    {
        id: "1",
        roomName: "ICU #12",
        roomId: "LZ-08",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "27 Oct 2022 11:02 AM",
        profileLink: "View",
        actions: []
    },
    {
        id: "2",
        roomName: "ICU #12",
        roomId: "JK-5",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "26 Oct 2022 6:56 PM",
        profileLink: "View",
        actions: []
    },
    {
        id: "3",
        roomName: "ICU #12",
        roomId: "GX-034",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "27 Oct 2022 1:03 PM",
        profileLink: "View",
        actions: []
    },
    {
        id: "4",
        roomName: "ICU #12",
        roomId: "M-849",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "27 Oct 2022 8:30 AM",
        profileLink: "View",
        actions: ["ACTIONS"]
    },
    {
        id: "5",
        roomName: "ICU #12",
        roomId: "K-3651",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "27 Oct 2022 2:33 PM",
        profileLink: "View",
        actions: ["Edit"]
    },
    {
        id: "6",
        roomName: "ICU #12",
        roomId: "ILIC-7",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "27 Oct 2022 12:52 PM",
        profileLink: "View",
        actions: []
    },
    {
        id: "7",
        roomName: "ICU #12",
        roomId: "CQG-7157",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "27 Oct 2022 1:58 PM",
        profileLink: "View",
        actions: []
    },
    {
        id: "8",
        roomName: "ICU #12",
        roomId: "FZRT-0371",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "27 Oct 2022 4:18 AM",
        profileLink: "View",
        actions: []
    },
    {
        id: "9",
        roomName: "ICU #12",
        roomId: "N-5",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "27 Oct 2022 11:56 AM",
        profileLink: "View",
        actions: []
    },
    {
        id: "10",
        roomName: "ICU #12",
        roomId: "EVQU-1",
        patientName: "Juste Adjanohoun",
        supervisingNurse: "Juste Adjanohoun",
        doctor: "Juste Adjanohoun",
        admissionDate: "27 Oct 2022 6:22 AM",
        profileLink: "View",
        actions: []
    }
];
