import React, {Component} from 'react'
import './post-list-item.css'

export default class PostListItem extends Component{
    constructor(props){
        super(props);
        this.state = {label:this.props.label}
    }
    toggleEditForm = () => {
        const id = this.props.id;
        const form = document.querySelectorAll('.edit-post-form');
        form[id].classList.toggle('d-flex');
        form[id].classList.toggle('d-none');
    }
    onLabelChange = (e) => {
        this.setState({label: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onEdit(this.state.label);
        this.toggleEditForm();
    }

    render() {
        const {important, like, onDelete, onToggleLiked, onToggleImportant} = this.props;
        let className = 'app-list-item d-flex justify-content-between'
        if (important){
            className += ' important'
        }
        if (like){
            className += ' like'
        }

    return(
        <>
            <div className={className}>
                <span
                    className="app-list-item-label"
                    onClick={onToggleLiked}>
                    {this.state.label}
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
                    <button
                        type="button"
                        className="btn btn-pencil"
                        onClick={this.toggleEditForm}
                    >
                        <i className="fa fa-pencil"></i>
                    </button>
                    <i className="fa fa-heart"></i>

                </div>
            </div>
            <form
                className="bottom-panel d-none edit-post-form"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Для редактирования"
                    className="form-control new-post-label"
                    value = {this.state.label}
                    onInput={this.onLabelChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Изменить
                </button>
            </form>
        </>
    )
    }

}
