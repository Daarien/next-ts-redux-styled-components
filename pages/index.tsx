import React from "react";
import { connect } from "react-redux";
import Page from "components/Page";
import { startClock, addCount, serverRenderClock } from "store/clock";
import { NextContext } from "next";
import { TStore } from "store";

interface InitialProps extends NextContext {
  store: TStore;
}

interface Props {
  startClock: () => void;
  addCount: () => void;
}

class Counter extends React.Component<Props> {
  static getInitialProps({ store, isServer }: InitialProps) {
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
    return <Page title="Index Page" linkTo="/other" />;
  }
}

export default connect(
  null,
  { addCount, startClock }
)(Counter);
