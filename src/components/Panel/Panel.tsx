import React, { Fragment } from 'react';
import './Panel.css';
import { IRetailItem } from '../../service/api';
import sales from '../../assets/sales.svg';
import home from '../../assets/home.svg';

interface IPanelProps {
  retailItem: IRetailItem;
}

export const Panel: React.FC<IPanelProps> = (props) => {
  const { retailItem } = props;

  return (
    <div className="panel-container">
      {retailItem ? (
        <Fragment>
          <img
            className="item-image"
            src={retailItem.image}
            alt="retail item"
          />
          <h4>{retailItem.title}</h4>
          <span className="subtitle">{retailItem.subtitle}</span>
          <div className="tags-container">
            <div>
              {retailItem.tags.map((tag, i) => (
                <div key={i} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="panel-icons-container">
            <div className="overview-icon-container">
              <img className="panel-icon" src={home} alt="overview" />
              <span>{'Overview'}</span>
            </div>
            <div className="sales-icon-container">
              <img className="panel-icon" src={sales} alt="overview" />
              <span>{'Sales'}</span>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </div>
  );
};
