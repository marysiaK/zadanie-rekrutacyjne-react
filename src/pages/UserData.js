import React, { Component } from 'react';
import ContentFrame from '../components/ContentFrame';
import { isNumberValueValid, isTextValueValid, userDataValid } from '../utils/validation';

class UserData extends Component {
    constructor() {
        super()

        this.state = {
            userData: {
                name: "",
                surname: "",
                age: ""
            },
            formValid: true
        }
    }

    handleChangeUserData = event => {
        this.setState({
            userData: {
                ...this.state.userData,
                [event.target.name]: event.target.value
            }
        })
    }

    handleClickSave = () => {
        if (userDataValid(this.state.userData)) {
            this.saveUserDataToLocalStorage()
            this.props.history.push("/page2")
        }

        this.setState({
            formValid: userDataValid(this.state.userData)
        })
    }

    saveUserDataToLocalStorage() {
        const json = JSON.stringify(this.state.userData)
        localStorage.setItem("userData", json)
    }

    render() {
        return (
            <ContentFrame>
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-center">User Data</h2>
                        <hr />
                    </div>
                </div>
                <div className="row mt-5 text-center" style={{ height: 50 }}>
                    <div className="col-md-4">
                        <label className="font-weight-bolder">Name:</label>
                    </div>
                    <div className="col-md-4">
                        <input name="name" type="text" onChange={this.handleChangeUserData} value={this.state.userData.name} />
                    </div>
                    <div className="col-md-4">
                        {
                            isTextValueValid(this.state.userData.name) ?
                                null
                                :
                                <div className="alert alert-danger text-center" role="alert">
                                    Invalid character !
                                </div>
                        }
                    </div>
                </div>
                <div className="row mt-5 text-center" style={{ height: 50 }}>
                    <div className="col-md-4 ">
                        <label className="font-weight-bolder">Surname:</label>
                    </div>
                    <div className="col-md-4">
                        <input name="surname" type="text" onChange={this.handleChangeUserData} value={this.state.userData.surname} />
                    </div>
                    <div className="col-md-4">
                        {
                            isTextValueValid(this.state.userData.surname) ?
                                null
                                :
                                <div className="alert alert-danger text-center" role="alert">
                                    Invalid character !
                                </div>
                        }
                    </div>
                </div>
                <div className="row mt-5 text-center" style={{ height: 50 }}>
                    <div className="col-md-4">
                        <label className="font-weight-bolder">Age:</label>
                    </div>
                    <div className="col-md-4">
                        <input name="age" type="number" onChange={this.handleChangeUserData} value={this.state.userData.age} />
                    </div>
                    <div className="col-md-4">
                        {
                            isNumberValueValid(this.state.userData.age) ?
                                null
                                :
                                <div className="alert alert-danger text-center" role="alert">
                                    Invalid character !
                                </div>
                        }
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <hr />
                        <div className="text-center" style={{ fontSize: 20 }}>
                            {
                                isTextValueValid(this.state.userData.name) && isTextValueValid(this.state.userData.surname) ?
                                    <>
                                        Hello <span className="font-weight-bold"> {this.state.userData.name} {this.state.userData.surname} </span>
                                    </>
                                    :
                                    null
                            }
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="text-center">
                            <button className="btn btn-success w-25" onClick={this.handleClickSave}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="text-center">
                            {
                                !this.state.formValid ?
                                    <div className="alert alert-danger text-center" role="alert">
                                        Complete the form !
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </ContentFrame>
        );
    }

}

export default UserData