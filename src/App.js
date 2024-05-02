import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobList from './components/jobList';
import Header from './components/Header'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div id='root' style={{overflowY: 'hidden'}}>
        <JobList />
      </div>
    </Provider>
  );
};

export default App;
