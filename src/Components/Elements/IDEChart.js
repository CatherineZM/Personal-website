import React from 'react';
import BubbleChart from "react-tooltip-bubble-chart";

const IDEChart = () => {
    const data = [
        {
            fillColor: "rgba(255, 99, 132, 0.4)",
            id: 0,
            name: "ReactJS",
            size: 100,
        },{
            fillColor: "rgba(255, 159, 64, 0.4)",
            id: 1,
            name: "NodeJS",
            size: 120,
        },{
            fillColor: "rgba(255, 205, 86, 0.4)",
            id: 2,
            name: "MySQL",
            size: 100,
        },{
            fillColor: "rgba(75, 192, 192, 0.4)",
            id: 3,
            name: "MongoDB",
            size: 80,
        },{
            fillColor: "rgba(54, 162, 235, 0.4)",
            id: 4,
            name: "Agile",
            size: 145,
        },{
            fillColor: "rgba(153, 102, 255, 0.4)",
            id: 5,
            name: "Linux",
            size: 115,
        },{
            fillColor: "rgba(201, 203, 207, 0.4)",
            id: 6,
            name: "Visual \n Studio",
            size: 140,
            dYdX1: { dy: 0, dx: 0 },
            dYdX2: { dy: 18, dx: -53},
        },
    ];

    return (
        <div>
          <BubbleChart
            bubblesData={data}
            width={700}
            height={300}
            textFillColor="#717C84"
            backgroundColor="transparent"
            minValue={1}
            maxValue={150}
            move={true}
          />
        </div>
    );
};

export default IDEChart;
