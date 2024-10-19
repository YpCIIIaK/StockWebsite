import React from 'react';
import { useParams } from 'react-router-dom';
import LineChart from '../../graph/LineChart'; // Импортируем LineChart

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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Stock Price',
                    data: [150, 155, 160, 158, 162, 165, 170],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 2,
                },
            ],
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Stock Price',
                    data: [120, 118, 119, 117, 121, 123, 125],
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderWidth: 2,
                },
            ],
        },
    },
};


const CompanyPage = () => {
    const { ticker } = useParams();
    const company = companyData[ticker];

    if (!company) {
        return <div>Company not found</div>;
    }

    return (
        <div className="py-3 px-4">
            <div className="flex items-center mx-2 mb-3">
                <h1 className="text-3xl font-bold mr-3">{company.name}</h1>
                <div className="text-gray-600">
                    <p className="uppercase text-sm font-semibold">{ticker}</p>
                    <p className="text-lg font-bold">{company.stockPrice}</p>
                </div>
            </div>

            <div className="flex">
                <div className="w-1/5 bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Information</h2>
                    <p><strong>Sector:</strong> {company.sector}</p>
                    <p><strong>Industry:</strong> {company.industry}</p>
                    <p><strong>Market Cap:</strong> {company.marketCap}</p>
                    <p><strong>Country:</strong> {company.country}</p>
                    <p><strong>1M Change:</strong> {company.oneMonthChange}</p>
                    <p><strong>1Y Change:</strong> {company.oneYearChange}</p>
                </div>

                <div className="w-4/5 p-4 ml-5 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Stock Performance Chart</h2>
                    <div className="h-96">
                        <LineChart chartData={company.chartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;
