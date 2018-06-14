import React from 'react';
import {connect} from '../store/appStore';
import Comment from './Comment';

export default connect((props) => {
  return props.comments.map((comment, key) => {
    return <Comment key={key} comment={comment} />
  });
})