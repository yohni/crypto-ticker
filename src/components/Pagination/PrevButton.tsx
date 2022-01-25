import React from 'react';

interface IPrevButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PrevButton: React.FC<IPrevButton> = ({ onClick }: IPrevButton) => (
  <button type="button" className="btn btn-xs md:btn-sm" onClick={onClick}>
    «
  </button>
);

export default PrevButton;
