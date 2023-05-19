import styles from '../../style';
import Carousel from './Carousel';
import TitleSection from './TitleSection';

export interface IPortfolioSection {
  colStart: string;
  colEnd: string;
  title: string;
  images: string[];
  altName: string;
}

const PortfolioSection = ({
  colStart,
  colEnd,
  title,
  images,
  altName,
}: IPortfolioSection) => (
  <div className={`${colStart} ${colEnd}`}>
    <TitleSection
      title={title}
      titleHeight_Font={'text-2xl md:text-center text-left'}
      paddingProps={'px-0'}
      titleLayout={`${styles.colStart} ${styles.colEnd}`}
      marginProps="mt-2"
    />
    <Carousel images={images} altName={altName} />
  </div>
);

export default PortfolioSection;
