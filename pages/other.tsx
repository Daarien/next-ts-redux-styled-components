import React from "react";
import { connect } from "react-redux";
import Page from "components/Page";
import { TStore } from "store";
import { startClock, addCount, serverRenderClock } from "store/clock";

interface Props {
  store: TStore;
  startClock: () => number;
  addCount: () => void;
}

class Counter extends React.Component<Props> {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());
    return { isServer };
  }

  timer: number = 0;

  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Page title="Other Page" linkTo="/" />;
  }
}

export default connect(
  null,
  { addCount, startClock }
)(Counter);
