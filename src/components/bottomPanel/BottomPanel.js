import React, { Component } from 'react';
import './BottomPanel.scss';

class BottomPanel extends Component {
    state = {
        showContent: false,
        left: 50
    }
    componentDidMount(){

    }
    toggleContent = (e) => {
        this.setState({
            showContent: !this.state.showContent
        })
    }
    moveRight = () => {
        this.setState({
            left: this.state.left - 300
        })
    }
    moveLeft = () => {
        this.setState({
            left: this.state.left + 300
        })
    }
    render() {
        return (
            <div className="bottom-panel"
                 onMouseOver={this.toggleContent}
                 onMouseOut={this.toggleContent}>
                 <div style={{display: this.state.showContent ? 'block' : 'none'}} onClick={this.moveLeft} className="footer-arrow footer-left">{`<`}</div>
                <div className="bottom-panel__content"
                     style={{display: this.state.showContent ? 'block' : 'none'}}>
                     <div style={{left: this.state.left+'px', position: 'absolute'}}>
                        {this.props.footer.map(item => {
                            return (
                                <div className="footer-item">{item.item}</div>
                            )
                        })}
                    </div>
                </div>
                <div style={{display: this.state.showContent ? 'block' : 'none'}} onClick={this.moveRight} className="footer-arrow footer-right">{`>`}</div>
            </div>
        );
    }
}

export default BottomPanel;