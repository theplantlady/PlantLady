import Image from 'next/image'

import service_img from "@/assets/images/services/service-consult-image.png"
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import ServiceSingleSidebar from '@/components/ui/serviceSingleSidebar'
import Feedback from '@/components/section/feedback'

export const metadata = {
  title: "The Plant Lady - Consulting Services",
  description: "Expert plantscape consulting services by The Plant Lady. Premium guidance for plant selection, design, and long-term care.",
};

const ServiceSingle = () => {
  return (
      <>
        <section>
          <div className='container-fluid '>
            <SectionTitle sectionName={"Consulting"} sectionTitle={"Services"} sectionDesc={"Exclusive Expertise in Plantscape Strategy and Planning"} />
          </div>
          <div className='container tab:pt-30 ts:pt-20 pt-14'>
            <div className='grid tab:grid-cols-[58%_auto] tl:gap-[120px] gap-15 items-start'>
              <div>
                <Image src={service_img} loading='lazy' alt='consulting-service' />
                <div className='pt-12.5'>
                  <Title title_text={"Overview"} />
                  <p className='text-primary-foreground '>
                    Our consulting services at The Plant Lady are designed for those who require high-level expertise and strategic guidance in plantscape design and maintenance. While we prioritize full-service solutions, we do offer consulting for select clients seeking specialized insights and recommendations. Please note that due to the time-intensive nature of consulting, this service is premium-priced and available on a limited basis.
                  </p>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"What's Included"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Site & Design Assessment:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Comprehensive evaluation of your space to determine optimal plant selection and placement.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Custom Plantscape Plan:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Tailored recommendations on plant species, arrangements, and ongoing maintenance strategies.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Sustainability & Care Guidance:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Best practices for ensuring plant longevity, including watering schedules and light considerations.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Project Coordination:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Assistance with vendor recommendations and coordination for plant procurement and installation.</p>
                    </li>
                  </ul>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"How It Works"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Initial Inquiry:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Reach out to discuss your project needs and determine if consulting is the right fit.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Consultation Session:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>A one-time or ongoing advisory session where we provide expert recommendations.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Follow-Up & Implementation:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Guidance on executing the consulting recommendations, with optional support as needed.</p>
                    </li>
                  </ul>
                </div>
                <strong className='mt-12.5 block'>
                  Due to the highly specialized nature of our consulting services, availability is limited and pricing reflects the depth of expertise provided. If you are interested, please contact us to discuss your needs.
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
