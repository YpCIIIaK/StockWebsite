import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LineChart from '../../graph/LineChart';
import Tabs from "../../tab/Tabs";

const companyData = {
    AAPL: {
        name: 'Apple Inc.',
        description: 'Apple Inc. is an American multinational technology company.',
        stockPrice: '$150',
        sector: 'Technology',
        industry: 'Consumer Electronics',
        marketCap: '2.5T',
        country: 'USA',
        oneMonthChange: '-5%',
        oneYearChange: '+30%',
        chartData: {
            oneMonth: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: '1M Performance',
                        data: [150, 155, 160, 158],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2,
                    },
                ],
            },
            oneYear: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: '1Y Performance',
                        data: [150, 155, 160, 158, 162, 165, 170],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2,
                    },
                ],
            },
            tenYear: {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                datasets: [
                    {
                        label: '10Y Performance',
                        data: [120, 118, 119, 117, 121, 123, 125, 120, 118, 119],
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderWidth: 2,
                    },
                ],
            },
        },
    },
    CVX: {
        name: 'Chevron Corporation',
        description: 'Chevron Corporation is an American multinational energy corporation.',
        stockPrice: '$120',
        sector: 'Energy',
        industry: 'Oil & Gas',
        marketCap: '300B',
        country: 'USA',
        oneMonthChange: '-3%',
        oneYearChange: '+10%',
        chartData: {
            oneMonth: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: '1M Performance',
                        data: [120, 118, 119, 117],
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderWidth: 2,
                    },
                ],
            },
            oneYear: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: '1Y Performance',
                        data: [120, 118, 119, 117, 121, 123, 125],
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderWidth: 2,
                    },
                ],
            },
            tenYear: {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                datasets: [
                    {
                        label: '10Y Performance',
                        data: [120, 118, 119, 117, 121, 123, 125, 120, 118, 119],
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderWidth: 2,
                    },
                ],
            },
        },
    },
};

const CompanyPage = () => {
    const { ticker } = useParams();
    const [activeTab, setActiveTab] = useState('overview');
    const [activeChartTab, setActiveChartTab] = useState('oneMonth');
    const company = companyData[ticker];

    if (!company) {
        return <div>Company not found</div>;
    }

    const tabs = [
        {
            name: 'overview',
            label: 'Overview',
            content: (
                <div>
                    <h3 className="text-lg font-bold mb-2">Company Description</h3>
                    <p>{company.description}</p>
                </div>
            ),
        },
        {
            name: 'financials',
            label: 'Financials',
            content: (
                <div>
                    <h3 className="text-lg font-bold mb-2">Market Cap and Sector</h3>
                    <p><strong>Market Cap:</strong> {company.marketCap}</p>
                    <p><strong>Sector:</strong> {company.sector}</p>
                    <p><strong>Industry:</strong> {company.industry}</p>
                </div>
            ),
        },
    ];

    const chartTabs = [
        {
            name: 'oneMonth',
            label: '1 Month',
            content: <LineChart chartData={company.chartData.oneMonth} />,
        },
        {
            name: 'oneYear',
            label: '1 Year',
            content: <LineChart chartData={company.chartData.oneYear} />,
        },
        {
            name: 'tenYear',
            label: '10 Year',
            content: <LineChart chartData={company.chartData.tenYear} />,
        },
    ];

    return (
        <div className="py-3 px-4">
            <div className="flex items-center mx-2 mb-3">
                <h1 className="text-3xl font-bold mr-3">{company.name}</h1>
                <div className="text-gray-600">
                    <p className="uppercase text-sm font-semibold">{ticker}</p>
                    <p className="text-lg font-bold">{company.stockPrice}</p>
                </div>
            </div>

            <div className="flex h-[500px]">
                <div className="w-1/5 bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Information</h2>
                    <p><strong>Sector:</strong> {company.sector}</p>
                    <p><strong>Industry:</strong> {company.industry}</p>
                    <p><strong>Market Cap:</strong> {company.marketCap}</p>
                    <p><strong>Country:</strong> {company.country}</p>
                    <p><strong>1M Change:</strong> {company.oneMonthChange}</p>
                    <p><strong>1Y Change:</strong> {company.oneYearChange}</p>
                </div>

                <div className='w-4/5 p-4 ml-5 bg-white rounded-lg shadow-md '>
                    <div className="h-[410px]">
                        <Tabs
                            tabs={chartTabs}
                            activeTab={activeChartTab}
                            onTabChange={setActiveChartTab}
                            styleType="black"
                            tabClassName="h-8"
                            size="sm"
                        />
                    </div>
                </div>

            </div>

            <div className="p-4">
                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    styleType="black"
                    size="md"
                />
            </div>
        </div>
    );
};

export default CompanyPage;
