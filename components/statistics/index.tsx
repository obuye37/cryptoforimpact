'use client'
import { useEffect, useRef, useState } from "react";
import useWindowSize from '@rooks/use-window-size'
import { DollarSign, Droplet, Grid, Home, Link2, Users } from 'react-feather'
import Image from 'next/image'

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
              <div className="content relative overflow-hidden rounded-2xl bg-transparent px-5 flex flex-col gap-3">
                  <div data-aos='zoom-in' data-aos-delay="100" data-aos-duration="100" className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 rounded-2xl overflow-hidden w-full h-[200px] max-h-[200px] px-3 py-5 bg-gray-950">
                    {/* Image/Icon */}
                      <DollarSign
                        className='animate-pulse'
                        color='#eee'
                        size={50} />
                      {/* Content */}
                      <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-950 to-indigo-500 bg-clip-text text-transparent text-4xl font-black">
                          $35,000+
                      </div>
                      <p className="text-gray-50 font-semibold text-xl text-wrap text-center">
                          Donations Received
                      </p>
                  </div>
                  <div data-aos='zoom-in' data-aos-delay="300" data-aos-duration="500" className="flex flex-col justify-center items-center gap-2 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] px-3 py-5  bg-gray-950">
                      {/* Image/Icon */}
                        <Users
                          className='animate-pulse'
                          color='#eee'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-950 to-indigo-500 bg-clip-text text-transparent text-4xl font-black">
                            50+
                        </div>
                        <p className="text-gray-50 font-semibold text-lg text-wrap text-center">
                            Families received food item donations
                        </p>
                  </div>
                  <div data-aos='zoom-in' data-aos-delay="500" data-aos-duration="500" className="flex flex-col justify-center items-center gap-2 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 rounded-2xl overflow-hiddenw-full w-full sm:w-[25%] h-[200px] max-h-[200px] px-3 py-5  bg-gray-950">
                      {/* Image/Icon */}
                        <Home
                          className='animate-pulse'
                          color='#eee'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-950 to-indigo-500 bg-clip-text text-transparent text-4xl font-black">
                            306+
                        </div>
                        <p className="text-gray-50 font-semibold text-xl text-wrap text-center">
                          students received school supplies Donations
                        </p>
                  </div>
                  <div data-aos='zoom-in' data-aos-delay="700" data-aos-duration="500" className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] px-3 py-5  bg-gray-950">
                      {/* Image/Icon */}
                        <Grid
                          className='animate-pulse'
                          color='#eee'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-950 bg-clip-text text-transparent text-4xl font-black">
                            1
                        </div>
                        <p className="text-gray-50 font-semibold text-xl text-wrap text-center">
                            School Rebuilt
                        </p>
                  </div>
                  <div data-aos='zoom-in' data-aos-delay="900" data-aos-duration="500" className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] px-3 py-5  bg-gray-950">
                      {/* Image/Icon */}
                        <Droplet
                          className='animate-pulse'
                          color='#eee'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-950 bg-clip-text text-transparent text-4xl font-black">
                            1
                        </div>
                        <p className="text-gray-50 font-semibold text-xl text-wrap text-center">
                            Borehole Donated
                        </p>
                  </div>
                  <div data-aos='zoom-in' data-aos-delay="1000" data-aos-duration="500" className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] px-3 py-5  bg-gray-950">
                      {/* Image/Icon */}
                        <Link2
                          className='animate-pulse'
                          color='#eee'
                          size={50} />
                        {/* Content */}
                        <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-950 to-indigo-500 bg-clip-text text-transparent text-4xl font-black">
                            15+
                        </div>
                        <p className="text-gray-50 font-semibold text-xl text-wrap text-center">
                            Donors/Partners
                        </p>
                  </div>
              </div>
            </div>
          </div>
            :
          <div className="relative p-10 bg-[url('/images/donatebgt.webp')] bg-cover bg-no-repeat bg-center overflow-hidden">
            <h1 className="text-4xl text-center pb-10">IMPACTS</h1>
            <div data-aos='zoom-in-right' data-aos-duration="500" className="relative h-full overflow-hidden rounded-2xl bg-transparent px-5 flex gap-3 justify-center flex-wrap">
              <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 bg-gray-950 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
                {/* Image/Icon */}
                  <DollarSign
                    className='animate-pulse'
                    color='whitesmoke'
                    size={50} />
                  {/* Content */}
                  <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl sm:text-4xl">
                      $35,000+
                  </div>
                  <p className="text-indigo-200/65 text-wrap text-center">
                      Donations Received
                  </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 bg-gray-950 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
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
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 bg-gray-950 rounded-2xl overflow-hiddenw-full w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
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
                  students received school supplies Donations
                  </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 bg-gray-950 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
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
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 bg-gray-950 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
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
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-950 shadow-md shadow-indigo-950 bg-gray-950 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
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
      }
    </>
  )
}

export default Statistics