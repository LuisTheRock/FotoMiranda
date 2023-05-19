import React from 'react';

import styles, { layout } from '../../style';

interface ISectionProps {
  children: React.ReactNode;
  padding?: string;
  otherProps?: string;
}

const Section: React.FC<ISectionProps> = ({
  children,
  padding = `${styles.paddingX}`,
  otherProps,
}) => {
  return (
    <section className={`${layout.grid_cols_12} ${padding} ${otherProps}`}>
      {children}
    </section>
  );
};

export default Section;
