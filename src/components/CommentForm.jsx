import React, {Component} from 'react';
import {connect} from '../store/appStore';

class CommentForm extends Component {
  onSubmitCommentForm(ev) {
    ev.preventDefault();
    let form = new FormData(ev.target);
    let name = form.get('name');
    let text = form.get('text');
    let articleId = this.props.articleId;
    let comment = {
      date: new Date(),
      name: name,
      text: text
    }
    this.props.actions.addComment(articleId , comment);
    ev.target.reset();
  }

  render() {
    return(
      <form onSubmit={this.onSubmitCommentForm.bind(this)}>
        <input name="name" type="text" placeholder="Insert your name" />
        <textarea name="text" type="text"  placeholder="Insert your comment" />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(CommentForm);