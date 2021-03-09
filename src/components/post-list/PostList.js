import React from "react";
import PostListItem from "../post-list-item";


const PostList = ({posts, onDelete, onToggleLiked, onToggleImportant, onEdit}) => {

    const elements = posts.map((item, i) => {
        const {id, ...itemProps} = item; // Отсекаем ID для отображения
        return (
            <li key = {id} className = "list-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                    onToggleLiked = {() => onToggleLiked(id)}
                    onEdit = {(text) => onEdit(id, text)}
                    id = {i}
                />
            </li>
        )
    })
    return(
        <ul className= "app-list list-group">
            {elements}
        </ul>

    )
}

export default PostList;