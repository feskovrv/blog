import React, {Component} from 'react'
import './post-list-item.css'

export default class  PostListItem extends Component{
    render() {
        const {label, important, like, onDelete, onToggleLiked, onToggleImportant} = this.props;
        let className = 'app-list-item d-flex justify-content-between'
        if (important){
            className += ' important'
        }
        if (like){
            className += ' like'
        }

    return(
        <div className={className}>
            <span
                className="app-list-item-label"
                onClick={onToggleLiked}>
                {label}
            </span>
            <div className = "d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>

                </button>

                <button
                    type="button"
                    className="btn btn-sm"
                    onClick={onDelete}
                >

                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>

            </div>
        </div>
    )
    }

}
