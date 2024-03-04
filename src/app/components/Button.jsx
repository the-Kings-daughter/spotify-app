import { Component } from 'react'
import './Button.css'

export function Button ({ variant, children}) {
    return (
        <button data-variant={variant} className='btn'>
            {children}
        </button>
    )
}