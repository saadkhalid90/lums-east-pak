import React, { Component } from 'react';
import styles from './css-modules/home_para.module.css';
import classNames from 'classnames';
import { AiOutlineClose } from 'react-icons/ai'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

class HomePara extends Component {
  constructor(props){
      super(props);
      this.paraRef = React.createRef();
      this.state = {currState: 0}
  }


  componentDidMount() {
    let io = new IntersectionObserver(
      (entry)=>{
        if (entry[0].intersectionRatio > 0) {
          this.props.changeLoc(this.props.index);
        }
      },
      {
        threshold : 1.0
      }
    );
    io.observe(this.paraRef.current);
  }

  render() {
    return (
      <div ref={this.paraRef} className={styles.container}>
        <p className={classNames("Libre", styles.heading)}>{this.props.heading}</p>
        <div className={classNames("Lato", styles.para)}>{this.props.para}</div>
      </div>
    )
  }
}

export default HomePara;
