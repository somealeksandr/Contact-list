import React from "react";
import "./ContactItem.css";

const ContactItem = ({avatar, name, description, gender, facebook, twitter, linkedin, skype, messages}) => {
    let url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
    return(
        <div className="row">
            <div className="col-12 my-3">
                <div className="panel">
                    <div className="panel-body p-t-10 ">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem;