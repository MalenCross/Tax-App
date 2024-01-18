import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { generateGrossIncomes } from "./ChartHelpers";
import { calculateTotalTax } from './TaxInfo';

import { FilingStatus } from "./App";
import Classnames from 'classnames';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Chart.js Line Chart",
        },
    },
};

export interface ChartProps {
    filingStatus: FilingStatus
}

export function Chart({ filingStatus }: ChartProps) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(50000);
    const [data, setData] = useState<any>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const grossIncomes = generateGrossIncomes(min, max);
        // // console.log(generateGrossIncomes(50,50000))
        // let grossIncomes = [5000,20000,100000]
        setData({
            labels: grossIncomes,
            datasets: [
                {
                    label: "Total Tax Paid",
                    data: grossIncomes.map((grossIncome) => calculateTotalTax(grossIncome, filingStatus, 0, 0).totalTax),
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                    label: "Take Home Pay",
                    data: grossIncomes.map((grossIncome) => calculateTotalTax(grossIncome, filingStatus, 0, 0).takeHomePay),
                    borderColor: "rgb(132, 99, 255,)",
                    backgroundColor: "rgba(132, 99, 255, 0.5)",
                },
            ],
        });
    }, [filingStatus, min, max]);

    console.log("rendering charts");
    return (
        <div className={Classnames('flexbox-item', 'flexbox-item-2', 'shadow')}>
            <h2 style={{ fontSize: "35px", margin: "10px" }}>Chart</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: "space-evenly",
                    alignItems: "flex-end",
                }}
            >
                <div>
                    <div style={{ fontSize: "25px" }}>Min</div>
                    <input
                        className={Classnames('margin', 'shadow')}
                        type="number"
                        value={min}
                        step="5000"
                        onChange={(event: React.ChangeEvent<any>) => {
                            setMin(parseInt(event.target.value));
                        }}
                    />
                </div>
                <div>
                    <div style={{ fontSize: "25px" }}>Max</div>
                    <input
                        style={{ marginTop: "0px" }}
                        className={Classnames('margin', 'shadow')}
                        type="number"
                        value={max}
                        step="5000"
                        onChange={(event: React.ChangeEvent<any>) => {
                            setMax(parseInt(event.target.value));
                        }}
                    />
                </div>
            </div>

            <Line height={350} width={600} options={options} data={data} />
        </div>
    );
}
