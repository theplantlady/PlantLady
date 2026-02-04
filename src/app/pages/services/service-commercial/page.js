import Image from 'next/image'

import service_img from "@/assets/images/service-commercial-image.png"
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import ServiceSingleSidebar from '@/components/ui/serviceSingleSidebar'
import Feedback from '@/components/section/feedback'

export const metadata = {
  title: "The Plant Lady - Commercial Plantscape Services",
  description: "Professional commercial plantscape design, installation, and maintenance by The Plant Lady. Enhancing business environments with custom greenery solutions.",
};

const ServiceSingle = () => {
  return (
      <>
        <section>
          <div className='container-fluid '>
            <SectionTitle sectionName={"Commercial"} sectionTitle={"Services"} sectionDesc={"Enhancing Workspaces & Businesses with Thoughtful Greenery"} />
          </div>
          <div className='container lg:pt-30 2sm:pt-20 pt-14'>
            <div className='grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start'>
              <div>
                <Image src={service_img} loading='lazy' alt='commercial-plantscape-service' />
                <div className='pt-12.5'>
                  <Title title_text={"Overview"} />
                  <p className='text-primary-foreground '>
                    The Plant Lady specializes in creating and maintaining commercial plantscapes designed to enhance business environments. Whether for an office, hotel, retail space, or corporate headquarters, we provide tailored greenery solutions that improve aesthetics, productivity, and air quality while aligning with your brand identity.
                  </p>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"What's Included"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Custom Design & Planning:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Strategic plant selection and layout designed to complement your commercial space.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Professional Installation:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Seamless and efficient setup of greenery, ensuring minimal disruption to business operations.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Sustainable Plant Care:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Eco-friendly irrigation and maintenance solutions to ensure plant longevity.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Ongoing Maintenance Plans:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Scheduled care services to keep your plantscape looking pristine year-round.</p>
                    </li>
                  </ul>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"Unique Needs for Commercial Services"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Brand Alignment & Aesthetics:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Plantscape designs that reinforce your corporate image and create a welcoming atmosphere.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Employee Wellness & Productivity:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Strategic plant placement to enhance mood, reduce stress, and boost workplace efficiency.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Low-Maintenance & Durable Plants:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Selections optimized for commercial environments with minimal upkeep requirements.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>LEED & Sustainability Compliance:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Eco-conscious plant choices to support sustainability goals and green building certifications.</p>
                    </li>
                  </ul>
                </div>
                <strong className='mt-12.5 block'>
                  Elevate your commercial space with professional plantscape design, installation, and maintenance by The Plant Lady. Contact us today to transform your business with biophilic beauty.
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
