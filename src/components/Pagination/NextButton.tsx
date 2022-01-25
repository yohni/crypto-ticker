import React from 'react';

interface INextButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const NextButton: React.FC<INextButton> = ({ onClick }: INextButton) => (
  <button type="button" className="btn btn-xs md:btn-sm" onClick={onClick}>
    »
  </button>
);

export default NextButton;
