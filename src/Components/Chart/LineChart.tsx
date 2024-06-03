import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import './chart.scss';

export default function UpdatedRowTwoLine() {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement);
		// const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
		const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
		const data = {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					tension: 0.4,
					borderColor: "#7B61FF"
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90],
					fill: false,
					tension: 0.4,
					borderColor: "#7B61FF"
				},
				{
					label: 'Third Dataset',
					data: [12, 51, 62, 33, 21, 62, 45],
					fill: true,
					borderColor: "#ED4F9D",
					tension: 0.4,
					backgroundColor: '#F178B40F'
				}
			]
		};
		const options = {
			maintainAspectRatio: false,
			aspectRatio: 0.6,
			plugins: {
				legend: {
					display: false // Remove legend
				}
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary
					},
					grid: {
						color: surfaceBorder
					}
				},
				y: {
					ticks: {
						color: textColorSecondary
					},
					grid: {
						color: surfaceBorder
					}
				}
			}
		};

		setChartData(data);
		setChartOptions(options);
	}, []);

	return (
		<div className='overall_linestylechart'>
			<Chart type="line" data={chartData} options={chartOptions} height="224px" />
		</div>
	)
}
