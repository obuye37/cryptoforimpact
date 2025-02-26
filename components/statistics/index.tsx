'use client'
import { useEffect, useRef, useState } from "react";
import useWindowSize from '@rooks/use-window-size'
import { DollarSign, Droplet, Grid, Home, Link2, Users } from 'react-feather'

const Statistics = () => {
  const {innerWidth} = useWindowSize()
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

const handleScroll = () => {
    if (!sectionRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = sectionRef.current;

    // If user scrolls to the bottom, remove fixed positioning
    if (scrollHeight - scrollTop <= clientHeight + 1) {
      setIsFixed(false);
    }
  };

      return (
        <>
          { innerWidth !== null && innerWidth <= 760 ? 
          <div className='wrapper'>
            <h1 className="text-4xl text-center pb-10">IMPACTS</h1>
            <div  ref={sectionRef}
                  className={`sticky-scroll ${isFixed ? "fixed" : ""}`}
                  onScroll={handleScroll}>
                <div data-aos='zoom-in-right' data-aos-duration="500" className="content relative overflow-hidden rounded-2xl bg-transparent px-5 mx-10">
                    <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full  my-3 h-[200px] max-h-[200px] py-5">
                      {/* Image/Icon */}
                        <DollarSign
                          className='animate-pulse'
                          color='whitesmoke'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                            $40,000+
                        </div>
                        <p className="text-indigo-200/65 text-wrap text-center">
                            Donated to Charity
                        </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                      {/* Image/Icon */}
                        <Users
                          className='animate-pulse'
                          color='whitesmoke'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl" >
                            50+
                        </div>
                        <p className="text-indigo-200/65 text-wrap text-center">
                            Families received food item donations
                        </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hiddenw-full w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                      {/* Image/Icon */}
                        <Home
                          className='animate-pulse'
                          color='whitesmoke'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                            306+
                        </div>
                        <p className="text-indigo-200/65 text-wrap text-center">
                            Donated to Charity
                        </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                      {/* Image/Icon */}
                        <Grid
                          className='animate-pulse'
                          color='whitesmoke'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                            1
                        </div>
                        <p className="text-indigo-200/65 text-wrap text-center">
                            School Rebuilt
                        </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                      {/* Image/Icon */}
                        <Droplet
                          className='animate-pulse'
                          color='whitesmoke'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                            1
                        </div>
                        <p className="text-indigo-200/65 text-wrap text-center">
                            Borehole Donated
                        </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                      {/* Image/Icon */}
                        <Link2
                          className='animate-pulse'
                          color='whitesmoke'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                            15+
                        </div>
                        <p className="text-indigo-200/65 text-wrap text-center">
                            Donors/Partners
                        </p>
                  </div>
              </div>
            </div>
          </div>
            :
          <>
          <h1 className="text-4xl text-center pb-10">IMPACTS</h1>
          <div data-aos='zoom-in-right' data-aos-duration="500" className="relative h-full overflow-hidden rounded-2xl bg-transparent px-10 flex gap-3 justify-center flex-wrap">
              <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                {/* Image/Icon */}
                  <DollarSign
                    className='animate-pulse'
                    color='whitesmoke'
                    size={50} />
                  {/* Content */}
                  <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                      $40,000+
                  </div>
                  <p className="text-indigo-200/65 text-wrap text-center">
                      Donated to Charity
                  </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                {/* Image/Icon */}
                  <Users
                    className='animate-pulse'
                    color='whitesmoke'
                    size={50} />
                  {/* Content */}
                  <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl" >
                      50+
                  </div>
                  <p className="text-indigo-200/65 text-wrap text-center">
                      Families received food item donations
                  </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hiddenw-full w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                {/* Image/Icon */}
                  <Home
                    className='animate-pulse'
                    color='whitesmoke'
                    size={50} />
                  {/* Content */}
                  <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                      306+
                  </div>
                  <p className="text-indigo-200/65 text-wrap text-center">
                      Donated to Charity
                  </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                {/* Image/Icon */}
                  <Grid
                    className='animate-pulse'
                    color='whitesmoke'
                    size={50} />
                  {/* Content */}
                  <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                      1
                  </div>
                  <p className="text-indigo-200/65 text-wrap text-center">
                      School Rebuilt
                  </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                {/* Image/Icon */}
                  <Droplet
                    className='animate-pulse'
                    color='whitesmoke'
                    size={50} />
                  {/* Content */}
                  <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                      1
                  </div>
                  <p className="text-indigo-200/65 text-wrap text-center">
                      Borehole Donated
                  </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                {/* Image/Icon */}
                  <Link2
                    className='animate-pulse'
                    color='whitesmoke'
                    size={50} />
                  {/* Content */}
                  <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                      15+
                  </div>
                  <p className="text-indigo-200/65 text-wrap text-center">
                      Donors/Partners
                  </p>
            </div>
        </div>
          </>
        }
        </>
      )
    }

export default Statistics