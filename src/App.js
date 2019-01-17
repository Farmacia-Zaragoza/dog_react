import React, { Component } from 'react';
import axios from 'axios';


import TopPhotoRow from './components/topPhotoRow/TopPhotoRow';
import LanguageSlider from './components/languageSlider/LanguageSlider';
import PhotoGallery from './components/photoGallery/PhotoGallery';
import BoneMenu from "./components/boneMenu/BoneMenu";
import BottomPanel from './components/bottomPanel/BottomPanel';
import BottomPhotoRow from './components/bottomPhotoRow/BottomPhotoRow';
import SettingsBlock from './components/settingsWizard/SettingsBlock';

import './app.scss'

class App extends Component {
  state = {}

  componentDidMount() {
    axios.get(this.props.data).then(response => {
      console.log(response)
      this.setState({
        images: response.data.images,
        photoRowMobile: response.data.photoRowMobile,
        photoRowTabletSmall: response.data.photoRowTabletSmall,
        photoRowTable: response.data.photoRowTable,
        photoRowDesktop: response.data.photoRowDesktop,
        photoRowDektopBig: response.data.photoRowDektopBig
      })
      this.getPhotosCount();
    })
    window.addEventListener("resize", this.getPhotosCount);
  }

  chooseImgs = (e) => {
    let imgs = [];
    for ( let i = 0; i < this.state.photosCount; i++) {
      let rand = Math.floor(Math.random() * this.state.images.length);
      imgs.push(this.state.images[rand]);
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
      n = this.state.photoRowTable;
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
    return (
      <div className="App">
        <SettingsBlock />
        <TopPhotoRow photos={this.state.choosenImgs} />
        <LanguageSlider />
        <PhotoGallery photos={this.state.images}/>
        <BoneMenu />
        <BottomPanel />
        <BottomPhotoRow />
      </div>
    );
  }
}

export default App;
