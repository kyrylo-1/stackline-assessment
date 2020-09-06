import React from 'react';
import { ISales } from '../../store/reducers';
import './SalesBoard.css';
import { format } from 'date-fns';
interface ISalesBoardProps {
  sales: ISales[];
}
const colums: string[] = [
  'week ending',
  'retail sales',
  'wholesale sales',
  'unit sold',
  'retail margin',
];

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
      {sales.map((x, i) => {
        return (
          <div key={i} className="sales-row">
            <div>
              <span>{format(new Date(x.weekEnding), 'MM-dd-yy')}</span>
              <span>{`$${x.retailSales}`}</span>
              <span>{`$${x.wholesaleSales}`}</span>
              <span>{x.unitsSold}</span>
              <span>{`$${x.retailerMargin}`}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
