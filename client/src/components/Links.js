import React, { Component } from 'react';
import './css/Links.css';

class Links extends Component {
    state = {
        linkArray: []
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
            console.log(res.msg)
            this.setState({
                linkArray: res.msg
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
                {this.state.linkArray.map(data => {
                    return (
                        <div key={data._id}>
                            <p>{data.link}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Links;