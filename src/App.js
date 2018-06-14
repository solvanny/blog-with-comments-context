import React, { Component } from 'react';
import {Provider} from './store/appStore';
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';


class App extends Component {
  render() {
    return (
      <Provider>
        <React.Fragment>
          <ArticleForm />
          <ArticleList />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
