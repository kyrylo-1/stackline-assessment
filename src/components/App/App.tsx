import React, { useEffect } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { connect } from 'react-redux';
import { getApiData } from '../../store/actions';
import { SalesBoard } from '../SalesBoard/SalesBoard';
import { RootState } from '../../store/types';
import { AppState } from '../../store/store';
import { Panel } from '../Panel/Panel';

interface IAppProps {
  appState: RootState;
  getApiData: any;
}

const App: React.FC<IAppProps> = (props) => {
  const { appState, getApiData } = props;

  useEffect(function fetchDateOnInit() {
    (async () => {
      try {
        await getApiData();
      } catch (e) {
        console.log(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Panel />
        <div>
          <SalesBoard sales={appState.sales} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  appState: state.appState,
});

export default connect(mapStateToProps, { getApiData })(App);
// export default App;
