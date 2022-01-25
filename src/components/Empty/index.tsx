import React from 'react';
import { MdSearchOff } from 'react-icons/md';

const Empty: React.FC = () => (
  <div
    className="container flex flex-col justify-center items-center text-neutral"
    style={{ height: 'calc(100vh - 188px)' }}
  >
    <MdSearchOff size={64} />
    <span>No asset found!</span>
  </div>
);

export default Empty;
