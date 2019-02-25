import React, { Component } from 'react';
import './BottomPhotoRow.scss';
import axios from 'axios';

import  frame from '../../imgs/small-border.png';

class BottomPhotoRow extends Component {
  state = {
    chooseImgs: []
  }

  componentDidMount() {
    axios.get(this.props.data)
      .then(response => {
        this.setState({
          images: response.data.topSlider,
          photoRowMobile: +response.data.photoRow[0].numColums,
          photoRowTabletSmall: +response.data.photoRow[1].numColums,
          photoRowTablet: +response.data.photoRow[2].numColums,
          photoRowDesktop: +response.data.photoRow[3].numColums,
          photoRowDektopBig: +response.data.photoRow[4].numColums
        })
        this.getPhotosCount();
      })
      window.addEventListener("resize", this.getPhotosCount);
  }

  chooseImgs = (e) => {
    let imgs = [];
    for ( let i = 0; i < this.state.photosCount; i++) {
      let rand = Math.floor(Math.random() * this.state.images.length);
      imgs.push('http://dog.vbrqx.com/'+this.state.images[rand].image.replace("RESOLUTION", "1024x1366").replace("RESOLUTION", "1024x1366"));
    }
    this.setState({
      choosenImgs: imgs
    })
  }

  getPhotosCount = (e) => {
    let w = window.innerWidth;
    let n = 0;
    if ( w < 600 ) { //mobile
      n = this.state.photoRowMobile;
    } else if ( w > 599 && w < 900 ) { //portrait tablet
      n = this.state.photoRowTabletSmall;
    } else if ( w > 899 && w < 1200 ) { //lanscape tablet
      n = this.state.photoRowTablet;
    } else if ( w > 1199 && w < 1800 ) { //desktop
      n = this.state.photoRowDesktop;
    } else { //big desktop
      n = this.state.photoRowDektopBig;
    }
    this.setState({
      photosCount: n
    })
    this.chooseImgs();
  }

  render() {
   if (!this.state.choosenImgs) {
      return ''
    } else {
    return (
      <div className="top-photo-row">
      { !this.state.choosenImgs ? '' : this.state.choosenImgs.map( (photo, i) => {
            return (
              <div style={{backgroundImage: `url(${frame})`}} className="top-photo-row__img-container" key={i}>
                <img className="top-photo-row__img-container__image"
                  src={photo}
                  alt="dog">
                </img>
              </div>
            )
          })
        }
      </div>
    );  
  }
}
}

export default BottomPhotoRow;