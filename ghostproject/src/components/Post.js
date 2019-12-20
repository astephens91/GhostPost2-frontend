import React, {Component} from 'react'


export default class Post extends Component {
state = {
    id: 0
}

handleLike = event => {
    let payload = this.props.id
    fetch("http://localhost:8000/post/" + payload + "/upvote")
        .then(results => results.json())
        .then(data => {
            this.setState({like: data})
            window.location.reload()
        })
        }

handleDislike = event => {
    let payload = this.props.id
    fetch("http://localhost:8000/post/" + payload + "/downvote")
        .then(results => results.json())
        .then(data => {
            this.setState({like: data})
            window.location.reload()
        })
        }
    
        
    

render(){
    return(
        <React.Fragment>
        <div>
            <div>{this.props.content} <br />
            </div> - {this.props.post_date} <br />
            <button onClick={this.handleLike}>UP</button> ^ {this.props.net_votes} ^ <button onClick={this.handleDislike}>DOWN</button>
        </div>
        <br />
        </React.Fragment>
    )
}
}