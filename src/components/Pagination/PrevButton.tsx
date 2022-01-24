import React from 'react';

interface IPrevButton {
  onClick: () => void;
}

const PrevButton = ({ onClick }: IPrevButton): React.ReactElement => (
  <button type="button" className="btn btn-xs" onClick={onClick}>
    «
  </button>
);

export default PrevButton;
