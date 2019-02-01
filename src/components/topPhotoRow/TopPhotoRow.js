import React, { Component } from 'react';
import './TopPhotoRow.scss';
import  frame from '../../imgs/small-border.png';

class topPhotoRow extends Component {
  render() {
    return (
      <div className="top-photo-row">
      { !this.props.photos? '' : this.props.photos.map( (photo, i) => {
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

export default topPhotoRow;