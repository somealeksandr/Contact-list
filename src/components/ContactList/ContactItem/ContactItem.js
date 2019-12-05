import React from "react";
import "./ContactItem.css";

class ContactItem extends React.Component {

        state = {
            name: this.props.name,
            description: this.props.description,
            avatar: this.props.avatar,
            gender: this.props.gender,
            facebook: this.props.facebook,
            twitter: this.props.twitter,
            linkedin: this.props.linkedin,
            skype: this.props.skype,
            messages: this.props.messages,
            btnStatus: false,
            star: false
        };

        RandomAva = () =>{
            const newAvatar = Math.floor(Math.random()*100);
            this.setState({
                avatar: newAvatar,
                btnStatus: !this.state.btnStatus
            })
        }

        SetBorderStyle = () =>{
            this.setState({
                borderStatus: true
            })
        }
        DelBorderStyle = () =>{
            this.setState({
                borderStatus: false
            })
        }

        SetStarYellow = () => {
            this.setState({
                star: !this.state.star
            })
        }

    render() {
        const {name,description,avatar,gender,facebook,twitter,linkedin,skype,messages} = this.state;
        let url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

        let btnStyle = "btn btn-outline-primary true col-2";

        if(this.state.btnStatus) {
            btnStyle = "btn btn-outline-danger true col-2";
        }

        let borderStyle = "panel-body p-t-10"
        if(this.state.borderStatus) {
            borderStyle = "panel-body p-t-10 borderStyle"
        }

        let star
        if(this.state.star) {
            star = "yellow"
        }

        return(
            <div className="row borderBlock">
                <div className="col-12 my-3">
                    <div className="panel">
                        <div className={borderStyle} onMouseEnter={this.SetBorderStyle} onMouseLeave={this.DelBorderStyle}>
                            <div className="media-main">
                                <a className="pull-left" href="#">
                                    <img className="thumb-lg img-circle bx-s" src={url} alt="" />
                                </a>
                                <div className="pull-right btn-group-sm">
                                    <a href="#" className="btn btn-success tooltips mr-2" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                                        <i className="fa fa-pencil"></i>
                                    </a>
                                    <a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                                        <i className="fa fa-close"></i>
                                    </a>
                                </div>
                                <div className="info">
                                    <h4>{name}</h4>
                                    <p className="text-muted">{description}</p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <hr />
                            <div className="social_panel d-flex justify-content-between">
                            
                                <ul className="social-links list-inline p-b-10">
                                    <li className="m-r-10">
                                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips"  href={facebook} target="_blank" data-original-title="Facebook"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li className="m-r-10">
                                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" target="_blank" href= {twitter}data-original-title="Twitter"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="m-r-10">
                                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" target="_blank" href= {linkedin}data-original-title="LinkedIn"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                    <li className="m-r-10">
                                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" target="_blank" href={skype}data-original-title="Skype"><i className="fa fa-skype"></i></a>
                                    </li>
                                    <li className="m-r-10">
                                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" target="_blank" href= {messages}data-original-title="Message"><i className="fa fa-envelope-o"></i></a>
                                    </li>
                                </ul>
                                <div className="d-flex star">
                                    <i className="fa fa-star" id={star} onClick={this.SetStarYellow}></i>
                                </div>
                                <button className={btnStyle} onClick={this.RandomAva}>Random</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactItem;