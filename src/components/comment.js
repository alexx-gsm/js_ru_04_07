import React from 'react'

export const Comment = ({ user, text }) => (
        <div>
            <p>author: <i>{user}</i></p>
            <div>{text}</div>
        </div>
    )