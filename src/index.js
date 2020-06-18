import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import faker from "faker";



const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author={faker.internet.userName()}
                timeAgo="Today"
                content={faker.lorem.sentence()}
                avatarImage={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))
