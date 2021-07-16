import React from "react";

const colors = {
  default: "rgba(63, 63, 63, 1)",
  primary: "rgba(41, 98, 255, 1)",
  secondary: "rgba(69, 90, 100, 1)",
  danger: "rgba(211, 47, 47, 1)"
};

class ColorSelect extends React.Component {
  render() {
    return (
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 6,
          cursor: "pointer",
          backgroundColor: colors[this.props.color]
        }}
        onClick={() => {
          this.props.handleClick(this.props.color);
        }}
      ></div>
    );
  }
}

export default ColorSelect;
