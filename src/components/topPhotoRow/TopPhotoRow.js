import React, { Component } from 'react';
import './TopPhotoRow.scss';

class topPhotoRow extends Component {
  state = {
    photos: [
      "http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
      "http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
      "http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
      "http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
      "http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
      "http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
      "http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
      "http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png"
    ]
  }
  render() {
    return (
      <div className="top-photo-row">
      {
        this.state.photos.slice(0, this.props.photosCount).map( (photo, i) => {
          return (
            <div className="top-photo-row__img-container" key={i}>
              <img className="top-photo-row__img-container__image"
                src={photo}
                alt="dog"></img>
            </div>
          )
        })
      }
      </div>
    );
  }
}

export default topPhotoRow;