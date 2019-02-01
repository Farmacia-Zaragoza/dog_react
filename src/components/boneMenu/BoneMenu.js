import React, { Component } from 'react';
import './BoneMenu.scss';
import boneWhite from '../../imgs/white_dog_bone_2017.png'
import boneGold from '../../imgs/gold_dog_bone_2017.png'

class BoneMenu extends Component {
    state = {
        linkNumber: 6
    }

    componentDidMount() {
        console.log(this.props)
    }

    showGoldBone = (e) => {
        e.target.style.backgroundImage = `url(${this.props.orangeBone.replace('photos', 'r_img')})`
    }

    showWhiteBone = (e) => {
        e.target.style.backgroundImage = `url(${this.props.whiteBone.replace('photos', 'r_img')})`
    }

    render() {
        let arr = [];
        for (var i = 0; i<this.state.linkNumber; i++) {
            arr.push(this.props.whiteBone.replace('photos', 'r_img'));
        }
        return (
            <div className="bone-menu">
                { arr.map((bone, i) => {
                    return (
                        <div onMouseEnter={this.showGoldBone} onMouseLeave={this.showWhiteBone} className="bone-menu__item item" style={{backgroundImage: `url(${bone})`}}>
                            Link #{i+1}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default BoneMenu;