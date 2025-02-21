'use client'

// import VideoThumb from "@/public/images/c4ithumb.jpg";
// import ModalVideo from "@/components/modal-video";
import useWindowSize from "@rooks/use-window-size";
// import { useScreenSizeContext } from "./context/screenSizeContext";

export default function HeroHome() {
  // const { screenSize} = useScreenSizeContext()
  // const { screenWidth, screenHeight } = screenSize
  const { innerHeight, innerWidth} = useWindowSize()

  const screenWidth = innerWidth !== null ?  innerWidth : 960
  const screenHeight = innerHeight !== null ? innerHeight : 480

  
   return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-0 md:py-20">
          {/* Section header */}
          <div className="text-center pb-5 md:pb-20"> 
            <p className="pb-4 text-xs md:text-lg">Reimagining Crypto for Hope. Love. Positivity</p>
            <h1
              className=" animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-[cursive] text-3xl font-medium not-first:md:font-semibold text-transparent md:text-8xl"
              data-aos="fade-up"
            >
              Crypto for Impact
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-1 text-md md:text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Giving Hope | Spreading Smiles | Creating Change | Turning Digital Assets into Acts of Kindness | As A Currency for Freedom | Kindness
              </p>
              <p className="text-sm md:text-2xl py-2 text-green-200/65 font-bold"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                This is What Crypto Means to Us
              </p> 
              {/* <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="flex justify-center items-center rounded-4x overflow-hidden">
            <iframe
            width={screenWidth}
            height={480}
            src='https://www.youtube.com/embed/UQmceS9GJXI?si=xky052RG2Nj-c8ch'
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          >
          </iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
