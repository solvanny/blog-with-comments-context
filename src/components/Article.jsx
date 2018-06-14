import React, {Component} from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import {connect} from '../store/appStore';

const styles = {
  title: {
    margin: '1em 1em 0em 1em'
  },
  img: {
    margin: '1em'
  },
  date: {
    margin: '1em'
  },
  text: {
    margin: '1em'
  }
};

class Article extends Component {
  render() {
    return(
      <React.Fragment>
        <h3 style={styles.title}>
          {this.props.article.title}
        </h3>
        <img style={styles.img} src={this.props.article.imgUrl} alt={this.props.article.title}/>
        <p style={styles.date}>
          <b>From: </b>
          {this.props.article.date.getDate()}/
          {this.props.article.date.getMonth()}/
          {this.props.article.date.getFullYear()} 
          &nbsp; 
          {this.props.article.date.getHours()}:
          {this.props.article.date.getMinutes()}:
          {this.props.article.date.getSeconds()}
        </p>
        <p style={styles.text}>
          {this.props.article.text}
        </p>
        <CommentForm  articleId={this.props.article.id} />
        <CommentList comments={this.props.article.comments} />
      </React.Fragment>
    );
  }
}

export default connect(Article);