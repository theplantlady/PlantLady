import Image from 'next/image'

import service_img from "@/assets/images/service-install-image.png"
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import ServiceSingleSidebar from '@/components/ui/serviceSingleSidebar'
import Feedback from '@/components/section/feedback'

export const metadata = {
  title: "The Plant Lady - Installation Services",
  description: "Professional plant installation services by The Plant Lady. Seamless integration of greenery for homes and businesses.",
};

const ServiceSingle = () => {
  return (
      <>
        <section>
          <div className='container-fluid '>
            <SectionTitle sectionName={"Installation"} sectionTitle={"Services"} sectionDesc={"Bringing Your Plantscape Vision to Life with Expert Installation"} />
          </div>
          <div className='container lg:pt-30 2sm:pt-20 pt-14'>
            <div className='grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start'>
              <div>
                <Image src={service_img} loading='lazy' alt='installation-service' />
                <div className='pt-12.5'>
                  <Title title_text={"Overview"} />
                  <p className='text-primary-foreground '>
                    The Plant Lady offers professional installation services to seamlessly integrate greenery into your space. Our skilled team ensures precise placement, plant health optimization, and a stunning final presentation for both residential and commercial settings.
                  </p>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"What's Included"} />
                  <ul className=''>
                    <li>
                      <h5 className='font-bold text-plant-leaf-dark'>Site Preparation:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Assessing and preparing the environment to ensure plants thrive in their new setting.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold text-plant-leaf-dark'>Professional Plant Installation:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Precise and careful placement of plants for maximum visual and environmental impact.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold text-plant-leaf-dark'>Irrigation & Drainage Solutions:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Integration of proper watering systems to maintain plant health.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold text-plant-leaf-dark'>Final Styling & Finishing Touches:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Enhancing aesthetics with decorative planters, mulching, and arrangement optimization.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Post-Installation Care Guide:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Expert guidance on maintaining and nurturing your new plantscape.</p>
                    </li>
                  </ul>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"How It Works"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Consultation & Planning:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Understanding your needs, space, and ideal plant selections.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Installation Day:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Our team delivers and installs plants efficiently and carefully.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Quality Check & Adjustments:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Ensuring plants are properly placed and thriving before finalizing the installation.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Post-Installation Support:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Offering continued guidance and optional maintenance services to keep plants healthy.</p>
                    </li>
                  </ul>
                </div>
                <strong className='mt-12.5 block'>
                  Bring your vision to life with professional plant installation by The Plant Lady. We ensure every detail is perfect, so your space is beautifully green and thriving from day one.
                </strong>
              </div>
              <ServiceSingleSidebar />
            </div>
          </div>
        </section>
        <Feedback />
      </>
  )
}

export default ServiceSingle

