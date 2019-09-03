import React from 'react';

function UserCard(props) {
    
    return (
        <div className="user">
            <h1>Github Users</h1>
            <h2>{props.user.login}</h2>
            <p>{props.user.location}</p>
            <p>{props.user.url}</p>
            {/* {this.state.users.map(user => )} */}
        </div>
    )
}

export default UserCard;