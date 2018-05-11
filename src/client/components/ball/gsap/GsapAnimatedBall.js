import React from 'react';
import injectSheet from 'react-jss';
import ColouredBall from '../ColouredBall';
import animation from './animation';

const styles = {
  root: {
    display: 'inline-block',
  },
};

export class RawGsapAnimatedBall extends React.Component {
  constructor(props) {
    super(props);
    this.domElement = React.createRef();
  }
  componentDidMount = () => {
    animation.start(this.domElement.current);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div ref={this.domElement} className={classes.root}>
        <ColouredBall {...rest} />
      </div>
    );
  }
}

export default injectSheet(styles)(RawGsapAnimatedBall);
