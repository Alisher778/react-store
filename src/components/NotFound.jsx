import React, {Component} from 'react';

class NotFound extends Component {
  render() {
    return(
        <div style={{textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <h1>Page Not Found</h1>
          <i className="fa fa-exclamation-triangle" aria-hidden="true" style={{fontSize: "36px", color: "red"}}></i>
        </div>
      )
  }
}

export default NotFound;