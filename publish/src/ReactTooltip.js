import React from 'react' 

import styles from './style.module.css'

class ReactTooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }

        this.first = true
        this.ref = React.createRef()
        this.className = ''
        this.styleTriangle = {
            position: 'absolute',
            borderTop  : '5px solid #9ed6ff',
            borderLeft : '5px solid transparent',
            borderRight: '5px solid transparent',
            top : '100%',
            left: '50%'
        }
        
        this.style = {
        }
    }

    componentDidMount() {
        if (this.ref.current){
            this.ref.current.parentElement.onmouseenter = () =>{
                this.setState({
                    show: true
                })
            }
            this.ref.current.parentElement.ontouchstart = () =>{
                this.setState({
                    show: true
                })
            }
    
            this.ref.current.parentElement.onmouseleave = ()=>{
                this.setState({
                    show: false
                })
            }
            this.ref.current.parentElement.ontouchend = ()=>{
                this.setState({
                    show: false
                })
            }
    
            this.style = {}
        }
        this.setState({
            show: false
        })
    }

    setTriStyleBottom = () => {
        this.styleTriangle = Object.assign( this.styleTriangle, {
            borderTop    : '5px solid transparent',
            borderLeft   : '5px solid transparent',
            borderRight  : '5px solid transparent',
            borderBottom : '5px solid '+ this.props.borderColor ,
            top          : 'unset',
            bottom       : '100%',
            left         : '50%',
        } )
    }

    setTriStyleTop = () => {
        this.styleTriangle = Object.assign( this.styleTriangle, {
            borderTop    : '5px solid '+ this.props.borderColor ,
            borderLeft   : '5px solid transparent',
            borderRight  : '5px solid transparent',
            borderBottom : '5px solid transparent',
            top          : '100%',
            bottom       : 'unset',
            left         : '50%',
            right        : 'unset',
        } )
    }

    setTriStyleRight = () => {
        this.styleTriangle = Object.assign( this.styleTriangle, {
            borderTop    : '5px solid transparent',
            borderLeft   : '5px solid transparent',
            borderRight  : '5px solid '+ this.props.borderColor,
            borderBottom : '5px solid transparent',
            top          : 'calc(50% - 5px )',
            bottom       : 'unset',
            right        : '100%',
            left         : 'unset',
        } )
    }

    setTriStyleLeft = () => {
        this.styleTriangle = Object.assign( this.styleTriangle, {
            borderTop    : '5px solid transparent',
            borderLeft   : '5px solid '+ this.props.borderColor,
            borderRight  : '5px solid transparent',
            borderBottom : '5px solid transparent',
            top          : 'calc(50% - 5px )',
            bottom       : 'unset',
            left         : '100%',
            right        : 'unset',
        } )
    }

    componentWillUpdate(){
        if ( !this.ref.current ){
            return false
        }
        this.className = ''
        const position       = this.ref.current.getBoundingClientRect()
        // const bodyBoundary   = document.querySelector('body').getBoundingClientRect()
        const parentPosition = this.ref.current.parentElement.getBoundingClientRect()

        const width          = position.width
        const height         = position.height
        
        
        if ( this.props.position === 'top' || this.props.position === 'bottom' ){

            let newLeft = 0 - (width/2) + (parentPosition.width/2)
            let newRight = null
            
            if ( this.props.position === 'top' ) {
                if ( (parentPosition.top - height) <= 1 ){
                    this.className += (' ' + styles['tooltip-bottom'])
                    this.setTriStyleBottom()
                } else {
                    this.className += (' ' + styles['tooltip-top'])
                    this.setTriStyleTop()
                }
            } else {
                if ( (parentPosition.top + parentPosition.height + height + 10 ) <= window.innerHeight ){
                    this.className += (' ' + styles['tooltip-bottom'])
                    this.setTriStyleBottom()
                } else {
                    this.className += (' ' + styles['tooltip-top'])
                    this.setTriStyleTop()
                }
            }
    
            if ( (parentPosition.left + (parentPosition.width)/2 + (width/2) ) > window.innerWidth ) {
                newLeft = null
                newRight = 0
            } 
    
            if ( (parentPosition.left + (parentPosition.width)/2 - width/2) < 1 ) {
                newLeft  = 0
                newRight = null
            }
    
            this.style = {
                left: newLeft,
                right: newRight
            }
        } else if ( this.props.position === 'right' || this.props.position === 'left' ){
            
            let newTop =  0 - (height/2) + (parentPosition.height/2)
            let newBottom = null

            if ( this.props.position === 'right' ) {
                if ( (parentPosition.left + parentPosition.width + width + 10 ) <= window.innerWidth ){
                    this.className += (' ' + styles['tooltip-right'])
                    this.setTriStyleRight()
                } else {
                    this.className += (' ' + styles['tooltip-left'])
                    this.setTriStyleLeft()
                }
            } else {
                if ( (parentPosition.left - width -10) >0 ){
                    this.className += (' ' + styles['tooltip-left'])
                    this.setTriStyleLeft()
                } else {
                    this.className += (' ' + styles['tooltip-right'])
                    this.setTriStyleRight()
                }
            }

            
            if ( (parentPosition.top + parentPosition.height/2 + height/2 + 10) > window.innerHeight) {
                newTop = null
                newBottom = 0
            } 
    
            if ( (parentPosition.top + parentPosition.height/2 - height/2) < 10 ) {
                newTop  = 0
                newBottom = null
            }
    
            this.style = {
                top: newTop,
                bottom: newBottom
            }
        }
    }

    componentDidUpdate() {
        this.first = false
    }

    render() {
        if ( this.props.className ) {
            this.className += ' ' + this.props.className
        }

        if (!this.first){
            if (this.state.show){
                this.className += ' ' + styles['show']
            } else {
                this.className += ' ' + styles['hide']
            }
        }

        this.className = styles['tooltip'] + ' ' + this.className

        if (!this.props.children){
            return null
        }

        const triStyle = Object.assign( {}, this.styleTriangle)

        if (this.props.borderColor){
            this.style.borderColor = this.props.borderColor
        }

        return (
            <div 
                className = { this.className } ref ={this.ref} 
                style = { this.style }
            >
                <div style = { triStyle } />
                {this.props.children}
            </div>
        )
    }
}

ReactTooltip.defaultProps = {
    className : null,
    contentClassName: null,
    position  : 'right',
    borderColor: '#ff57223d'
}

export default ReactTooltip