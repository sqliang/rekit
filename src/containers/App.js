import React, { Component, PropTypes } from 'react';
import routeConfig from '../common/routeConfig';
import SimpleNav from '../components/SimpleNav';

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router. The default one is a two columns layout.
  You should adjust it acording to the type of your app.
*/

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <SimpleNav routes={routeConfig} />
          <p className="memo">
            Above is a simple navigation tree for you to navigate between pages,
            it's generated from the route config so it will be auto updated when 
            you add/remove a feature or page.
          </p>
        </div>
        <div className="page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
