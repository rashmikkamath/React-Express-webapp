import React from 'react';
import { Link } from 'react-router';

export default class SideMenu extends React.Component {
  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    );
  }
}
