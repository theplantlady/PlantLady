import Image from 'next/image'

import service_img from "@/assets/images/services/service-residential-image.png"
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import ServiceSingleSidebar from '@/components/ui/serviceSingleSidebar'
import Feedback from '@/components/section/feedback'

export const metadata = {
  title: "The Plant Lady - Residential Services",
  description: "Luxury residential plantscape design, installation, and maintenance by The Plant Lady. Custom greenery solutions for homes.",
};

const ServiceSingle = () => {
  return (
      <>
        <section>
          <div className='container-fluid '>
            <SectionTitle sectionName={"Residential"} sectionTitle={"Services"} sectionDesc={"Creating Lush, Personalized Green Spaces for Homes"} />
          </div>
          <div className='container tab:pt-30 ts:pt-20 pt-14'>
            <div className='grid tab:grid-cols-[58%_auto] tl:gap-[120px] gap-15 items-start'>
              <div>
                <Image src={service_img} loading='lazy' alt='residential-plantscape-service' />
                <div className='pt-12.5'>
                  <Title title_text={"Overview"} />
                  <p className='text-primary-foreground '>
                    The Plant Lady provides comprehensive residential plantscape services, offering expert design, seamless installation, and ongoing maintenance to create beautiful and healthy indoor and outdoor green spaces. Whether enhancing your home’s ambiance or improving air quality, we tailor every project to your unique style and environment.
                  </p>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"What's Included"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Custom Design Consultation:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Personalized plant selection and arrangement tailored to your home’s style, lighting, and aesthetic preferences.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Professional Installation:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Seamless setup of planters, living walls, and other green elements by our expert team.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Seasonal Plant Refresh:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Routine updates to ensure your home’s greenery stays fresh and vibrant year-round.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Irrigation & Care Systems:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Smart watering and nutrient solutions for hassle-free plant maintenance.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Ongoing Maintenance Plans:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Regular plant care services to keep your home’s greenery thriving.</p>
                    </li>
                  </ul>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"Unique Needs for Residential Services"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Pet & Child-Friendly Options:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Safe, non-toxic plant choices for households with pets and children.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Air Purification & Wellness:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Plants strategically selected to improve indoor air quality and enhance relaxation.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Space Optimization:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Vertical gardens and compact arrangements for smaller or urban living spaces.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Luxury & Aesthetic Enhancement:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Bespoke designs that elevate the sophistication of your home’s interior and exterior.</p>
                    </li>
                  </ul>
                </div>
                <strong className='mt-12.5 block'>
                  Elevate your home with professional plantscape design, installation, and maintenance by The Plant Lady. Contact us today to bring natural beauty into your living space.
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
