const styles = {
  inOutY1: 'hover:-translate-y-1 hover:scale-110 duration-300',
  buttonInOut1: 'transition ease-in-out duration-700',

  paragraph:
    'font-poppins font-normal text-dimWhite text-[18px] leading-[30px]',

  paddingX: 'px-6 md:px-12',
  paddingY: 'py-3',
  paddingTitleY: 'pt-10 pb-8',
  padding: 'sm:px-6 px-12 sm:py-6 py-6',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

  colStart: 'md:col-start-2 col-start-1',
  colEnd: 'md:col-end-12 col-end-13',
};

export const layout = {
  grid_cols_12: 'grid grid-cols-12 gap-4',
  gridStartEnd: `${styles.colStart} ${styles.colEnd}`,
  heightLayout: 'md:h-full h-screen',

  title: 'col-start-2 col-end-12 md:text-left text-center',

  buttonInOut: `transition ease-in-out ${styles.inOutY1}`,
};

export default styles;
