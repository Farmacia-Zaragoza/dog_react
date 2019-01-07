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
  render() {
    return (
      <div className="App">
        <SettingsBlock />
        <TopPhotoRow />
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
