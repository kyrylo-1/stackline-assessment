import React from 'react';
import * as d3 from 'd3';
import { months } from './months';
import './RetailSales.css';
import { ISale } from '../../service/api';

interface IRetailSalesProps {
  sales: ISale[];
}

const date = d3.timeParse('%Y-%m-%d');

export const RetailSales: React.FC<IRetailSalesProps> = (props) => {
  const { sales } = props;

  return (
    <div className={'retail-sales-container'}>
      <div className={'graph-container'}>
        <h4>{'Retail Sales'}</h4>
        <svg preserveAspectRatio="none" width={800} height={400}>
          <path className={'retail-line'} />
        </svg>
        <div className={'retail-sales-months'}>
          {months.map((x, i) => (
            <span key={i}>{x}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
