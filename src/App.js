import React, { Component } from 'react';
import axios from 'axios';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import Zoom from 'react-reveal/Zoom';

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
      textSize:  14,
      preview: 'default'
    }
  }

  componentDidMount() {
    console.log(read_cookie('fontSize'))
    if (typeof(read_cookie('fontSize')) != 'object') {
      console.log('getting text size from cookies')
      this.setState({
        textSize: read_cookie('fontSize')
      })
    } else {
      bake_cookie('fontSize', this.state.textSize);
    }
    axios.get(this.props['data-common'])
      .then(response => {
        console.log(response)
        this.setState({
          symbols: response.data.symbols,
          images: response.data.regions.top.pull02.images.pull03, 
          languages: response.data.languages,
          footer: response.data.regions.bottom.pull02.content.pull03,
          settings: response.data.infopage,
          background: response.data.infosite.site_theme.pull02.st_background.pull03.stbg_desktop.img,
          cloud: response.data.symbols.Round_Square_Cloud_Green.img
        })
        console.log(this.state.settings)
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

  changePreviewContent = (dataText) => {
    this.setState({
      preview: dataText
    })
    document.getElementById('notification-bone').innerHTML = '<Zoom><img src="http://dog.vbrqx.com/r_img/bones/orange_dog_bone_2017.svg"/></Zoom>'
  }
  increaseFontSize = (e) => {
    this.setState({
      textSize: +this.state.textSize + 1
    })
    delete_cookie('fontSize');
    bake_cookie('fontSize', this.state.textSize);
  }

  descreaseFontSize = (e) => {
    this.setState({
      textSize: +this.state.textSize - 1
    })
    delete_cookie('fontSize');
    bake_cookie('fontSize', this.state.textSize);
  }
  
  render() {
    var previevContent = ((text, element) => {
      if (element === 'FontSize') {
        return(
          <div className="textSize-view">
            <h3>{text}</h3>
            <div>
              <div className="textSize-view--block"><i onClick={this.descreaseFontSize} className="fas fa-minus-square fa-5x"></i></div>
              <div className="textSize-view--block">Current Font Size: <br/><h1>{this.state.textSize}px</h1></div>
              <div className="textSize-view--block"><i onClick={this.increaseFontSize} className="fas fa-plus-square fa-5x"></i></div>
            </div>
          </div>
        )
      } else{
        return(
          <p>{text}</p>
        )
      }
    }
  )
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
              style={{display: this.state.showSettings ? 'block' : 'none', backgroundImage: `url(${this.props.url+this.state.background})`}}>
            {/* Text font-size: <input onChange={this.changeTextSize} type="text"/> */}
            <div className="settings-container">
              <div className="settings__content" style={{backgroundImage: `url(${this.props.url+this.state.cloud})`}}>
                    <div onClick={() => this.changePreviewContent(this.state.settings["Environment    : Dev/Live"].value)} className="settings-block_inner settings-block_inner1">
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/${this.state.settings["Environment    : Dev/Live"].img}`}/>
                      </div>
                    </div>
                    <div onClick={() => this.changePreviewContent(this.state.settings["Engine         : Html/Php/Ruby/Node"].value)} className="settings-block_inner settings-block_inner2">
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/${this.state.settings["Engine         : Html/Php/Ruby/Node"].img}`}/>
                      </div>
                    </div>
                    <div onClick={() => this.changePreviewContent(this.state.settings["Protocol       : Http/Https"].value)} className="settings-block_inner settings-block_inner3">
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/${this.state.settings["Protocol       : Http/Https"].img}`}/>
                      </div>
                    </div>
                    <div onClick={() => this.changePreviewContent(this.state.settings["Authentication :"].value)} className="settings-block_inner settings-block_inner4">
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/${this.state.settings["Authentication :"].img}`}/>
                      </div>
                    </div>
                    <div onClick={() => this.changePreviewContent(this.state.settings["SEO            : Robot | User"].value)} className="settings-block_inner settings-block_inner5">
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/${this.state.settings["SEO            : Robot | User"].img}`}/>
                      </div>
                    </div>
                    <div onClick={() => this.changePreviewContent(this.state.settings["FontSize Up"].value)} className="settings-block_inner settings-block_inner6">
                      <div className="setting-block__image-container">
                        <img onClick={this.increaseFontSize} src={`http://dog.vbrqx.com/${this.state.settings["FontSize Up"].img}`}/>
                        <img onClick={this.descreaseFontSize} src={`http://dog.vbrqx.com/${this.state.settings["FontSize Down"].img}`}/>
                      </div>
                    </div>
                    <div onClick={() => this.changePreviewContent(this.state.settings["Scrolling"].value)} className="settings-block_inner settings-block_inner7">
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/${this.state.settings["Scrolling"].img}`}/>
                      </div>
                    </div>
                    <div onClick={() => this.changePreviewContent(this.state.settings["Keyboard"].value)} className="settings-block_inner settings-block_inner8">
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/${this.state.settings["Keyboard"].img}`}/>
                      </div>
                    </div>
                    <div onClick={() => this.changePreviewContent(this.state.settings["Title"].value)} className="settings-block_inner settings-block_inner9">
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/${this.state.settings["Title"].img}`}/>
                      </div>
                    </div>
                    <div onClick={() => this.changePreviewContent(this.state.settings["Description"].value)} className="settings-block_inner settings-block_inner10">
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/${this.state.settings["Description"].img}`}/>
                      </div>
                    </div>
              </div>
              <div id="notification-bone">
                
              </div>
              <div className="preview-area">
                  {this.state.preview}
              </div>
              <div className="big-edu">
                <img src="http://dog.dbrqx.com/r_img/dogs/edu_version_03_real_dog.svg"/>
              </div>
            </div>
          </div> 
      </div>
        <TopPhotoRow url={this.props.url+'photos/'} data={this.props['data-common']}/>
        <LanguageSlider url={this.props.url} arrowRight={this.state.symbols.Flag_Arrow_Left.img} arrowLeft={this.state.symbols.Flag_Arrow_Right.img} languages={this.state.languages}/>
        <PhotoGallery url={this.props.url+'photos/'} textSize={this.state.textSize} data={this.props['data-spec']} arrowDown={this.state.symbols.Arrow_Right_Down.img} arrowUp={this.state.symbols.Arrow_Up.img}/>
        <BoneMenu url={this.props.url} orangeBone={this.state.symbols.Bones_Orange.img} whiteBone={this.state.symbols.Bones_White.img}/>
        <BottomPanel url={this.props.url} footer={this.state.footer}/>
        { /*<BottomPhotoRow data={this.props['data-common']}/>*/}
      </div>
    );
  }
}

export default App;
