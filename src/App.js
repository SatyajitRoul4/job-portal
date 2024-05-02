import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobList from './components/jobList';

const App = () => {
  return (
    <Provider store={store}>
      <div id='root'>
        <JobList />
      </div>
    </Provider>
  );
};

export default App;
