import React, { Component } from 'react';
import ContentFrame from '../components/ContentFrame';
import { isAdult } from '../utils/validation';

class UserPanel extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            surname: "",
            age: "",
            showAlert: false,
            showImg: false
        }
    }

    componentDidMount() {
        const userData = this.getUserDataFromLocalStorage()
        if (!userData) return

        this.setState({
            ...userData
        })
    }

    getUserDataFromLocalStorage() {
        const json = localStorage.getItem("userData")
        return JSON.parse(json)
    }

    handleClickAccess = () => {
        if (isAdult(this.state.age)) {
            this.setState({
                showImg: true
            })
        } else {
            this.setState({
                showAlert: true
            })
        }
    }

    render() {
        return (
            <ContentFrame>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">{this.state.name} {this.state.surname}'s Page</h2>
                        <hr />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <button onClick={this.handleClickAccess} className="btn btn-success">ACCESS</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div style={{ width: 512, height: 512, backgroundColor: "silver" }} className="m-auto">
                            {
                                this.state.showImg ?
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/person.webp"} alt="person" />
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        {
                            this.state.showAlert ?
                                <div className="alert alert-danger text-center">
                                    You by at least 18 years old !
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
            </ContentFrame>
        );
    }
}

export default UserPanel;