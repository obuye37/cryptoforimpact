import Videos from '@/components/videos';
import Statistics from '@/components/statistics';


 export const metadata = {
    title: "Impacts - Crypto4Impact",
    description: "Re-imaging & Touching Lives with Crypto",
};

const Impacts = () => {
  return (
    <>
      <Videos />
      <hr className='my-3'/>
      <Statistics />
    </>
    
  )
}

export default Impacts