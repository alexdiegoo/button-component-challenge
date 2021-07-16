import React from "react";
import "./styles.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={`${this.props.size ? this.props.size : "sm"} 
        ${this.props.variant ? this.props.variant : "default"}
        ${this.props.disableShadow ? "disableShadow" : ""}
        ${this.props.disable ? "disable" : ""}
        ${this.props.color ? `c-${this.props.color}` : "c-default"}`}
      >
        {this.props.startIcon && (
          <span className="material-icons" style={{ fontSize: 13 }}>
            {this.props.startIcon}
          </span>
        )}

        {this.props.children}

        {this.props.endIcon && (
          <span className="material-icons" style={{ fontSize: 13 }}>
            {this.props.endIcon}
          </span>
        )}
      </button>
    );
  }
}

export default Button;
