import React, { Component } from 'react';
import './TopPhotoRow.scss';

class topPhotoRow extends Component {
  render() {
    return (
      <div className="top-photo-row">
      { !this.props.photos? '' : this.props.photos.map( (photo, i) => {
            return (
              <div className="top-photo-row__img-container" key={i}>
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

export default topPhotoRow;