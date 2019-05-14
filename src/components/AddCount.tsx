import React, { Component } from "react";
import { connect } from "react-redux";
import { TState } from "store";
import { addCount } from "store/clock";

interface Props {
  count: number;
  addCount: () => void;
}

class AddCount extends Component<Props> {
  add = () => {
    this.props.addCount();
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          AddCount: <span>{count}</span>
        </h1>
        <button onClick={this.add}>Add To Count</button>
      </div>
    );
  }
}

const mapStateToProps = ({ clock }: TState) => ({ count: clock.count });

export default connect(
  mapStateToProps,
  { addCount }
)(AddCount);
