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
    photosCount: 0,
    images: [
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_001_0935x0700.jpg", 
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_002_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_003_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_004_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_005_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_006_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_007_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_008_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_009_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_010_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_011_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_012_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_013_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_014_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_015_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_016_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_017_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_018_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_019_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_020_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_021_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_022_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_023_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_024_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_025_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_026_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_027_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_028_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_029_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_030_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_031_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_032_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_033_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_034_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_035_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_036_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_037_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_038_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_039_0935x0700.jpg",
      "http://dog.vbrqx.com/dev/edu/0935x0700/edu_first_selection_2017_brqx_dog_040_0935x0700.jpg"
    ],
    choosenImgs: []
  }

  componentWillMount() {
    this.getPhotosCount();
  }

  componentDidMount() {
    this.getPhotosCount();
    window.addEventListener("resize", this.getPhotosCount);
  }

  chooseImgs = (e) => {
    let imgs = [];
    for ( let i = 0; i < this.state.photosCount; i++) {
      let rand = Math.floor(Math.random() * this.state.images.length);
      console.log(rand)
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
    this.chooseImgs();
  }

  render() {
    return (
      <div className="App">
        <SettingsBlock />
        <TopPhotoRow photos={this.state.choosenImgs} />
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
