import React, { Component } from 'react';
import './BoneMenu.scss';

class BoneMenu extends Component {
    state = {
        linkNumber: 6
    }

    componentDidMount() {
    }

    showGoldBone = (e) => {
        e.target.style.backgroundImage = `url(${this.props.ulr+this.props.orangeBone.replace('photos', 'r_img')})`
    }

    showWhiteBone = (e) => {
        e.target.style.backgroundImage = `url(${this.props.ulr+this.props.whiteBone.replace('photos', 'r_img')})`
    }

    render() {
        let arr = [];
        for (var i = 0; i<this.state.linkNumber; i++) {
            arr.push(this.props.url+this.props.whiteBone.replace('photos', 'r_img'));
        }
        return (
            <div className="bone-menu">
                { arr.map((bone, i) => {
                    return (
                        <div key={i} onMouseEnter={this.showGoldBone} onMouseLeave={this.showWhiteBone} className="bone-menu__item item" style={{backgroundImage: `url(${bone})`}}>
                            Link #{i+1}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default BoneMenu;