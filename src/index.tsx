import { Component, FunctionComponent, ReactElement } from 'react'
import styled, { css } from 'styled-components'

const InnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

const Container = styled.div<Partial<IReactHoverFlipProps>>`
    background-color: transparent;
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    perspective: 1000px;

    &:hover ${InnerContainer} {
        transform: ${props => {
            const axis = props.direction == 'horizontal' ? 'Y' : 'X'
            return `rotate${axis}(180deg)`
        }};
    }
`

const frontBackCss = css`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

const Front = styled.div`
    ${frontBackCss}
`

const Back = styled.div<Partial<IReactHoverFlipProps>>`
    ${frontBackCss}
    transform: ${props => {
        const axis = props.direction == 'horizontal' ? 'Y' : 'X'
        return `rotate${axis}(180deg)`
    }};
`

interface IReactHoverFlipProps {
    height: number
    width: number
    direction?: 'horizontal' | 'vertical'
    front: ReactElement
    back: ReactElement
}

const ReactHoverFlip: FunctionComponent<IReactHoverFlipProps>
    = ({height, width, direction = "horizontal", front, back}: IReactHoverFlipProps) => {
    return (
        <Container height={height} width={width}>
            <InnerContainer>
                <Front>{front}</Front>
                <Back direction={direction}>{back}</Back>
            </InnerContainer>
        </Container>
    )
}

export default ReactHoverFlip