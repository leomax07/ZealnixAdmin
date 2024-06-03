import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BarChart from "../../../../Components/Chart/BarChart";
import {
	APPOINTMENT_STAT_WEEK,
	IN_PATIENT_STATUS,
} from "../../../../constants";
import { AppDispatch, RootState } from "../../../../redux/store";
import patientsData from "../../../../utils/data";
import { getInAndOutPatientBarChartData } from "../../store/dashboardscreenMiddleware";

function PatientInVsOut() {
	const [chartData, setChargeData] = useState({});
	const dispatch = useDispatch<AppDispatch>();
	const { inAndOutPatientBarChartData } = useSelector<
		RootState,
		RootState["dashboardReducers"]
	>((state) => state.dashboardReducers);

	const fetchData = async () => {
		const payload = {
			startDate: moment().startOf("week").toISOString(),
			endDate: moment().endOf("week").toISOString(),
		};
		await dispatch(getInAndOutPatientBarChartData(payload));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const getChartData = () => {
		const inPatients: any = { ...APPOINTMENT_STAT_WEEK };
		const outPatients: any = { ...APPOINTMENT_STAT_WEEK };

		inAndOutPatientBarChartData.results.forEach((result) => {
			result.types.forEach((type: any) => {
				const day = new Date(type.date).getDay();
				if (result.status === IN_PATIENT_STATUS) inPatients[day] += type.count;
				else outPatients[day] += type.count;
			});
		});
		return {
			labels: ["S", "M", "T", "W", "T", "F", "S"],
			datasets: [
				{
					label: "In Patient",
					data: Object.values(inPatients),
					backgroundColor: patientsData.map(() => "#2563EB"),
					barPercentage: 0.4,
					borderRadius: 10,
				},
				{
					label: "Out Patient",
					data: Object.values(outPatients),
					backgroundColor: patientsData.map(() => "#38BDF8"),
					barPercentage: 0.4,
					borderRadius: 10,
				},
			],
		};
	};

	useEffect(() => {
		if (inAndOutPatientBarChartData.results.length)
			setChargeData(getChartData());
	}, [inAndOutPatientBarChartData]);
	return (
		<div className="card patient__in__v__out">
			<div className="header">
				<p className="title">Patient Breakdown</p>
			</div>
			<div className="patient__gender__line__chart">
				<BarChart chartData={chartData} />
				<div className="lengend__flex__evenly">
					<div className="inpatient each__legend">
						<div className="status" />
						<p>In Patient</p>
					</div>
					<div className="outpatient each__legend">
						<div className="status" />
						<p>Out Patient</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PatientInVsOut;
