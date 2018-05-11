/* globals requestAnimationFrame */
import React from 'react';
import injectSheet from 'react-jss';
import ColouredBall from '../ColouredBall';

const styles = {
  root: {
    display: 'inline-block',
  },
};

const increment = 0.066;
export class RawRafAnimatedBall extends React.Component {
  constructor(props) {
    super(props);
    this.domElement = React.createRef();
    this.stop = false;
  }
  state = {
    time: 0,
    y: 0,
  }
  componentDidMount = () => {
    this.animateFrame();
  }
  componentWillUnmount = () => {
    this.stop = true;
  }
  animateFrame = () => {
    requestAnimationFrame(this.doAnimate);
  }
  doAnimate = () => {
    this.setState({
      y: 25 + (25 * Math.sin(this.state.time)),
      time: this.state.time + increment,
    });
    if (!this.stop) this.animateFrame();
  }
  render() {
    const { classes, ...rest } = this.props;
    const { y } = this.state;
    return (
      <div ref={this.domElement} className={classes.root} style={{ transform: `translateX(${y}px)` }}>
        <ColouredBall {...rest} />
      </div>
    );
  }
}

export default injectSheet(styles)(RawRafAnimatedBall);
