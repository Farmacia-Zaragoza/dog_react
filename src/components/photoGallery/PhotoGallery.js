import React, { Component } from 'react';
import './PhotoGallery.scss';

class PhotoGallery extends Component {
  state = {
    bigPhoto: '',
    photosPerRow: 8,
    row: 1
  }

  componentDidReceiveProps() {
    this.setState({
      bigPhoto: this.props.photos ? this.props.photos[0] : ''
    })
  }

  prevPage = (e) => {
    this.setState({
      row: this.state.row > 1 ? this.state.row - 1 : this.state.row
    })
  }
  nextPage = (e) => {
    this.setState({
      row: this.state.row + 1
    })
  }

  selectPhoto = (e) => {
    this.setState({
      bigPhoto: e.target.src
    })
  }

  render() {
    const photos = this.props.photos ? this.props.photos : [];
    const lastPhoto = this.state.row * this.state.photosPerRow;
    const firstPhoto = lastPhoto - this.state.photosPerRow;
    const photosToShow = photos ? photos.slice(firstPhoto, lastPhoto) : []
    const bigPhotoPre = this.props.photos ? this.props.photos[0] : '';

    return (
      <div className="photo-gallery">
        <img className="photo-gallery__big-img" src={this.state.bigPhoto || bigPhotoPre} alt="dog"/>
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