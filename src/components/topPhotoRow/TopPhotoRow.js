import React, { Component } from 'react';
import './TopPhotoRow.scss';
import  frame from '../../imgs/small-border.png';
import axios from 'axios';

class topPhotoRow extends Component {

  state = {
    chooseImgs: [],
    testLink: 'taxonomy/001'
  }

  componentDidMount() {
    axios.get(this.props.data)
      .then(response => {
        this.setState({
          images: response.data.regions.top.pull02.images.pull03,
          photoRowMobile: 2,//+response.data.photoRow[0].value,
          photoRowTabletSmall: 3,//+response.data.photoRow[1].value,
          photoRowTablet: 4,//+response.data.photoRow[2].value,
          photoRowDesktop: 6,//+response.data.photoRow[3].value,
          photoRowDektopBig: 8//+response.data.photoRow[4].value
        })
        this.getPhotosCount();
      })
      window.addEventListener("resize", this.getPhotosCount);
  }

  chooseImgs = (e) => {
    let imgs = [];
    for ( let i = 0; i < this.state.photosCount; i++) {
      let rand = Math.floor(Math.random() * this.state.images.length);
      imgs.push(this.props.url+this.state.images[rand].img.replace("RESOLUTION", "1024x1366").replace("RESOLUTION", "1024x1366"));
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

  togglePopUp = (n) => {
    var popup = document.getElementById("myPopup"+n);
    popup.classList.remove("hidden-popup");
  }

  closePopUp = (n) => {
    var popup = document.getElementById("myPopup"+n);
    popup.classList.add("hidden-popup");
  }

  render() {
   if (!this.state.choosenImgs) {
      return ''
    } else {
    return (
      <div className="top-photo-row">
      { !this.state.choosenImgs ? '' : this.state.choosenImgs.map( (photo, i) => {
            return (
              <div onMouseLeave={() => this.closePopUp(i)} onMouseOver={() => this.togglePopUp(i)} style={{backgroundImage: `url(${frame})`}} className="top-photo-row__img-container popup" key={i}>
                <a href={this.props.url+this.state.images[i]['clink']}>
                    <img className="top-photo-row__img-container__image"
                      src={photo}
                      alt="dog">
                    </img>
                    <span className="popuptext hidden-popup" id={"myPopup"+i}>{this.state.images[i].clink}</span>
                </a>
              </div>
            )
          })
        }
      </div>
    );  
  }
}
}

export default topPhotoRow;