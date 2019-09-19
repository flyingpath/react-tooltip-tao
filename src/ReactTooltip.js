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
    }

    componentDidMount() {
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

        this.ref.current.parentElement.onmouseout = ()=>{
            this.setState({
                show: false
            })
        }
        this.ref.current.parentElement.ontouchend = ()=>{
            this.setState({
                show: false
            })
        }

        this.first = false
    }

    componentDidUpdate(){
        const position = this.ref.current.getBoundingClientRect()
        const bodyBoundary = document.querySelector('body').getBoundingClientRect()

        const positionLeft   = position.left
        const positionTop    = position.top
        const positionRight  = bodyBoundary.width - positionLeft
        const positionBottom = bodyBoundary.height - positionTop
        const width          = position.width
        const height         = position.height

        this.ref.current.className += (' ' + styles['tooltip-bottom'])

        if ( positionTop <= 1 ){
            this.ref.current.className += (' ' + styles['tooltip-bottom'])
        }
    }

    popOut = () => {
        
        // // 過上

        // // 過右
        // // 過左

        // console.log(position)

        // this.setState({
        //     show: true
        // })
    }

    render() {

        let className = this.props.className?(' ' + this.props.className): ''

        if (!this.first){
            if (this.state.show){
                className += ' ' + styles['show']
            } else {
                className += ' ' + styles['hide']
            }
        }

        return (
            <div 
                className={ styles['tooltip'] + className } ref ={this.ref} 
            >
                1234
            </div>
        )
    }
}

ReactTooltip.defaultProps = {
    className: null,
    contentClassName: null
}

export default ReactTooltip