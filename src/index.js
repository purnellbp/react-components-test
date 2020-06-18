import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Segment from "./Segment";
import faker from "faker";

// ### Components Practice ###
const App = () => {
    return (
        <Segment>
            <div className="ui container comments">
                <ApprovalCard>
                    <div><h4>WARNING!</h4> Are you sure you want to do this?</div>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        author={faker.internet.userName()}
                        timeAgo="Today"
                        content={faker.lorem.sentence()}
                        avatarImage={faker.image.avatar()}
                    />
                </ApprovalCard>
            </div>
        </Segment>
    );
};


ReactDOM.render(<App/>, document.querySelector('#root'))
