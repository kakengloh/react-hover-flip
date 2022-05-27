import { ReactElement } from 'react';
import './index.css';

interface ReactHoverFlipProps {
  front: ReactElement;
  back: ReactElement;
  height: number;
  width: number;
  direction?: 'horizontal' | 'vertical';
}

const ReactHoverFlip = ({
  front,
  back,
  height,
  width,
  direction = 'horizontal',
}: ReactHoverFlipProps) => {
  return (
    <>
      <div className="rhf-container" style={{ height, width }}>
        <div className={`rhf-inner-container rhf-${direction}`}>
          <div className="rhf-front">{front}</div>
          <div className={`rhf-back rhf-${direction}`}>{back}</div>
        </div>
      </div>
    </>
  );
};

export default ReactHoverFlip;
