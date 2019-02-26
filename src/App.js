import React, { Component } from 'react';
import axios from 'axios';

import TopPhotoRow from './components/topPhotoRow/TopPhotoRow';
import LanguageSlider from './components/languageSlider/LanguageSlider';
import PhotoGallery from './components/photoGallery/PhotoGallery';
import BoneMenu from "./components/boneMenu/BoneMenu";
import BottomPanel from './components/bottomPanel/BottomPanel';
/* import BottomPhotoRow from './components/bottomPhotoRow/BottomPhotoRow'; */
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
    axios.get(this.props['data-common'])
      .then(response => {
        this.setState({
          symbols: response.data.Symbols,
          images: response.data.topSlider,
          languages: response.data.languages,
          footer: response.data.footer
        })
      })
  }

  render() {
   if (this.state.images[0] === undefined) {
      return ''
    } 
    return (
      <div className="App">
        <SettingsBlock url={this.props.url}/>
        <TopPhotoRow url={this.props.url} data={this.props['data-common']}/>
        <LanguageSlider url={this.props.url} arrowRight={this.state.symbols[5].image} arrowLeft={this.state.symbols[6].image} languages={this.state.languages}/>
        <PhotoGallery url={this.props.url} data={this.props['data-spec']} arrowDown={this.state.symbols[1].image} arrowUp={this.state.symbols[0].image}/>
        <BoneMenu url={this.props.url} orangeBone={this.state.symbols[11].image} whiteBone={this.state.symbols[14].image}/>
        <BottomPanel url={this.props.url} footer={this.state.footer}/>
        { /*<BottomPhotoRow data={this.props['data-common']}/>*/}
      </div>
    );
  }
}

export default App;
