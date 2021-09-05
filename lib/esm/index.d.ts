import { FunctionComponent, ReactElement } from 'react';
import './index.css';
interface IReactHoverFlipProps {
    front: ReactElement;
    back: ReactElement;
    height?: number;
    width?: number;
    direction?: 'horizontal' | 'vertical';
}
declare const ReactHoverFlip: FunctionComponent<IReactHoverFlipProps>;
export default ReactHoverFlip;
