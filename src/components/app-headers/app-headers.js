import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return(
        <div className= "app-header d-flex">
            <h1>Zinnatullin Farid</h1>
            <h1>{allPosts} записей, из них понравилось {liked}</h1>
        </div>
    )

}

export default AppHeader;