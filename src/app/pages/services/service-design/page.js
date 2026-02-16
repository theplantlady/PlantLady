import Image from 'next/image'

import service_img from "@/assets/images/services/service-design-image.jpeg"
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import ServiceSingleSidebar from '@/components/ui/serviceSingleSidebar'
import Feedback from '@/components/section/feedback'

export const metadata = {
  title: "The Plant Lady - Plantscape Design Services",
  description: "Transform your space with custom plantscape designs by The Plant Lady. Elevate aesthetics and air quality with our expert solutions.",
};


const ServiceSingle = () => {
  return (
    <>
      <section>
        <div className='container-fluid '>
          <SectionTitle sectionName={"Design"} sectionTitle={"Services"} sectionDesc={"Creating Vibrant Spaces Through Innovative Plantscape Design"} />
        </div>
        <div className='container tab:pt-30 ts:pt-20 pt-14'>
          <div className='grid tab:grid-cols-[58%_auto] tl:gap-[120px] gap-15 items-start'>
            <div>
              <Image src={service_img} loading='lazy'      alt='service-img' />
              <div className='pt-12.5'>
                <Title title_text={"Overview"}/>
                <p className='text-primary-foreground '>
                At The Plant Lady, we specialize in transforming interiors and exteriors with stunning plantscape
                designs. Our expert team curates bespoke greenery solutions that enhance aesthetics, improve air
                quality, and create harmonious environments tailored to your vision.
              </p>
              </div>
              <div className='pt-12.5'>
                <Title title_text={"What's Included"}/>
                <ul>
                  <li>
                    <h5 className='font-bold'>Custom Plantscape Design:</h5>
                    <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Tailored plant designs that complement your space, style, and environmental needs.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Expert Plant Selection:</h5>
                    <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Carefully chosen plants suited to lighting, humidity, and design preferences.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Installation & Setup:</h5>
                    <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Seamless placement and installation to ensure
                      optimal plant health and aesthetics.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Ongoing Maintenance Options:</h5>
                    <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Flexible maintenance plans to keep your plants
                      thriving long-term.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Sustainable & Biophilic Design:</h5>
                    <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Eco-conscious solutions that enhance well-being
                      and sustainability.</p>
                  </li>
                </ul>
              </div>
              <div className='pt-12.5'>
                <Title title_text={"How It Works"}/>
                <ul>
                  <li>
                    <h5 className='font-bold'>Consultation & Space Assessment:</h5>
                    <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>We evaluate your space, needs, and design goals to craft the perfect plantscape.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Design & Proposal:</h5>
                    <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Receive a customized plan with plant recommendations
                      and layout concepts.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Installation & Final Touches:</h5>
                    <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Our team installs your plantscape with precision
                      and care.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Post-Installation Support:</h5>
                    <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>We provide guidance on plant care and offer
                      maintenance plans to keep your space green and thriving.</p>
                  </li>
                </ul>
              </div>
              <strong className='mt-12.5 block'>
                Elevate your environment with custom plantscape design by The Plant Lady. Let us bring nature into your space with innovative, sustainable, and beautiful greenery solutions.
              </strong>
            </div>
            <ServiceSingleSidebar/>
          </div>
        </div>
      </section>
      <Feedback/>
    </>
  )
}

export default ServiceSingle