import React, { Component } from 'react';
import './PhotoGallery.scss';
import frame from '../../imgs/gold_square_0640_2017.png'

class PhotoGallery extends Component {
  state = {
    bigPhoto: '',
    photosPerRow: 8,
    row: 1
  }


    componentDidMount() {
      let photos = [];
      for (let i = 0; i<this.props.photos.length; i++) {
        let photo = this.props.photos[i].image.replace("RESOLUTION", "1024x1366").replace("RESOLUTION", "1024x1366");
        photos.push(photo)
      }
      this.setState({
        photos: photos
      })
    }
  /*componentDidReceiveProps() {
    this.setState({
      bigPhoto: this.props.photos ? this.props.photos[0] : ''
    })
  }*/

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

  render() {
    const photos = this.state.photos ? this.state.photos : [];
    const lastPhoto = this.state.row * this.state.photosPerRow;
    const firstPhoto = lastPhoto - this.state.photosPerRow;
    const photosToShow = photos ? photos.slice(firstPhoto, lastPhoto) : []
    const bigPhotoPre = this.state.photos ? this.state.photos[0] : '';

    return (
      <div className="photo-gallery">
        <div className="big-img__container" style={{backgroundImage: `url(${frame})`}}>
            <img className="photo-gallery__big-img" src={this.state.bigPhoto || bigPhotoPre} alt="dog"/>
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