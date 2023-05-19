import Carousel2 from '../../components/ui/Carousel2';
import Section from '../../components/ui/Section';
import TitleSection from '../../components/ui/TitleSection';
import { layout } from '../../style';

interface IShowPortfolio {
  bg_color: string;
  title: string;
  images: string[];
  altName: string;
}

const DisplayPortSection = ({
  title,
  bg_color,
  images,
  altName,
}: IShowPortfolio) => {
  return (
    <section
      className={`${bg_color} flex min-h-screen justify-center items-center md:sticky relative top-0`}
    >
      <div
        className={
          'flex-col md:pb-5 pb-20 flex w-full items-center justify-center'
        }
      >
        <TitleSection
          titleHeight_Font={'text-5xl text-center font-normal font-Cormorant'}
          title={title}
        />
        <Section otherProps={'py-5'}>
          <div className={`${layout.gridStartEnd} shadow-xl shadow-black`}>
            <Carousel2 images={images} altName={altName} />
          </div>
        </Section>
      </div>
    </section>
  );
};

export default DisplayPortSection;
