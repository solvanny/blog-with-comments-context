import React, {Component} from 'react';
import {connect} from '../store/appStore';

class ArticleForm extends Component {

  onSubmitForm(ev) {
    ev.preventDefault();
    let form = new FormData(ev.target);
    let title = form.get("title");
    let text = form.get("textArea");
    let imgUrl = form.get("imageUrl");
    let article = {
      id: this.props.aricleId,
      imgUrl: imgUrl, 
      title: title,
      text: text,
      date: new Date()
    }
    this.props.actions.addArticle(article);
    ev.target.reset();
  }

  render() {
    return(
      <form onSubmit={this.onSubmitForm.bind(this)}>
        <input type="text" name="title" placeholder="Insert the title"/>
        <input type="text" name="imageUrl" placeholder="Insert image-url" />
        <textarea type="text" name="textArea" placeholder="Insert the text"/>
        <button name="button">Submit</button>
      </form> 
    );
  }
}

export default connect(ArticleForm);