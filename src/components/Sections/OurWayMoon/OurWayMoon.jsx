import cloud from '@/assets/meme-Ge4nerator/Group 1171275247.png';
import grass from '@/assets/meme-Ge4nerator/Group.png';
import shape from '@/assets/ourWayToTheMoon/Group 1171275272.png';
import vector1 from '@/assets/ourWayToTheMoon/Vector.png';
import vector2 from '@/assets/ourWayToTheMoon/Group.png';
import Container from '../Container/Container';

const OurWayMoon = () => {
  return (
    <div className='md:mt-[80px] mb-[109px] relative' id='roadmap'>
      {/* Vector shape */}
      <div className='hidden lg:block'>
        <img src={vector1} alt="Image" className='lg:w-[150px] xl:w-[150px] 2xl:w-auto absolute left-0 lg:top-[420px] xl:top-[610px] 2xl:top-[730px]' />
        <img src={vector2} alt="Image" className='lg:w-[130px] xl:w-[150px] 2xl:w-auto absolute right-0 top-[700px] lg:top-[590px] xl:top-[880px] opacity-10' />
      </div>

      <Container>
        {/* Moon heading */}
        <div className='flex justify-center mb-5 md:mb-10 lg:mb-0'>
          <div className='flex'>
            <img src={cloud} alt="Image" className='w-[70px] md:w-[170px] lg:w-[200px] xl:w-auto h-[95px] md:h-auto' />
            <h1 className='text-white text-[30px] md:text-[45px] lg:text-[60px] xl:text-[80px] text-center lg:leading-[88px] lg:tracking-[2.4px] mt-3 md:mt-5 lg:mt-5 xl:mt-10 ml-[-55px] md:ml-[-105px] lg:ml-[-140px] xl:ml-[-145px]' data-aos="fade-up"
              data-aos-duration="800">our way to the<span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]' data-aos="fade-up"
                data-aos-duration="800"> moon</span></h1>
          </div>
          <img src={grass} alt="Image" className='h-fit ml-4 md:ml-10 w-[35px] md:w-[45px] lg:w-[80px] xl:w-auto' />
        </div>

        {/* Moon section contents */}
        <div className='md:relative grid grid-cols-2 md:grid-cols-none gap-x-8 md:gap-x-0'>
          {/* PHASE ONE */}
          <div className='md:absolute top-10 md:top-[-40px] lg:top-[-20px] xl:top-10 right-[160px] md:right-[130px] lg:right-[180px] xl:right-[270px] 2xl:right-[420px]'>
            <h3 className='text-white text-[26px] md:text-[28px] lg:text-[30px] xl:text-[34px] lg:leading-[47.6px] tracking-[1.02px] mb-[10px] xl:mb-[15px]' data-aos="fade-up"
              data-aos-duration="800">PHASE 1</h3>

            <div className='text-[#B6D4D4] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] lg:leading-[25.6px] lg:tracking-[0.64px] space-y-[5px] lg:space-y-[5px] xl:space-y-[10px] 2xl:space-y-[15px]'>
              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1000">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full mr-[10px]' />
                <p>PancakeSwap Listing</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1200">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full mr-[10px]' />
                <p>CoinMarketCap Listing</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1400">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full mr-[10px]' />
                <p>Trending in BSC</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1600">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-full mr-[10px]' />
                <p>Coincecko isung</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1800">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-full mr-[10px]' />
                <p>Coincecko isung</p>
              </div>
            </div>
          </div>

          {/* PHASE TWO */}
          <div className='md:absolute top-[300px] md:top-[210px] lg:top-[300px] xl:top-[410px] 2xl:top-[545px] md:left-[15px] lg:left-[35px] xl:left-[120px] 2xl:left-[200px]'>
            <h3 className='text-white text-[26px] md:text-[28px] lg:text-[30px] xl:text-[34px] lg:leading-[47.6px] tracking-[1.02px] mb-[10px] xl:mb-[15px]' data-aos="fade-up"
              data-aos-duration="800">PHASE 2</h3>

            <div className='text-[#B6D4D4] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] lg:leading-[25.6px] lg:tracking-[0.64px] space-y-[10px] lg:space-y-[5px] xl:space-y-[10px] 2xl:space-y-[15px]'>
              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1000">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full mr-[10px]' />
                <p>Extreme Marketing Push</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1200">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full mr-[10px]' />
                <p>Donations (Ongoing)</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1400">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full mr-[10px]' />
                <p>Tiers 2 CEX Listing</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1600">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-full mr-[10px]' />
                <p>5.000 Holders</p>
              </div>
            </div>
          </div>


          {/* PHASE THREE */}
          <div className='md:absolute md:bottom-[10px] lg:bottom-[50px] xl:bottom-[65px] 2xl:bottom-32 md:right-[-20px] lg:right-[0px] xl:right-[35px] 2xl:right-[105px] mt-8 md:mt-0'>
            <h3 className='text-white text-[26px] md:text-[28px] lg:text-[30px] xl:text-[34px] lg:leading-[47.6px] tracking-[1.02px] mb-[10px] xl:mb-[15px]' data-aos="fade-up"
              data-aos-duration="800">PHASE 3</h3>

            <div className='text-[#B6D4D4] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] lg:leading-[25.6px] lg:tracking-[0.64px] space-y-[10px] lg:space-y-[5px] xl:space-y-[15px]'>
              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1000">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full mr-[10px]' />
                <p>Charities</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1200">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full mr-[10px]' />
                <p>Influencer Awareness</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1400">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full mr-[10px]' />
                <p>Update Marketing</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1600">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-full mr-[10px]' />
                <p>50,000 Holders</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="1800">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-full mr-[10px]' />
                <p>Staking Pool Expansion</p>
              </div>

              <div className='flex items-center' data-aos="fade-up"
                data-aos-duration="2000">
                <div className='w-2 lg:w-3 h-2 lg:h-3 bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-full mr-[10px]' />
                <p>Introducing Mars Map</p>
              </div>
            </div>
          </div>

          {/* Section Image */}
          <img src={shape} alt="Image" className='hidden md:block' />
        </div>
      </Container>
    </div>
  );
};

export default OurWayMoon;
