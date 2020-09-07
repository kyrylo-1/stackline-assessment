import React from 'react';
import { format } from 'date-fns';
import './SalesBoard.css';
import { ISale } from '../../service/api';

const colums: readonly string[] = [
  'week ending',
  'retail sales',
  'wholesale sales',
  'unit sold',
  'retail margin',
];

interface ISalesBoardProps {
  sales: ISale[];
}

export const SalesBoard: React.FC<ISalesBoardProps> = (props) => {
  const { sales } = props;

  return (
    <div className="sales-board">
      <div className="sales-header">
        {colums.map((x, i) => {
          return (
            <div key={i} className="sales-header-column">
              <span>{x}</span>
            </div>
          );
        })}
      </div>
      {sales?.map((x, i) => {
        return (
          <div key={i} className="sales-row">
            <div>
              <span>{format(new Date(x.weekEnding), 'MM-dd-yy')}</span>
              <span>{`$${x.retailSales.toLocaleString()}`}</span>
              <span>{`$${x.wholesaleSales.toLocaleString()}`}</span>
              <span>{x.unitsSold}</span>
              <span>{`$${x.retailerMargin.toLocaleString()}`}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
