import React from 'react';
import { ILineData, LineChart } from './LineChart';
import { months } from './months';
import { ISale } from '../../service/api';
import './RetailSales.css';

interface IRetailSalesProps {
  sales: ISale[];
}

export const RetailSales: React.FC<IRetailSalesProps> = (props) => {
  const { sales } = props;

  const retailSalesChartData = sales?.map((x) => {
    return {
      date: x.weekEnding,
      value: x.retailSales,
    } as ILineData;
  });

  const wholeSaleChartData = sales?.map((x) => {
    return {
      date: x.weekEnding,
      value: x.wholesaleSales,
    } as ILineData;
  });

  return (
    <div className={'retail-sales-container'}>
      <div className={'graph-container'}>
        <h4>{'Retail Sales'}</h4>
        <LineChart data={retailSalesChartData} color="#40a5f6" />
        <LineChart
          data={wholeSaleChartData}
          color="gray"
          className="whole-sale-chart"
        />
        <div className={'retail-sales-months'}>
          {months.map((x, i) => (
            <span key={i}>{x}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
