import React from 'react';

function mapContextToProps(Ctx, Component) {
  return props => {
    return (
      <Ctx.Consumer>
        { context => <Component {...props} {...context} /> }
      </Ctx.Consumer>
    )
  }
}

function mapActionsToProvider(Provider, actions) {
  for (let action in actions) {
    Provider.state.actions[action] = actions[action].bind(Provider)
  }
}

function createProvider(Ctx, initialStore, actions) {
  return class Provider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        store: initialStore,
        actions: {}
      };
      mapActionsToProvider(this, actions);
    }

    getStore = (key) => {
      if (key) {
        return this.state.store[key];
      }

      return this.state.store;
    }

    setStore = (partialStore, cb) => {
      this.setState({store: {...this.state.store, ...partialStore}}, cb);
    }

    render() {
      return (
        <Ctx.Provider value={this.state}>
          {this.props.children}
        </Ctx.Provider>
      )
    }
  }
}

export default (store, actions) => {
  
  const Context = React.createContext();
  const Consumer = Context.Consumer;
  const Provider = createProvider(Context, store, actions)
  const connect = (Component) => {
    return mapContextToProps(Context, Component)
  }

  return {
    Context,
    Consumer,
    Provider,
    connect
  }
}
