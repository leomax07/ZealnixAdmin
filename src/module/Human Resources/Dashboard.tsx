import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { Image } from "primereact/image";
import './HumanResource.scss';
import { Paginator } from 'primereact/paginator';
import cardData from "./mock";


interface CardProps {
    id: number;
    date: string;
    time: string;
    imageUrl: string;
    title: string;
    description: string;
    color: string; // Assuming you have a color property in your card data
}

const Dashboard: React.FC = () => {
    const options = ["Off", "On"];
    const [value, setValue] = useState(options[0]);
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);

    const onPageChange = (event: { first: number; rows: number }) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div>
            <div className="humanresource__dashboard">
                <div>Dashboard</div>
                <div className="humanresource__dashboard__input">
                    <InputText />
                    <SelectButton
                        value={value}
                        onChange={(e) => setValue(e.value)}
                        options={options}
                    />
                    <Button label="Add new" />
                </div>
            </div>

            {/* Cards */}
            {cardData.map((data: CardProps) => (
                <div
                    className="humanresource__dashboard__card"
                    key={data.id}
                    style={{ borderLeft: `5px solid ${data.color}` }}
                >
                    <div>
                        <div>Today</div>
                        <div>{data.time}</div>
                    </div>
                    <hr />
                    <div className="humanresource__dashboard__innercard">
                        <div>
                            <Image src={data.imageUrl} alt="Image" width="50" />
                        </div>
                        <div>
                            <div>{data.title}</div>
                            <div>{data.description}</div>
                        </div>
                    </div>
                </div>
            ))}
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    );
};

export default Dashboard;
