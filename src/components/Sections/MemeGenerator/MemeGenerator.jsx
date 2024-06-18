import cloud from '@/assets/meme-Ge4nerator/Group 1171275247.png';
import dogSm from '@/assets/meme-Ge4nerator/Rectangle 22433.png';
import dogLg from '@/assets/meme-Ge4nerator/Rectangle 22438.png';
import grass from '@/assets/meme-Ge4nerator/Group.png';
import Container from '../Container/Container';

const MemeGenerator = () => {
  return (
    <div className='-mt-[2px] py-[80px]'>
      <Container>
        <div>
          {/* Meme heading */}
          <div className='flex justify-center mb-5 md:mb-0'>
            <div className='flex'>
              <img src={cloud} alt="Image" className='w-[70px] md:w-[170px] lg:w-[200px] xl:w-auto h-[95px] md:h-auto' />
              <h1 data-aos="fade-up"
                data-aos-duration="800" className='text-white text-[30px] md:text-[45px] lg:text-[60px] xl:text-[80px] text-center lg:leading-[88px] lg:tracking-[2.4px] mt-3 md:mt-5 lg:mt-5 xl:mt-10 ml-[-50px] md:ml-[-105px] lg:ml-[-140px] xl:ml-[-185px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>meme </span> generator</h1>
            </div>
            <img src={grass} alt="Image" className='h-fit ml-4 md:ml-10 w-[45px] lg:w-[80px] xl:w-auto' />
          </div>

          {/* Meme generator gallery */}
          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-14 gap-y-5 md:gap-y-0'>
            {/* Section One */}
            <div className='space-y-5 lg:space-y-8 xl:space-y-10 2xl:space-y-14'>
              <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="700">
                <div className='bg-[#18534f] rounded-[30px]'>
                  <img src={dogSm} alt="Image" className='w-[85%] md:w-auto mx-auto md:mx-0' />
                </div>
              </div>

              <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1100">
                <div className='bg-[#18534f] rounded-[30px]'>
                  <img src={dogLg} alt="Image" className='w-[85%] md:w-auto mx-auto md:mx-0' />
                </div>
              </div>
            </div>

            {/* Section Two */}
            <div className='space-y-5 lg:space-y-8 xl:space-y-10 2xl:space-y-14'>
              <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="900">
                <div className='bg-[#18534f] rounded-[30px]'>
                  <img src={dogLg} alt="Image" className='hidden md:block' />
                  <img src={dogSm} alt="Image" className='w-[85%] md:w-auto mx-auto md:mx-0 block md:hidden' />
                </div>
              </div>

              <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1300">
                <div className='bg-[#18534f] rounded-[30px]'>
                  <img src={dogSm} alt="Image" className='w-[85%] md:w-auto mx-auto md:mx-0 hidden md:block' />
                  <img src={dogLg} alt="Image" className='block md:hidden' />
                </div>
              </div>
            </div>

            {/* Section Three */}
            <div className='space-y-5 lg:space-y-8 xl:space-y-10 2xl:space-y-14'>
              <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="900">
                <div className='bg-[#18534f] rounded-[30px]'>
                  <img src={dogSm} alt="Image" className='w-[85%] md:w-auto mx-auto md:mx-0' />
                </div>
              </div>

              <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500">
                <div className='bg-[#18534f] rounded-[30px]'>
                  <img src={dogLg} alt="Image" className='w-[85%] md:w-auto mx-auto md:mx-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Grass */}
      <div className='hidden lg:block'>
        <div className='flex justify-between max-w-[1850px] mx-auto 2xl:px-24 xl:px-2 lg:px-0 md:px-10 sm:px-2 px-4 mt-[-65px] xl:mt-[-90px]'>
          <img src={grass} alt="Image" className='w-[70px] xl:w-auto' />
          <img src={grass} alt="Image" className='mr-6 w-[70px] xl:w-auto' />
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
