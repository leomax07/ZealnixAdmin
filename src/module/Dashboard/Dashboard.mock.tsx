const setdata = {
    currentWeekAppointmentCount: 50,
    lastWeekAppointmentCount: 45,
    currentWeekPatientCount: 30,
    lastWeekPatientCount: 25
};

export default setdata;




// mockChartData.js
const mockChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Dataset 1",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#42A5F5"
        },
        {
            label: "Dataset 2",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: "#FFA726"
        }
    ]
};

//   const mockChartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Mock Line Chart"
//       }
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Month"
//         }
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Value"
//         }
//       }
//     }
//   };

export { mockChartData };

export const mockrightChartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "Sales",
            data: [0, 10, 12, 14, 16, 18, 20],
            backgroundColor: "#F178B40F",
            borderColor: "#F178B40F",
            borderWidth: 1,
        },
    ],
};

export const latestmockPatientList = [
    {
        id: 1,
        date: "2024-06-01",
        name: "John Doe",
        age: 35,
        gender: "Male",
        status: "Active",
        dateOfBirth: "1989-05-15"
    },
    {
        id: 2,
        date: "2024-06-02",
        name: "Jane Smith",
        age: 42,
        gender: "Female",
        status: "Discharged",
        dateOfBirth: "1982-12-10"
    },
    {
        id: 3,
        date: "2024-06-03",
        name: "Alice Johnson",
        age: 28,
        gender: "Female",
        status: "Active",
        dateOfBirth: "1996-08-20"
    },
    // Add more mock patient data as needed
];

const mockBarChartData = {
    labels: ["Dec 25", "Dec 26", "Dec 27", "Dec 28", "Dec 29", "Dec 30", "Dec 31"],
    datasets: [
        {
            label: "InPatients",
            data: [10, 30, 40, 50, 60, 70, 80],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
        },
        {
            label: "OutPatients",
            data: [10, 30, 40, 50, 60, 70, 80],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
        }
    ]
};

export { mockBarChartData};


const mockbarChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
        {
            label: 'Dataset',
            data: [300, 50, 100, 40, 120],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)'
            ],
            hoverOffset: 4
        }
    ]
};

export { mockbarChartData};


// export { mockBarChartData};


// const mockBarChartData = {
//     labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
//     datasets: [
//         {
//             label: 'In Patient',
//             data: [30, 40, 25, 45, 30, 50, 35],
//             backgroundColor: Array(7).fill("#2563EB"),
//             barPercentage: 0.4,
//             borderRadius: 10
//         },
//         {
//             label: 'Out Patient',
//             data: [20, 35, 45, 30, 40, 20, 25],
//             backgroundColor: Array(7).fill("#38BDF8"),
//             barPercentage: 0.4,
//             borderRadius: 10
//         }
//     ]
// };



// export { mockBarChartData};



