import React from "react";

class SearchFunction extends React.Component {
  render() {
    return (
      <div className="field is-horiziontal">
        <div className="field-label is-normal">
          <label className="label">{this.props.label}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                name={this.props.name}
                onChange={this.props.handleChange}
                placeholder={this.props.placeholder}
                value={this.props.value}
                className="input"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFunction;
