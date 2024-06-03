export const assets = [
  {
    name: "Laptop A",
    assetID: "A1001",
    assetCategory: "Electronics 1",
    total: 10,
    in_use: 4,
    maintenance: 1,
    assignedTo: "John Doe",
    createdAt: "2024-06-01T10:00:00Z",
    assetCategoryId: "Electronics 1",
  },
  {
    name: "Chair B",
    assetID: "B1002",
    assetCategory: "Furniture",
    assetCategoryId: "Furniture",
    total: 20,
    in_use: 10,
    maintenance: 2,
    assignedTo: "Jane Smith",
    createdAt: "2024-06-02T11:00:00Z",
  },
  {
    name: "Projector C",
    assetID: "C1003",
    assetCategory: "Electronics 2",
    assetCategoryId: "Electronics 2",
    total: 5,
    in_use: 3,
    maintenance: 0,
    assignedTo: "Alice Johnson",
    createdAt: "2024-06-03T12:00:00Z",
  },
  {
    name: "Desk D",
    assetID: "D1004",
    assetCategory: "Furniture 2",
    assetCategoryId: "Furniture 2",
    total: 15,
    in_use: 8,
    maintenance: 1,
    assignedTo: "Robert Brown",
    createdAt: "2024-06-04T13:00:00Z",
  },
  {
    name: "Printer E",
    assetID: "E1005",
    assetCategory: "Electronics 3",
    assetCategoryId: "Electronics 3",
    total: 7,
    in_use: 5,
    maintenance: 1,
    assignedTo: "Emily Davis",
    createdAt: "2024-06-05T14:00:00Z",
  },
  {
    name: "Monitor F",
    assetID: "F1006",
    assetCategory: "Electronics 4",
    assetCategoryId: "Electronics 4",
    total: 12,
    in_use: 7,
    maintenance: 1,
    assignedTo: "Michael Wilson",
    createdAt: "2024-06-06T15:00:00Z",
  },
];

export const types = [
  { name: "Electronics", code: "NY" },
  { name: "Furniture", code: "RM" },
];

export const Designation = [
  {
    id: 1,
    name: "Chief Medical Officer",
  },
  {
    id: 2,
    name: "Nursing Supervisor",
  },
];
export const assetItem = [
  {
    itemID: "ITM001",
    itemName: "Ultrasound Machine",
    assignedTo: {
      name: "Dr. John Doe",
      profilePic: "path_to_profile_pic.jpg",
    },
    inUseFrom: "2024-01-10T10:00:00Z",
  },
  {
    itemID: "ITM002",
    itemName: "X-Ray Machine",
    assignedTo: {
      name: "Nurse Jane Smith",
      profilePic: "path_to_profile_pic.jpg",
    },
    inUseFrom: "2023-12-15T09:30:00Z",
  },
  {
    itemID: "ITM003",
    itemName: "ECG Monitor",
    assignedTo: {
      name: "Dr. Alice Johnson",
      profilePic: "path_to_profile_pic.jpg",
    },
    inUseFrom: "2024-03-05T14:45:00Z",
  },
  {
    itemID: "ITM004",
    itemName: "MRI Scanner",
    assignedTo: {
      name: "Dr. Robert Brown",
      profilePic: "path_to_profile_pic.jpg",
    },
    inUseFrom: "2024-02-20T11:20:00Z",
  },
  {
    itemID: "ITM005",
    itemName: "Blood Pressure Monitor",
    assignedTo: {
      name: "Nurse Emily Davis",
      profilePic: "path_to_profile_pic.jpg",
    },
    inUseFrom: "2024-05-12T16:00:00Z",
  },
];
export const assetHistory = [
  {
    assetItem: {
      itemID: "ITM001",
      itemName: "Ultrasound Machine",
    },
    assignedTo: {
      name: "Dr. John Doe",
      profilePic: "path_to_profile_pic.jpg",
    },
    from: "2024-01-10T10:00:00Z",
    to: "2024-03-10T10:00:00Z",
    itemID: "ITM001",
  },
  {
    assetItem: {
      itemID: "ITM002",
      itemName: "X-Ray Machine",
    },
    assignedTo: {
      name: "Nurse Jane Smith",
      profilePic: "path_to_profile_pic.jpg",
    },
    from: "2023-12-15T09:30:00Z",
    to: "2024-04-15T09:30:00Z",
    itemID: "ITM002",
  },
  {
    assetItem: {
      itemID: "ITM003",
      itemName: "ECG Monitor",
    },
    assignedTo: {
      name: "Dr. Alice Johnson",
      profilePic: "path_to_profile_pic.jpg",
    },
    from: "2024-03-05T14:45:00Z",
    to: "2024-05-05T14:45:00Z",
    itemID: "ITM003",
  },
  {
    assetItem: {
      itemID: "ITM004",
      itemName: "MRI Scanner",
    },
    assignedTo: {
      name: "Dr. Robert Brown",
      profilePic: "path_to_profile_pic.jpg",
    },
    from: "2024-02-20T11:20:00Z",
    to: "2024-06-20T11:20:00Z",
    itemID: "ITM004",
  },
  {
    assetItem: {
      itemID: "ITM005",
      itemName: "Blood Pressure Monitor",
    },
    assignedTo: {
      name: "Nurse Emily Davis",
      profilePic: "path_to_profile_pic.jpg",
    },
    from: "2024-05-12T16:00:00Z",
    to: "2024-05-20T16:00:00Z",
    itemID: "ITM005",
  },
];
export const assetMaintenancedata = [
  {
    itemID: "ITM001",
    assetItem: {
      itemID: "ITM001",
      itemName: "Ultrasound Machine",
    },
    lastAssignedTo: {
      name: "Dr. John Doe",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-04-10T10:00:00Z",
    period: "2 months",
    reason: "Regular Maintenance",
    status: "Completed",
  },
  {
    itemID: "ITM002",
    assetItem: {
      itemID: "ITM002",
      itemName: "X-Ray Machine",
    },
    lastAssignedTo: {
      name: "Nurse Jane Smith",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-05-15T09:30:00Z",
    period: "1 month",
    reason: "Faulty Power Supply",
    status: "Pending",
  },
  {
    itemID: "ITM003",
    assetItem: {
      itemID: "ITM003",
      itemName: "ECG Monitor",
    },
    lastAssignedTo: {
      name: "Dr. Alice Johnson",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-06-05T14:45:00Z",
    period: "3 weeks",
    reason: "Software Update",
    status: "In Progress",
  },
  {
    itemID: "ITM004",
    assetItem: {
      itemID: "ITM004",
      itemName: "MRI Scanner",
    },
    lastAssignedTo: {
      name: "Dr. Robert Brown",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-07-20T11:20:00Z",
    period: "4 weeks",
    reason: "Calibration",
    status: "Completed",
  },
  {
    itemID: "ITM005",
    assetItem: {
      itemID: "ITM005",
      itemName: "Blood Pressure Monitor",
    },
    lastAssignedTo: {
      name: "Nurse Emily Davis",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-08-12T16:00:00Z",
    period: "2 weeks",
    reason: "Battery Replacement",
    status: "Completed",
  },
];
export const assetMaintenance = [
  {
    itemID: "A001",
    itemName: "Ultrasound Machine",

    itemDetails: "Portable, Model XYZ",
    lastAssignedTo: {
      name: "Dr. John Doe",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-04-10T10:00:00Z",
    reason: "Regular Maintenance",
    status: "Completed",
  },
  {
    itemID: "A002",
    itemName: "X-Ray Machine",

    itemDetails: "High Resolution, Model ABC",
    lastAssignedTo: {
      name: "Nurse Jane Smith",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-05-15T09:30:00Z",
    reason: "Faulty Power Supply",
    status: "Pending",
  },
  {
    itemID: "A003",
    itemName: "ECG Monitor",

    itemDetails: "12-Lead, Model 123",
    lastAssignedTo: {
      name: "Dr. Alice Johnson",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-06-05T14:45:00Z",
    reason: "Software Update",
    status: "In Progress",
  },
  {
    itemID: "A004",
    itemName: "MRI Scanner",

    itemDetails: "3 Tesla, Model 456",
    lastAssignedTo: {
      name: "Dr. Robert Brown",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-07-20T11:20:00Z",
    reason: "Calibration",
    status: "Completed",
  },
  {
    itemID: "A005",
    itemName: "Blood Pressure Monitor",

    itemDetails: "Digital, Model DEF",
    lastAssignedTo: {
      name: "Nurse Emily Davis",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-08-12T16:00:00Z",
    reason: "Battery Replacement",
    status: "Completed",
  },
  {
    itemID: "A006",
    itemName: "Defibrillator",

    itemDetails: "Portable, Model GHI",
    lastAssignedTo: {
      name: "Dr. Michael Lee",
      profilePic: "path_to_profile_pic.jpg",
    },
    endDate: "2024-09-30T08:15:00Z",
    reason: "Routine Check",
    status: "Pending",
  },
];
