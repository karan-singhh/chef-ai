import React from 'react'
import Markdown from 'react-markdown'
import './App.css'

export default function Recipe(props) {

    return (
        <>

            <h2> Chef Recommends: </h2>
            <Markdown>
                {props.recipe}
            </Markdown>
        </>
    )
}
