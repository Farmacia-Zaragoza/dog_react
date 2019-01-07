import React, { Component } from 'react';
import './BottomPanel.scss';

class BottomPanel extends Component {
    state = {
        showContent: false
    }
    toggleContent = (e) => {
        this.setState({
            showContent: !this.state.showContent
        })
    }
    render() {
        return (
            <div className="bottom-panel"
                 onMouseOver={this.toggleContent}
                 onMouseOut={this.toggleContent}>
                <div className="bottom-panel__content"
                     style={{display: this.state.showContent ? 'block' : 'none'}}>
                        Bottom Panel
                </div>
            </div>
        );
    }
}

export default BottomPanel;