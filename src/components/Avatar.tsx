import React from 'react';

interface IAvatar {
  src?: string;
  text?: string;
}

const Avatar: React.FC<IAvatar> = ({ src, text = '' }: IAvatar) => {
  const initial = text !== '' ? text[0] : '?';
  const colorIndex = text.length % 5 || 0;
  const colors = ['#011627', '#f71735', '#41EAD4', '#F4D06F', '#F5E5FC'];

  return (
    <div
      className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0  flex justify-center items-center font-bold text-white uppercase"
      style={{ background: `${colors[colorIndex]}` }}
    >
      {initial}
      <div
        className="absolute inset-0 w-8 h-8 object-contain"
        style={{
          backgroundImage: `url('${src}')`,
        }}
      />
    </div>
  );
};

export default Avatar;
