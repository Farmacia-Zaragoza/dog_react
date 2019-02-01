import React, { Component } from 'react';
import './BottomPhotoRow.scss';

import  frame from '../../imgs/small-border.png';

class BottomPhotoRow extends Component {
  render() {
    return (
      <div className="bottom-photo-row">
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

export default BottomPhotoRow;