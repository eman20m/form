import { Component } from "react"
import { Form } from "react-bootstrap"

export {Component} from 'react'

export class Display extends Component {
    render() {
      const string = this.props.data.join('')
      return <div className="Display"> {string} </div>
    }
}