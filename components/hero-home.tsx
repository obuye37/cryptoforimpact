'use client'

// import VideoThumb from "@/public/images/c4ithumb.jpg";
// import ModalVideo from "@/components/modal-video";
import useWindowSize from "@rooks/use-window-size";
// import { useScreenSizeContext } from "./context/screenSizeContext";

export default function HeroHome() {
  const { innerWidth } = useWindowSize()
  
   return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative text-center py-5 md:py-30 z-10">
            <p className="pb-4 text-xs md:text-lg">Reimagining Crypto for Hope. Love. Positivity</p>
            <h1
              className=" animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 text-3xl font-black not-first:md:font-semibold text-transparent md:text-8xl"
              data-aos="fade-up"
            >
              Crypto for Impact
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-1 text-md md:text-lg text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Giving Hope | Spreading Smiles | Creating Change | Turning Digital Assets into Acts of Kindness | As A Currency for Freedom | Kindness
              </p>
              <p className="text-sm md:text-2xl py-2 text-green-200/65 font-medium"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                This is What Crypto Means to Us
              </p>
            </div>
        </div>
        <div className="flex justify-center items-center rounded-4x overflow-hidden">
          <iframe
            width={innerWidth != null ? innerWidth : 960}
            height={innerWidth != null && innerWidth <= 640 ? 200 : 480}
            src='https://www.youtube.com/embed/UQmceS9GJXI?si=xky052RG2Nj-c8ch'
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
