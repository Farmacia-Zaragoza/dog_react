import React, { Component } from 'react';
import './SettingsBlock.scss';

class SettingsBlock extends Component {
  state = {
    showSettings: false
  }
  toggleSettings = (e) => {
    this.setState({
      showSettings: !this.state.showSettings
    })
  }
  render() {
    return (
      <div className="settings-block">
        <div className="settings-block__trigger"
            onClick={this.toggleSettings}>
              {this.state.showSettings ? 'Exit' : 'Settings'}
        </div>
        <div className="settings-block__content"
             style={{display: this.state.showSettings ? 'block' : 'none'}}>
          Settings Content
        </div>
      </div>
    );
  }
}

export default SettingsBlock;