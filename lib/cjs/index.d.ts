import { FunctionComponent, ReactElement } from 'react';
interface IReactHoverFlipProps {
    height: number;
    width: number;
    direction?: 'horizontal' | 'vertical';
    front: ReactElement;
    back: ReactElement;
}
declare const ReactHoverFlip: FunctionComponent<IReactHoverFlipProps>;
export default ReactHoverFlip;
