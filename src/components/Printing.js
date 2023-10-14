import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import toPdf from 'dom-to-pdf';
import Otherlinear from './Otherlinear';
import LinearChart from './LinearChart';
import Header from './Header';
import Footer from './Footer';
import './Printing.css';
import print from "../images/print.png"

const Printing = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv')
            .then((response) => response.json())
            .then((responsedata) => {
                let tempData = responsedata.data;
                let arrayData = tempData.map((item) => ({
                    x: item.data_year,
                    y: item.Burglary,
                }));
                setData(arrayData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, []);

    const generatePdf = async () => {

        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);

        const mainContainer = document.createElement('div');
        mainContainer.style = `font-family: Arial, sans-serif; padding: 40px;`;

        const header = document.createElement('div');
        ReactDOM.render(<Header />, header);
        const headerHtml = header.innerHTML;
        mainContainer.innerHTML += headerHtml;

        const hidedContainer1 = document.createElement('div');
        ReactDOM.render(<Otherlinear />, hidedContainer1);
        const hhidedContainer1Html = hidedContainer1.innerHTML;
        mainContainer.innerHTML += hhidedContainer1Html;


        const hidedContainer2 = document.createElement('div');
        ReactDOM.render(<Otherlinear />, hidedContainer2);
        const hhidedContainer2Html = hidedContainer2.innerHTML;
        mainContainer.innerHTML += hhidedContainer2Html;

        const hidedContainer3 = document.createElement('div');
        ReactDOM.render(<Otherlinear />, hidedContainer3);
        const hhidedContainer3Html = hidedContainer3.innerHTML;
        mainContainer.innerHTML += hhidedContainer3Html;

        const linearChartContainer = document.createElement('div');
        ReactDOM.render(<LinearChart data={data} />, linearChartContainer);
        const linearChartHtml = linearChartContainer.innerHTML;
        mainContainer.innerHTML += linearChartHtml;


        const footer = document.createElement('div');
        ReactDOM.render(<Footer time={formattedDate} />, footer);
        const footerHtml = footer.innerHTML;
        mainContainer.innerHTML += footerHtml;


        const pdfOptions = {
            margin: 10,
            filename: 'downloaded.pdf',
        };

        try {
            await toPdf(mainContainer, pdfOptions);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div className='Print'>
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <>
                    <button onClick={generatePdf}><img src={print} alt="" /> Download PDF</button>
                </>
            )}
        </div>
    );
};

export default Printing;
