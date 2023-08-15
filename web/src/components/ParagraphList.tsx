import React from 'react';

interface ParagraphListProps {
  paragraphs: string[];
}

const ParagraphList: React.FC<ParagraphListProps> = ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p
          className={
            'mt-3 relative z-10 font-Montserrat font-light text-sm text-zinc-600 dark:text-zinc-400'
          }
          key={index}
        >
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default ParagraphList;
