import { FunctionComponent, ReactElement } from 'react'

interface IReactHoverFlipProps {
    front: ReactElement
    back: ReactElement
    height: number
    width: number
    direction?: 'horizontal' | 'vertical'
}

const ReactHoverFlip: FunctionComponent<IReactHoverFlipProps>
    = ({ front, back, height, width, direction = "horizontal" }: IReactHoverFlipProps) => {
    return (
        <>
            <div className="rhf-container" style={{ height, width }}>
                <div className={`rhf-inner-container rhf-${direction}`}>
                    <div className="rhf-front">{front}</div>
                    <div className={`rhf-back rhf-${direction}`}>{back}</div>
                </div>
            </div>
        </>
    )
}

export default ReactHoverFlip