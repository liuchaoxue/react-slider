import React,{Component} from 'react';

export default class SlidersItem extends Component{
    render(){
        let style={
            width:this.props.images.length*980+'px',
            left:this.props.index*-980+'px',
            transitionDuration:this.props.speed+'s'
        };
        return (
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((item,index)=>(
                        <li className="slider" key={index}>
                            <div className="box">
                                <div>
                                    <div className="name">{item.name}</div>
                                    <span className="user">{item.user}</span>
                                </div>

                                <img src={item.img} alt=""/>

                                <div className="box-price">{item.num}元</div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}