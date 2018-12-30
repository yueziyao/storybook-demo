/**
 * Created by yueziyao on 2018/12/30.
 */
import React from 'react'

export class Button2 extends React.Component{
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <button style={{backgroundColor: '#fff', border: '1px solid #ccc'}}>{this.props.children}</button>
        )
    }
}
