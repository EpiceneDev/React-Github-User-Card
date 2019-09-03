import React from 'react';

function UserCard(props) {
    
    return (
        <div className="user">
            <h1>Github Users</h1>
            <h2>{props.user.login}</h2>
            <p>{props.user.location}</p>
            <p>{props.user.url}</p>
            {props.followers.map(follower => (
                <div key={follower.id}>{follower.login}</div>
            ))}
        </div>
    )
}

export default UserCard;