import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

interface Props {
	chartData?: any;
}

function BarChart({ chartData }: Props) {
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		const options = {
			plugins: {
				legend: false,
			},
			scales: {
				x: {
					grid: {
						display: false,
					},
				},
				y: {
					beginAtZero: true,
					grid: {
						display: false,
					},
				},
			},
		};

		setChartOptions(options);
	}, []);

	return (
		<div className="">
			{chartData && (
				<Chart
					type="bar"
					data={chartData}
					options={chartOptions}
				/>
			)}
		</div>
	);
}

export default BarChart;
