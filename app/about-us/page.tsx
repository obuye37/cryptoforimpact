import React from 'react'
import AboutSection from '@/components/aboutSection';
import { Testimonial } from '@/components/testimonials';
export const metadata = {
    title: "About - Crypto4Impact",
    description: "Re-imaging & Touching Lives with Crypto",
};

const About = () => {
  return (
    <div className='pxs-20'>
      <AboutSection />
      {/* <Testimonial testimonial={{
        img: undefined,
        clientImg: undefined,
        name: '',
        company: '',
        content: '',
        categories: []
      }} category={0} children={undefined} /> */}
    </div>
  )
}

export default About