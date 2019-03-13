import React, { Component } from 'react';
import axios from 'axios';

import TopPhotoRow from './components/topPhotoRow/TopPhotoRow';
import LanguageSlider from './components/languageSlider/LanguageSlider';
import PhotoGallery from './components/photoGallery/PhotoGallery';
import BoneMenu from "./components/boneMenu/BoneMenu";
import BottomPanel from './components/bottomPanel/BottomPanel';

import './app.scss'

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      showSettings: false,
      textSize: 14
    }
 }

  componentDidMount() {
    axios.get(this.props['data-common'])
      .then(response => {
        this.setState({
          symbols: response.data.Symbols,
          images: response.data.topSlider,
          languages: response.data.languages,
          footer: response.data.footer,
          settings: response.data.infoPage
        })
      })
  }

  toggleSettings = (e) => {
    this.setState({
      showSettings: !this.state.showSettings
    })
  }
  changeTextSize = (e) => {
    this.setState({
      textSize: e.target.value
    })
  }
  
  render() {
   if (this.state.images[0] === undefined) {
      return ''
    } 
    return (
      <div className="App">
        <div className="settings-block">
          <div className="settings-block__trigger"
              onClick={this.toggleSettings}>
                {this.state.showSettings ? 'Exit' : 'Settings'}
          </div>
          <div className="settings-block__content"
              style={{display: this.state.showSettings ? 'block' : 'none'}}>
            {/* Text font-size: <input onChange={this.changeTextSize} type="text"/> */}
            <div className="settings-container">
              <div className="settings__sider--left"></div>
              <div className="settings__content">
                <div className="preview-area">
                  preview
                </div>
                {this.state.settings.map((item, i) => {
                  return (
                    <div className={`settings-block--${i}`} key={i}>{item['info-name']}</div>
                  )
                })}
              </div>
              <div className="settings__sider--right"></div>
            </div>
          </div> 
      </div>
        <TopPhotoRow url={this.props.url} data={this.props['data-common']}/>
        <LanguageSlider url={this.props.url} arrowRight={this.state.symbols[5].image} arrowLeft={this.state.symbols[6].image} languages={this.state.languages}/>
        <PhotoGallery url={this.props.url} textSize={this.state.textSize} data={this.props['data-spec']} arrowDown={this.state.symbols[1].image} arrowUp={this.state.symbols[0].image}/>
        <BoneMenu url={this.props.url} orangeBone={this.state.symbols[11].image} whiteBone={this.state.symbols[14].image}/>
        <BottomPanel url={this.props.url} footer={this.state.footer}/>
        { /*<BottomPhotoRow data={this.props['data-common']}/>*/}
      </div>
    );
  }
}

export default App;
