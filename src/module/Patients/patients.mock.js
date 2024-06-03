export const allPatients = [
  {
    name: "John Doe",
    phone: "1234567890",
    lastvisit: "2024-05-01",
    status: "Recovered",
  },
  {
    name: "Jane Smith",
    phone: "0987654321",
    lastvisit: "2024-05-10",
    status: "Under Treatment",
  },
  {
    name: "Alice Johnson",
    phone: "2345678901",
    lastvisit: "2024-04-20",
    status: "Recovered",
  },
  {
    name: "Bob Brown",
    phone: "3456789012",
    lastvisit: "2024-05-05",
    status: "Under Treatment",
  },
  {
    name: "Charlie Davis",
    phone: "4567890123",
    lastvisit: "2024-05-15",
    status: "Recovered",
  },
  {
    name: "Diana Evans",
    phone: "5678901234",
    lastvisit: "2024-04-25",
    status: "Under Treatment",
  },
  {
    name: "Evan Ford",
    phone: "6789012345",
    lastvisit: "2024-05-02",
    status: "Recovered",
  },
];
export const inPatients = [
  {
    name: "Jane Smith",
    phone: "0987654321",
    lastvisit: "2024-05-10",
    status: "Under Treatment",
  },
  {
    name: "Bob Brown",
    phone: "3456789012",
    lastvisit: "2024-05-05",
    status: "Under Treatment",
  },
  {
    name: "Diana Evans",
    phone: "5678901234",
    lastvisit: "2024-04-25",
    status: "Under Treatment",
  },
];
export const outPatients = [
  {
    name: "John Doe",
    phone: "1234567890",
    lastvisit: "2024-05-01",
    status: "Recovered",
  },
  {
    name: "Alice Johnson",
    phone: "2345678901",
    lastvisit: "2024-04-20",
    status: "Recovered",
  },
  {
    name: "Charlie Davis",
    phone: "4567890123",
    lastvisit: "2024-05-15",
    status: "Recovered",
  },
  {
    name: "Evan Ford",
    phone: "6789012345",
    lastvisit: "2024-05-02",
    status: "Recovered",
  },
];

export const appointments = [
  {
    doctor: "Dr. John Smith",
    department: "Cardiology",
    dateAndTime: "2024-06-01T10:00:00Z",
    status: "Admitted",
  },
  {
    doctor: "Dr. Jane Doe",
    department: "Neurology",
    dateAndTime: "2024-06-02T11:00:00Z",
    status: "Pending",
  },
  {
    doctor: "Dr. Emily Davis",
    department: "Orthopedics",
    dateAndTime: "2024-06-03T12:00:00Z",
    status: "Admitted",
  },
  {
    doctor: "Dr. Michael Brown",
    department: "Gastroenterology",
    dateAndTime: "2024-06-04T13:00:00Z",
    status: "Discharged",
  },
  {
    doctor: "Dr. Sarah Wilson",
    department: "Pediatrics",
    dateAndTime: "2024-06-05T14:00:00Z",
    status: "Admitted",
  },
  {
    doctor: "Dr. David Johnson",
    department: "Oncology",
    dateAndTime: "2024-06-06T15:00:00Z",
    status: "Pending",
  },
  // {
  //   doctor: "Dr. Linda Martinez",
  //   department: "Dermatology",
  //   dateAndTime: "2024-06-07T16:00:00Z",
  //   status: "Admitted",
  // },
  // {
  //   doctor: "Dr. Robert Garcia",
  //   department: "Ophthalmology",
  //   dateAndTime: "2024-06-08T17:00:00Z",
  //   status: "Discharged",
  // },
  // {
  //   doctor: "Dr. Patricia Miller",
  //   department: "ENT",
  //   dateAndTime: "2024-06-09T18:00:00Z",
  //   status: "Admitted",
  // },
  // {
  //   doctor: "Dr. James Anderson",
  //   department: "Urology",
  //   dateAndTime: "2024-06-10T19:00:00Z",
  //   status: "Pending",
  // },
];
export const reports = [
  {
    test: "Blood Test",
    doctor: "Dr. John Smith",
    dateAndTime: "2024-05-01T10:00:00Z",
    report: "Normal",
  },
  {
    test: "MRI Scan",
    doctor: "Dr. Jane Doe",
    dateAndTime: "2024-05-02T11:00:00Z",
    report: "No abnormalities detected",
  },
  {
    test: "X-Ray",
    doctor: "Dr. Emily Davis",
    dateAndTime: "2024-05-03T12:00:00Z",
    report: "Minor fracture in left arm",
  },
  {
    test: "CT Scan",
    doctor: "Dr. Michael Brown",
    dateAndTime: "2024-05-04T13:00:00Z",
    report: "No significant findings",
  },
  {
    test: "Urine Test",
    doctor: "Dr. Sarah Wilson",
    dateAndTime: "2024-05-05T14:00:00Z",
    report: "Slight infection detected",
  },
  {
    test: "Echocardiogram",
    doctor: "Dr. David Johnson",
    dateAndTime: "2024-05-06T15:00:00Z",
    report: "Mild mitral regurgitation",
  },
];

export const vitals = [
  {
    appointmentID: "A1001",
    dateAndTime: "2024-06-01T10:00:00Z",
    vitals: {
      height: "170",
      weight: "70",
      temperature: "98.6",
      bloodPressureSystolic: "120",
      bloodPressureDiastolic: "80",
      bloodSugar: "90",
    },
  },
  {
    appointmentID: "A1002",
    dateAndTime: "2024-06-02T11:00:00Z",
    vitals: {
      height: "165",
      weight: "68",
      temperature: "99.1",
      bloodPressureSystolic: "130",
      bloodPressureDiastolic: "85",
      bloodSugar: "100",
    },
  },
  {
    appointmentID: "A1003",
    dateAndTime: "2024-06-03T12:00:00Z",
    vitals: {
      height: "180",
      weight: "75",
      temperature: "98.4",
      bloodPressureSystolic: "110",
      bloodPressureDiastolic: "70",
      bloodSugar: "95",
    },
  },
  {
    appointmentID: "A1004",
    dateAndTime: "2024-06-04T13:00:00Z",
    vitals: {
      height: "175",
      weight: "80",
      temperature: "99.5",
      bloodPressureSystolic: "140",
      bloodPressureDiastolic: "90",
      bloodSugar: "110",
    },
  },
  {
    appointmentID: "A1005",
    dateAndTime: "2024-06-05T14:00:00Z",
    vitals: {
      height: "160",
      weight: "65",
      temperature: "98.7",
      bloodPressureSystolic: "125",
      bloodPressureDiastolic: "80",
      bloodSugar: "85",
    },
  },
  {
    appointmentID: "A1006",
    dateAndTime: "2024-06-06T15:00:00Z",
    vitals: {
      height: "168",
      weight: "72",
      temperature: "99.0",
      bloodPressureSystolic: "135",
      bloodPressureDiastolic: "85",
      bloodSugar: "105",
    },
  },
];
export const reportEdit = [
  {
    patients: "John Doe",
    reportType: "Blood Test",
    labTechnician: "Alex Johnson",
    medicalCategory: "Hematology",
    headDoctor: "Dr. Emily Davis",
  },
  {
    patients: "Jane Smith",
    reportType: "MRI Scan",
    labTechnician: "Chris Williams",
    medicalCategory: "Radiology",
    headDoctor: "Dr. Michael Brown",
  },
  {
    patients: "Alice Johnson",
    reportType: "X-Ray",
    labTechnician: "Taylor White",
    medicalCategory: "Orthopedics",
    headDoctor: "Dr. Sarah Wilson",
  },
  {
    patients: "Robert Brown",
    reportType: "CT Scan",
    labTechnician: "Jordan Miller",
    medicalCategory: "Radiology",
    headDoctor: "Dr. David Johnson",
  },
  {
    patients: "Emily Davis",
    reportType: "Urine Test",
    labTechnician: "Morgan Lee",
    medicalCategory: "Pathology",
    headDoctor: "Dr. Linda Martinez",
  },
  {
    patients: "Michael Wilson",
    reportType: "Echocardiogram",
    labTechnician: "Pat Casey",
    medicalCategory: "Cardiology",
    headDoctor: "Dr. Robert Garcia",
  },
];
