import { FunctionComponent, ReactElement } from 'react'
import './index.css'

interface IReactHoverFlipProps {
    front: ReactElement
    back: ReactElement
    height?: number
    width?: number
    direction?: 'horizontal' | 'vertical'
}

const ReactHoverFlip: FunctionComponent<IReactHoverFlipProps>
    = ({front, back, height, width, direction = "horizontal"}: IReactHoverFlipProps) => {
    return (
        <div className="container" style={{ height, width }}>
            <div className={`inner-container ${direction}`}>
                <div className="front">{front}</div>
                <div className={`back ${direction}`}>{back}</div>
            </div>
        </div>
    )
}

export default ReactHoverFlip