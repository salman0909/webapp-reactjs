import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
                <div className="container">
                  <div className="row">
                    <div className="col l6 s12">
                      <h5 className="white-text">Footer Content</h5>
                      <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                      <h5 className="white-text">Links</h5>
                      <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Docker</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Kubernetes</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Linux</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Cloud</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-copyright">
                  <div className="container">
                  © 2024 Copyright Text
                  <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                  </div>
                </div>
              </footer>
    );
  }
}
