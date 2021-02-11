import React from 'react'
import './post-status-filter.css'

const PostStatusFilter = () => {
    return(
        <div className="btn-group">
            <button type="Button" className="btn btn-info"> Всё</button>
            <button type="Button" className="btn btn-outline-secondary"> Понравившиеся </button>
        </div>
    )
}

export default PostStatusFilter;