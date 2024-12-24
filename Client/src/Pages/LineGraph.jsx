import React from 'react'
import { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function LineGraph({ data }) {

    //color picker....
    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("white");
    const [color4, setColor4] = useState("white");
    const [color5, setColor5] = useState("white");


    const [col1label, setCol1label] = useState("");
    const column1labelText = (event) => {
        setCol1label(event.target.value);
    }
    const [col2, setCol2] = useState("");
    const column2Text = (event) => {
        setCol2(event.target.value);
    }
    const [col3, setCol3] = useState("");
    const column3Text = (event) => {
        setCol3(event.target.value);
        // alert(value1);
    }
    const [col4, setCol4] = useState("");
    const column4Text = (event) => {
        setCol4(event.target.value);
    }
    const [col5, setCol5] = useState("");
    const column5Text = (event) => {
        setCol5(event.target.value);
    }

    const [col6, setCol6] = useState("");
    const column6Text = (event) => {
        setCol6(event.target.value);
    }


    var label = data.map((row) => ([row[col1label]]));
    var value1 = data.map((row) => ([row[col2]]));
    value1 = value1.toString().split(',');
    var value2 = data.map((row) => ([row[col3]]));
    value2 = value2.toString().split(',');
    var value3 = data.map((row) => ([row[col4]]));
    value3 = value3.toString().split(',');
    var value4 = data.map((row) => ([row[col5]]));
    value4 = value4.toString().split(',');
    var value5 = data.map((row) => ([row[col6]]));
    value5 = value5.toString().split(',');

    //download graph Code
    const handleCaptureClick = async () => {
        const pricingTableElmt =
            document.querySelector('.LineGraph');
        if (!pricingTableElmt) return alert("Error");

        const canvas = await html2canvas(pricingTableElmt);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'LineGraph.png', 'image/png');
    };

    return (
        <>
            <div className='flex ml-8 mt-8 h-[38rem] border-2 border-black w-[91rem]'>
                <div className='textboxes  ml-4 mt-4 h-[36rem] border-0 border-black w-[29rem] p-4'>
                    <h1 className='text-lg font-bold ml-2 mt-2' id='h1' >Write Column Names To Generate...</h1>

                    <input type="text" value={col1label} onChange={column1labelText} placeholder='Enter First Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />

                    <input type="text" value={col2} onChange={column2Text} placeholder='Enter Second Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color1} onChange={e => setColor1(e.target.value)} className='ml-2' />

                    <input type="text" value={col3} onChange={column3Text} placeholder='Enter third Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color2} onChange={e => setColor2(e.target.value)} className='ml-2' />

                    <input type="text" value={col4} onChange={column4Text} placeholder='Enter Fourth Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color3} onChange={e => setColor3(e.target.value)} className='ml-2' />

                    <input type="text" value={col5} onChange={column5Text} placeholder='Enter Fourth Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color4} onChange={e => setColor4(e.target.value)} className='ml-2' />

                    <input type="text" value={col6} onChange={column6Text} placeholder='Enter Fourth Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color5} onChange={e => setColor5(e.target.value)} className='ml-2' />

                    <div className='mt-8 h-16 w-86' >
                        <button onClick={handleCaptureClick} className='border-2 bg-green-400 font-bold hover:bg-green-500 border-black rounded mt-2 p-2 text-xl '>Download Graph</button>
                        <Link to={"/password"} >
                            <button className='border-2 bg-green-400 font-bold hover:bg-green-500 border-black rounded mt-2 ml-2 p-2 text-xl' >Share Graph</button>
                        </Link>
                    </div>
                </div>

                <div className='Graphbox  ml-4 mt-0 h-[35rem] border-0 border-black w-[61rem] p-4'>
                    <div >
                        <Line className='LineGraph h-[35rem] w-[60rem]'
                            data={{
                                labels: label,
                                datasets: [{
                                    label: col2,
                                    data: value1,
                                    backgroundColor: "white",
                                    borderColor: color1
                                },
                                {
                                    label: col3,
                                    data: value2,
                                    backgroundColor: "white",
                                    borderColor: color2
                                },
                                {
                                    label: col4,
                                    data: value3,
                                    backgroundColor: "white",
                                    borderColor: color3
                                },
                                {
                                    label: col5,
                                    data: value4,
                                    backgroundColor: "white",
                                    borderColor: color4
                                },
                                {
                                    label: col6,
                                    data: value5,
                                    backgroundColor: "white",
                                    borderColor: color5
                                }
                            ],
                            }}
                            options={{
                                elements: {
                                    line: {
                                        tension: 0,
                                    }
                                },
                                plugins: {
                                    title: {
                                        text: "Line Chart",
                                    },
                                },
                            }}
                        />

                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

export default LineGraph