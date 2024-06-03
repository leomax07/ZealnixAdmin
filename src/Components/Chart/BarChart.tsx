import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

interface Props {
	chartData?: any;
	height?: any;
	// width?: any
}

function BarChart({ chartData, height }: Props) {
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
			elements: {
				bar: {
					borderRadius: 10,
					borderColor: "transparent", // Remove the border color here
				},
			},
		};

		setChartOptions(options);
	}, []);

	return (
		<div className="overall_linestylechart">
			{chartData && (
				<Chart
					type="bar"
					data={chartData}
					options={chartOptions}
					height={height}
					// width=100
				/>
			)}
		</div>
	);
}

export default BarChart;
