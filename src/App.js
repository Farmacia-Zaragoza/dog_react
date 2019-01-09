import React, { Component } from 'react';

import TopPhotoRow from './components/topPhotoRow/TopPhotoRow';
import LanguageSlider from './components/languageSlider/LanguageSlider';
import PhotoGallery from './components/photoGallery/PhotoGallery';
import BoneMenu from "./components/boneMenu/BoneMenu";
import BottomPanel from './components/bottomPanel/BottomPanel';
import BottomPhotoRow from './components/bottomPhotoRow/BottomPhotoRow';
import SettingsBlock from './components/settingsWizard/SettingsBlock';

import './app.scss'

class App extends Component {
  state = {
    photosCount: 0
  }

  componentDidMount() {
   this.getPhotosCount();
   window.addEventListener("resize", this.getPhotosCount);
  }

  getPhotosCount = (e) => {
    let w = window.innerWidth;
    let n = 0;
    if ( w < 600 ) { //mobile
      n = 3;
    } else if ( w > 599 && w < 900 ) { //portrait tablet
      n = 4;
    } else if ( w > 899 && w < 1200 ) { //lanscape tablet
      n = 5;
    } else if ( w > 1199 && w < 1800 ) { //desktop
      n = 7;
    } else { //big desktop
      n = 8;
    }
    this.setState({
      photosCount: n
    })
  }

  render() {
    return (
      <div className="App">
        <SettingsBlock />
        <TopPhotoRow photosCount={this.state.photosCount} />
        <LanguageSlider />
        <PhotoGallery />
        <BoneMenu />
        <BottomPanel />
        <BottomPhotoRow />
      </div>
    );
  }
}

export default App;
