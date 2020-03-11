import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='ui row'>
              <div className='column eight wide'>
                <SongList />
              </div>
              <div className='column eight wide'>
                <SongDetail />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
