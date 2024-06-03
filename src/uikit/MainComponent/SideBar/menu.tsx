import {
  DashboardIcon,
  NewPersonIcon,
  MugshotIcon,
  PeopleIcon,
  AddLocationIcon,
  LayoutHierarchyIcon,
  StepChartIcon,
  SettingsIcon,
  // ApplicationsIcon,
  WarningSignIcon,
  TimelineLineChartIcon,
} from "evergreen-ui";
// import { SubMenu } from "react-pro-sidebar";

const sideMenu = [
  {
    label: "Dashboard",
    Icon: {
      inActive: <DashboardIcon size={20} />,
      active: <DashboardIcon size={20} color="#1890FF" />,
    },
    to: "/",
  },
  {
    label: "Appointments",
    Icon: {
      inActive: <NewPersonIcon size={20} />,
      active: <NewPersonIcon size={20} color="#1890FF" />,
    },
    to: "/appointments/appointments_calendar",
  },
  {
    label: "Patients",
    Icon: {
      inActive: <MugshotIcon size={20} />,
      active: <MugshotIcon size={20} color="#1890FF" />,
    },
    to: "/patients/all",
  },
  {
    label: "Staffs",
    Icon: {
      inActive: <PeopleIcon size={20} />,
      active: <PeopleIcon size={20} color="#1890FF" />,
    },
    to: "/staffs/doctor",
  },
  {
    label: "Laboratory",
    Icon: {
      inActive: <LayoutHierarchyIcon size={20} />,
      active: <LayoutHierarchyIcon size={20} color="#1890FF" />,
    },
    to: "/laboratory/x-ray",
  },
   {
		label: "Operation Theatre",
    Icon: {
      inActive:<WarningSignIcon size={20} />,
      active: <WarningSignIcon size={20} color="#1890FF" />,
    },
		to: "/operation-theatre",
	}, 
  {
    label: "Intensive care",
    Icon: {
      inActive: <TimelineLineChartIcon size={20} />,
      active: <TimelineLineChartIcon size={20} color="#1890FF" />,
    },
    to: "/intensive-care",
  },
  {
    label: "Human Resources",
    Icon: {
      inActive: <PeopleIcon size={20} />,
      active: <PeopleIcon size={20} color="#1890FF" />,
    },
    to: "/human-resource",
  },
  {
    label: "Assets",
    Icon: {
      inActive: <StepChartIcon size={20} />,
      active: <StepChartIcon size={20} color="#1890FF" />,
    },
    to: "/assets",
  },
  /* {
		label: "Accounts",
		Icon: <UserIcon size={20} />,
		to: "/accounts",
	}, */

  {
    label: "Pharmacy",
    Icon: {
      inActive: <AddLocationIcon size={20} />,
      active: <AddLocationIcon size={20} color="#1890FF" />,
    },
    to: "/pharmacy/inventory",
  },

  // {
  //   label: "Zealeye CDS",
  //   Icon: {
  //     inActive: <AddLocationIcon size={20} />,
  //     active: <AddLocationIcon size={20} color="#1890FF" />,
  //   },
  //   to: "/Zealeye_CDS",
  // },
  // {
  //   label: "Scratch Pad",
  //   Icon: {
  //     inActive: <ApplicationsIcon size={20} />,
  //     active: <ApplicationsIcon size={20} color="#1890FF" />,
  //   },
  //   to: "/scratchpad",
  // },
  {
    label: "Settings",
    Icon: {
      inActive: <SettingsIcon size={20} />,
      active: <SettingsIcon size={20} color="#1890FF" />,
    },
    to: "/settings",
    subMenu:[]
    // subMenu: [
    //   {
    //     label: "General",
    //     to: "/settings",
    //   },
    //   {
    //     label: "Branches",
    //     to: "/settings/branches",
    //   },
    //   {
    //     label: "Masters",
    //     to: "/settings/masters/designations",
    //   },
    // ],
  },
];

export default sideMenu;
