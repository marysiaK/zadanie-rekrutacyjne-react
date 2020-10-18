import React, { Component } from 'react';
import ContentFrame from '../components/ContentFrame';

class Home extends Component {
    render() {
        return (
            <ContentFrame>
                <div className="row">
                    <div className="col-12">
                        <div>
                            <hr />
                            <h1 className="text-center p -5">WELCOME TO REACTJS SPA!</h1>
                            <hr />
                        </div>
                    </div>
                </div>
            </ContentFrame>
        );
    }
}

export default Home;