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
      this.state = {currState: 0, alertOpen: false, currentImage: null}
  }

  handleClose = () => {
    this.setState({
      alertOpen: false
    });
  };

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
        {
          this.props.heading && <p className={classNames("Libre", styles.heading)}>{this.props.heading}</p>
        }
        
        <div className={classNames("Lato", styles.para)} dangerouslySetInnerHTML={{ __html: this.props.para }} />
        <div className={styles.image_container}>
          {this.props.images && this.props.images.length > 0 && this.props.images.map((image, index) =>
            <div className={styles.image_container_inner}>
              <img key={index} onClick={() => this.setState({ currentImage: image, alertOpen: true })} key={index} className={styles.image} src={image}/>
            </div>
          )}
        </div>

        <Dialog
         open={this.state.alertOpen}
         onClose={() => this.handleClose()}
         aria-labelledby={this.props.heading}
        >
         <DialogContent>
           <DialogContentText>
             <div className={styles.image_modal}>
               <div className={styles.flexed_container}>
                 <p className={classNames("Lato", styles.modal_heading)}>{this.props.heading}</p>
                 <AiOutlineClose onClick={() => this.handleClose()} className={styles.close_icon}/>
               </div>
               <img className={styles.modal_image} src={this.state.currentImage}/>
             </div>
           </DialogContentText>
         </DialogContent>
       </Dialog>
      </div>
    )
  }
}

export default HomePara;
