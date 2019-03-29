import React, { Component } from 'react';
import './css/Links.css';

class Links extends Component {
    state = {
        response: 'resp'
    }

    componentDidMount = () => {
        this.fetchLinks();
    }

    fetchLinks = async () => {
        try {
            const getLinks = await fetch('/api/links', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    filter: 'hejsan links'
                })
            });
            const res = await getLinks.json();
            this.setState({
                response: res.msg
            });
        } catch(err) {
            console.log(err);
            this.setState({serverMsg: 'Something went wrong!'});
        }
    }
    
    render() {
        return(
            <div className="Links">
                <h1>LINKS</h1>
                <p>{this.state.response}</p>
            </div>
        )
    }
}

export default Links;