import React from 'react';
import { Link } from 'react-router';


export default class Header extends React.Component {
  render() {
    return (
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">

            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="" onClick={this.props.handleClick.bind(this,"1")}>Images</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
        </header>
    );
  }
}
