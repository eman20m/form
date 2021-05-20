import Component from 'react'

export const Button=(props)=> {
      return (
        <div
          onClick={props.onClick}
          className="Button"
          data-size={props.size}
          data-value={props.value}
        >
          {props.label}
        </div>
      )
    
}