import Carousel from './Carousel';

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
    <h1 className="text-2xl md:text-center text-left px-0 mt-2">{title}</h1>
    <Carousel images={images} altName={altName} />
  </div>
);

export default PortfolioSection;
