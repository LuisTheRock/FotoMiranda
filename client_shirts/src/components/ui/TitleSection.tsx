import { useTranslation } from 'react-i18next';

import styles, { layout } from '../../style';
import Section from './Section';

interface ITitleSection {
  title: string;
  titleHeight_Font?: string;
  marginProps?: string;
  paddingProps?: string;
  titleLayout?: string;
  upperCase?: boolean;
}

const TitleSection = ({
  title,
  titleHeight_Font = 'text-4xl',
  marginProps,
  paddingProps = `${styles.paddingX} ${styles.paddingTitleY}`,
  titleLayout = `${layout.title}`,
  upperCase = true,
}: ITitleSection) => {
  const { t } = useTranslation();

  return (
    <>
      <Section padding={paddingProps} otherProps={marginProps}>
        <div className={titleLayout}>
          <h1 className={`${titleHeight_Font} ${upperCase}`}>
            {t(`${title}`)}
          </h1>
        </div>
      </Section>
    </>
  );
};

export default TitleSection;
