import createStore from '../utiles/context';

const initilaStore = {
  articles: []
};

const actions = {
  
  addArticle(article) {
    article.id = this.getStore('articles').length + 1;
    article.comments = [];
    this.setStore({
      articles: [...this.getStore('articles'), article]
    });
  },

  addComment(articleId, comment) {
    let articles = this.getStore('articles').map((article) => {
      if(article.id === articleId) {
        article.comments = [...article.comments, comment]
      }
      return article;
    });
    this.setStore({
      articles: articles
    });
  }
};

const store = createStore(initilaStore, actions);

export const {Provider, connect} = store;

export default store;
