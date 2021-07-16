import React from "react";
import Button from "./components/Button";
import ColorSelect from "./components/ColorSelect";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  handleClick = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="App">
        <h1>Buttons</h1>
        <div className="colors-container">
          <ColorSelect handleClick={this.handleClick} color="default" />
          <ColorSelect handleClick={this.handleClick} color="primary" />
          <ColorSelect handleClick={this.handleClick} color="secondary" />
          <ColorSelect handleClick={this.handleClick} color="danger" />
        </div>
        <div className="container">
          <div className="variant-container">
            <h2>Default</h2>
            <h2>Outline</h2>
            <h2>Text</h2>
          </div>

          <div>
            <h2>Size</h2>
            <div className="btn-container">
              <div>
                <p>&lt;Button size="sm" color="{this.state.color}" /&gt;</p>
                <Button color={this.state.color} size="sm">
                  Default
                </Button>
              </div>
              <div>
                <p>
                  &lt;Button size="md" color="{this.state.color}"
                  variant="outline" /&gt;
                </p>
                <Button color={this.state.color} size="md" variant="outline">
                  Default
                </Button>
              </div>
              <div>
                <p>
                  &lt;Button size="lg" color="{this.state.color}" variant="text"
                  /&gt;
                </p>
                <Button color={this.state.color} size="lg" variant="text">
                  Default
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2>DisableShadow</h2>
            <div className="btn-container">
              <div>
                <p>&lt;Button disableShadow color="{this.state.color}" /&gt;</p>
                <Button color={this.state.color} disableShadow>
                  Default
                </Button>
              </div>
              <div>
                <p>
                  &lt;Button disableShadow color="{this.state.color}"
                  variant="outline" /&gt;
                </p>
                <Button
                  color={this.state.color}
                  disableShadow
                  variant="outline"
                >
                  Default
                </Button>
              </div>
              <div>
                <p>
                  &lt;Button disableShadow color="{this.state.color}"
                  variant="text" /&gt;
                </p>
                <Button color={this.state.color} disableShadow variant="text">
                  Default
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2>Disable</h2>
            <div className="btn-container">
              <div>
                <p>&lt;Button disable color="{this.state.color}" /&gt;</p>
                <Button color={this.state.color} disable>
                  Default
                </Button>
              </div>
              <div>
                <p>
                  &lt;Button disable color="{this.state.color}"
                  variant="outline" /&gt;
                </p>
                <Button color={this.state.color} disable variant="outline">
                  Default
                </Button>
              </div>
              <div>
                <p>&lt;Button disable color="secondary" variant="text" /&gt;</p>
                <Button color={this.state.color} disable variant="text">
                  Default
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ marginTop: 30 }}>Icon: </h2>
          <div className="btn-container">
            <div>
              <p>
                &lt;Button startIcon="local_grocery_store" color="
                {this.state.color}" size="lg" /&gt;
              </p>
              <Button
                startIcon="local_grocery_store"
                color={this.state.color}
                size="lg"
              >
                Default
              </Button>
            </div>
            <div>
              <p>
                &lt;Button endIcon="local_grocery_store" color="
                {this.state.color}" size="lg" /&gt;
              </p>
              <Button
                endIcon="local_grocery_store"
                color={this.state.color}
                size="lg"
              >
                Default
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
