import React, { Component } from 'react';
import './LanguageSlider.scss';

class LanguageSlider extends Component {
    state = {
        left: 0
    }
    componentDidMount() {
        console.log(this.props)
    }
    sliderRight = (e) => {
        if (this.state.left > -800) {
            this.setState({
                left: this.state.left-100
            })
        }
    }
    sliderLeft = (e) => {
        if (this.state.left < 0) {
            this.setState({
                left: this.state.left+100
            })
        }
    }
    render() {
        return (
            <div className="language-slider">
                <div className="slider-controls left" onClick={this.sliderLeft} style={{backgroundImage: `url(${this.props.arrowRight.replace('photos', 'r_img')})`}}>
                </div>
                <div className="row-container">
                    <div className="slider-container" style={{left: this.state.left+'px'}}>
                        {this.props.languages.map( item => {
                            return (
                                <div className="language-container">
                                    <img src={item.flag} alt={item.name}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="slider-controls right" onClick={this.sliderRight} style={{backgroundImage: `url(${this.props.arrowLeft.replace('photos', 'r_img')})`}}>
                </div>
            </div>
        );
    }
}

export default LanguageSlider;