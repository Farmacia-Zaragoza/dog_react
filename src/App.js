import React, { Component } from 'react';
import axios from 'axios';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

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
    console.log('mount')
    /*console.log(read_cookie('fontSize'))
    if (typeof(read_cookie('fontSize')) != 'object') {
      console.log('getting text size from cookies')
      this.setState({
        textSize: read_cookie('fontSize')
      })
    } else {
      bake_cookie('fontSize', this.state.textSize);
    }*/
    axios.get(this.props['data-common'])
      .then(response => {
        this.setState({
          symbols: response.data.symbols,
          images: response.data.topslider,
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
  /*changeTextSize = (e) => {
    this.setState({
      textSize: e.target.value
    })
  }*/

  changePreviewContent = (dataText) => {
    this.setState({
      preview: dataText
    })
  }
  increaseFontSize = (e) => {
    console.log('plus')
    this.setState({
      textSize: +this.state.textSize + 1
    })
    console.log(this.state.textSize)
    /*delete_cookie('fontSize');
    bake_cookie('fontSize', this.state.textSize);*/
  }

  descreaseFontSize = (e) => {
    console.log('minus')
    this.setState({
      textSize: +this.state.textSize - 1
    })
    console.log(this.state.textSize)
    /*delete_cookie('fontSize');
    bake_cookie('fontSize', this.state.textSize);*/
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
              style={{display: this.state.showSettings ? 'block' : 'none'}}>
            {/* Text font-size: <input onChange={this.changeTextSize} type="text"/> */}
            <div className="settings-container">
              <div className="settings__content">
                {this.state.settings.map((item, i) => {
                  return (
                    <div onMouseOver={() => this.changePreviewContent(previevContent(item.value, item.name))} className={`settings-block_inner settings-block--${i}`} key={i}>
                      <div className="setting-block__image-container">
                        <img src={`http://dog.vbrqx.com/r_img/${item.hov}`} alt={item.name} />
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="preview-area">
                  {this.state.preview}
              </div>
            </div>
          </div> 
      </div>
        <TopPhotoRow url={this.props.url+'photos/'} data={this.props['data-common']}/>
        <LanguageSlider url={this.props.url} arrowRight={this.state.symbols[5].img} arrowLeft={this.state.symbols[6].img} languages={this.state.languages}/>
        <PhotoGallery url={this.props.url+'photos/'} textSize={this.state.textSize} data={this.props['data-spec']} arrowDown={this.state.symbols[1].img} arrowUp={this.state.symbols[0].img}/>
        <BoneMenu url={this.props.url+'r_img/'} orangeBone={this.state.symbols[11].img} whiteBone={this.state.symbols[14].img}/>
        <BottomPanel url={this.props.url} footer={this.state.footer}/>
        { /*<BottomPhotoRow data={this.props['data-common']}/>*/}
      </div>
    );
  }
}

export default App;
