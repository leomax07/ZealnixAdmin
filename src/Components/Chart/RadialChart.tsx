import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

interface Props {
	data: any;
}

function RadialChart({ data }: Props) {
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		const options = {
			cutout: "70%",
			plugins: {
				legend: false,
			},
		};

		setChartOptions(options);
	}, [data]);

	return (
		<div className="flex justify-content-center">
			<Chart
				type="doughnut"
				data={data}
				options={chartOptions}
				className="w-full md:w-30rem"
			/>
		</div>
	);
}

export default RadialChart;
