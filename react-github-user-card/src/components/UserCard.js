import React from 'react';


function UserCard(props) {
    return (
        <div class="card mb-3" >
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="..." class="card-img" alt="not avail" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">{props.user.login}</h3>
                        <p class="card-text">Location: {props.user.location || "unknown"}</p>
                        <p>Followers: 
                        {props.followers.map(follower => (
                            <div key={follower.id}>{follower.login}</div>
                        ))}
                        </p>
                        <p class="card-text"><small class="text-muted">{props.user.url}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};
    

export default UserCard;