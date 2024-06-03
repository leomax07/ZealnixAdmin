import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function RadialChart() {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		// const documentStyle = getComputedStyle(document.documentElement);
		const data = {
			datasets: [
				{
					data: [300, 150],
					backgroundColor: [
						"#38BDF8",
						"#2563EB",
						// "gray"
					],
					
				}
			]
		};
		const options = {
			cutout: '60%',
			plugins: {
				legend: false // Remove legend
			}
		};

		setChartData(data);
		setChartOptions(options);
	}, []);

	return (
		<div className="card flex justify-content-center">
			<Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" height='260px'/>
		</div>
	)
}
