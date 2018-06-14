import React from 'react';
import {connect} from '../store/appStore';
import Article from './Article';

export default connect((props) => {
  return props.store.articles.map((article, key) => {
    return <Article key={key} article={article} />
  });
})