import React from 'react';

interface INextButton {
  onClick: () => void;
}

const NextButton = ({ onClick }: INextButton): React.ReactElement => (
  <button type="button" className="btn btn-xs" onClick={onClick}>
    »
  </button>
);

export default NextButton;
