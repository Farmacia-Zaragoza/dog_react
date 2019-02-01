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

  constructor() {
    super();
    this.state = {
      images: []
    }
 }

  componentDidMount() {
    axios.get('http://dog.vbrqx.com/dog/fnode/common_jsons_generated/front_es_json_file.json')
    //axios.get('./spec.json')
      .then(response => {
        console.log(response.data.topSlider)
        this.setState({
          symbols: response.data.Symbols,
          images: response.data.topSlider,
          photoRowMobile: +response.data.photoRow[0].numColums,
          photoRowTabletSmall: +response.data.photoRow[1].numColums,
          photoRowTablet: +response.data.photoRow[2].numColums,
          photoRowDesktop: +response.data.photoRow[3].numColums,
          photoRowDektopBig: +response.data.photoRow[4].numColums
        })
        this.getPhotosCount();
      })
    window.addEventListener("resize", this.getPhotosCount);
  }

  chooseImgs = (e) => {
    let imgs = [];
    for ( let i = 0; i < this.state.photosCount; i++) {
      let rand = Math.floor(Math.random() * this.state.images.length);
      imgs.push(this.state.images[rand].image.replace("RESOLUTION", "1024x1366").replace("RESOLUTION", "1024x1366"));
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
    if (this.state.images[0] === undefined) {
      return ''
    } 
    return (
      <div className="App">
        <SettingsBlock />
        <TopPhotoRow photos={this.state.choosenImgs} />
        <LanguageSlider />
        <PhotoGallery photos={this.state.images}/>
        <BoneMenu orangeBone={this.state.symbols[11].image} whiteBone={this.state.symbols[14].image}/>
        <BottomPanel />
        <BottomPhotoRow photos={this.state.choosenImgs} />
      </div>
    );
  }
}

export default App;
