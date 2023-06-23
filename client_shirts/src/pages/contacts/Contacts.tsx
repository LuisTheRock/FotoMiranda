/**
 *
 * This component renders the info about the company and the location in google maps.
 * Also have a form that the user can fullfil to enter in contact with the company.
 */
const Contacts = () => (
  // <section id={'contacts'} className={'bg-white'}>
  //   <TitleSection
  //     title={'contactUsTitle'}
  //     titleHeight_Font={'text-5xl font-light font-Cormorant'}
  //     titleLayout={
  //       'md:col-start-3 md:col-end-10 col-start-1 col-end-12 md:text-left text-center'
  //     }
  //     paddingProps={`${styles.paddingX} md:pt-10 pt-14`}
  //   />
  //   <Section>
  //     <div
  //       className={`md:col-start-3 col-start-1 md:col-end-6 col-end-13 mt-6`}
  //     >
  //       <FormContact />
  //     </div>
  //     <div className={`col-start-1 md:col-start-7 ${styles.colEnd}`}>
  //       <div>
  //         <TitleSection
  //           title={'address'}
  //           paddingProps={'px-0 py-2'}
  //           titleHeight_Font={
  //             'text-4xl text-left font-light font-Cormorant md:mb-4 mb-4 mt-6'
  //           }
  //           titleLayout={`col-start-1 col-span-full`}
  //         />
  //         <Address />
  //       </div>
  //       <GoogleMaps
  //         lat={GOOGLE_MAPS_LATITUDE}
  //         lng={GOOGLE_MAPS_LONGITUDE}
  //         zoom={GOOGLE_MAPS_ZOOM}
  //       />
  //     </div>
  //   </Section>
  // </section>
  <section
    id={'contacts'}
    className={
      'box-border flex-shrink-0 w-full h-min flex flex-col justify-center items-end p-24 overflow-visible relative content-center flex-nowrap gap-10'
    }
  >
    <h1
      className={
        'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words max-w-[800px] overflow-visible relative font-normal font-serif text-5xl tracking-normal leading-tight text-end'
      }
    >
      Get In Touch
    </h1>
    <p
      className={
        'flex-shrink-0 w-[440px] h-auto whitespace-pre-wrap break-words max-w-full overflow-visible relative font-medium font-mono text-base tracking-normal leading-normal text-right'
      }
    >
      Got a question or want to share your favorite moment with FotoMiranda?
      Don’t hold back! Let your excitement fill up our inboxes, and we promise,
      we’ll respond faster than a shutter click!
    </p>
    <button
      className={
        'box-border flex-shrink-0 w-min h-10 flex flex-row justify-center items-center p-[15px] bg-[#A40E4C] overflow-visible relative content-center flex-nowrap gap-10 rounded-lg'
      }
    >
      <p
        className={
          'flex-shrink-0 w-auto h-auto whitespace-pre relative font-normal font-mono text-sm tracking-normal leading-tight text-center text-white'
        }
      >
        Contact Us
      </p>
    </button>
  </section>
);

export default Contacts;
