import React, {Component} from 'react';
import SlidersItem from './SlidersItem';

export default class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {index: 0};
    }

    turn(step) {
        let index = this.state.index + step;
        if (index < 0|| index >= this.props.images.length / 3) {
            console.log('---无数据')
            return;
        }

        this.setState({index: index})
    };

    render() {
        return (
            <div className="slider-item">
                <div className="wrapper">

                    <SlidersItem
                        images={this.props.images}
                        speed={this.props.speed}
                        index={this.state.index}
                    />
                </div>

                <div className="arrows">
                    <span className="arrow arrow-left" onClick={() => this.turn(-1)}>
                        &lt;
                    </span>
                    <span className="arrow arrow-right" onClick={() => this.turn(1)}>
                        &gt;
                    </span>
                </div>
            </div>
        )
    }
};
