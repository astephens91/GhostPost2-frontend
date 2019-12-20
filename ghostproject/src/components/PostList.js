import React, {Component} from 'react'
import Post from './Post'


export default class PostList extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.ghostposts.map(messages =>
                    <Post
                        id={messages.id}
                        content={messages.content}
                        net_votes={messages.net_votes}
                        post_date={messages.post_date}
                        up_votes={messages.up_votes}
                        down_vote={messages.down_vote}
                        />
                    )}
            </React.Fragment>
        )
    }
}