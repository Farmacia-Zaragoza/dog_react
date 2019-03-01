import React, { Component } from 'react';
import './PhotoGallery.scss';
import frame from '../../imgs/gold_square_0640_2017.png';
import axios from 'axios';

class PhotoGallery extends Component {
  state = {
    bigPhoto: '',
    photosPerRow: 8,
    row: 1,
    showCover: false,
    intervalId : '',
    textPosition: 0
  }

  componentDidMount() {
    axios.get(this.props.data)
    .then(response => {
      let photos = [];
      for (let i = 0; i<response.data.images.length; i++) {
        let photo = this.props.url+response.data.images[i].image.replace("RESOLUTION", "1024x1366").replace("RESOLUTION", "1024x1366");
        photos.push(photo)
      }
      this.setState({
        photos: photos
      })
    })
    
  }

  prevPage = (e) => {
    this.setState({
      row: this.state.row > 1 ? this.state.row - 1 : this.state.row
    })
  }
  nextPage = (e) => {
    this.setState({
      row: this.state.row < parseInt(this.state.photos.length / this.state.photosPerRow) ? this.state.row + 1 : this.state.row
    })
  }
  selectPhoto = (e) => {
    this.setState({
      bigPhoto: e.target.src
    })
  }
  showCover = (e) => {
    this.setState({
      showCover: true
    })
  }
  hideCover = (e) => {
    this.setState({
      showCover: false
    })
  }
  timerUp = (e) => {
    this.setState({
      textPosition: this.state.textPosition - 1
    })
  }
  timerDown = (e) => {
    this.setState({
      textPosition: this.state.textPosition + 1
    })
  }
  moveTextUp = (e) => {
    var intervalId = setInterval(this.timerUp, 10);
    this.setState({intervalId: intervalId});
  }
  moveTextDown = (e) => {
    var intervalId = setInterval(this.timerDown, 10);
    this.setState({intervalId: intervalId});
  }
  stopMovement = (e) => {
    clearInterval(this.state.intervalId);
  }
  render() {
    const photos = this.state.photos ? this.state.photos : [];
    const lastPhoto = this.state.row * this.state.photosPerRow;
    const firstPhoto = lastPhoto - this.state.photosPerRow;
    const photosToShow = photos ? photos.slice(firstPhoto, lastPhoto) : []
    const bigPhotoPre = this.state.photos ? this.state.photos[0] : '';
    const displayCover = this.state.showCover ? 'block' : 'none'

    return (
      <div className="photo-gallery">
        <div className="big-img__container" style={{backgroundImage: `url(${frame})`}}>
            <div className="big-img__cover cover" style={{display: displayCover}} onMouseLeave={this.hideCover}>
              <div className="cover-container">
              <div className="innerSettings">*</div>
                <div className="cover-text--up" onMouseOver={this.moveTextUp} onMouseLeave={this.stopMovement}>
                  <img className="arrowInner arrowUp arrowLeft"  src={this.props.arrowUp} alt="up"/>
                  <img className="arrowInner arrowUp arrowRight" src={this.props.arrowUp} alt="up"/>
                </div>
                <div className="cover-text">
                  <div className="inner-text" style={{top: this.state.textPosition+'px', fontSize: this.props.textSize+'px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </div>
                <div className="cover-text--down" onMouseOver={this.moveTextDown} onMouseLeave={this.stopMovement}>
                <img className="arrowInner arrowDown arrowLeft"  src={this.props.url+this.props.arrowUp} alt="down"/>
                  <img className="arrowInner arrowDown arrowRight" src={this.props.url+this.props.arrowUp} alt="down"/>
                </div>
              </div>
            </div>
            <img onMouseOver={this.showCover} className="photo-gallery__big-img" src={this.state.bigPhoto || bigPhotoPre} alt="dog"/>
        </div>
        <div className="photo-gallery__controls">
          <div className="photo-gallery__controls__prev" onClick={this.prevPage}> {`<`} </div>
          {!photosToShow? '' : photosToShow.map((photo, index) => {
            return (
              <img src={photo} alt="small-dog" key={index} onClick={this.selectPhoto} className="photo-gallery__controls__photo"/>
            )})}
          <div className="photo-gallery__controls__next" onClick={this.nextPage}> {`>`} </div>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;