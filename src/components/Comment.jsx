import React, {Component} from 'react';
import {connect} from '../store/appStore';

const styles = {
  name: {
    margin: '1em 1em 0em 3em'
  },

  date: {
    margin: '0em 1em 0em 3em'
  },
  text: {
    margin: '0em 1em 2em 3em'
  }
};

class Comment extends Component {
  
  render() {
    
    return(
      <React.Fragment>
        
      <p style={styles.name}>
      <b>Name: </b> {this.props.comment.name}
      </p>
      <p style={styles.date}>
        <b>From: </b>
        {this.props.comment.date.getDate()}/
        {this.props.comment.date.getMonth()}/
        {this.props.comment.date.getFullYear()} 
        &nbsp; 
        {this.props.comment.date.getHours()}:
        {this.props.comment.date.getMinutes()}:
        {this.props.comment.date.getSeconds()}
      </p>
      <p style={styles.text}>
        {this.props.comment.text}
      </p>
    </React.Fragment>
    );
  }
}

export default connect(Comment);