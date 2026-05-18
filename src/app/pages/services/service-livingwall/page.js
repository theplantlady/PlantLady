import Image from 'next/image'

import service_img from "@/assets/images/services/service-living-walls-image.png"
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import ServiceSingleSidebar from '@/components/ui/serviceSingleSidebar'
import Feedback from '@/components/section/feedback'

export const metadata = {
  title: "The Plant Lady - Living Walls Services",
  description: "Custom-designed living walls by The Plant Lady Elevate your space with lush vertical gardens for homes and businesses.",
};

const ServiceSingle = () => {
  return (
      <>
        <section>
          <div className='container-fluid '>
            <SectionTitle sectionName={"Living Walls"} sectionTitle={"Services"} sectionDesc={"Transforming Spaces with Vibrant Vertical Gardens"} />
          </div>
          <div className='container tab:pt-30 ts:pt-20 pt-14'>
            <div className='grid tab:grid-cols-[58%_auto] tl:gap-[120px] gap-15 items-start'>
              <div>
                <Image src={service_img} loading='lazy' alt='living-walls-service' />
                <div className='pt-12.5'>
                  <Title title_text={"Overview"} />
                  <p className='text-primary-foreground '>
                    The Plant Lady specializes in designing and installing stunning living walls that bring nature into any space. Our custom vertical gardens enhance aesthetics, improve air quality, and promote well-being while seamlessly integrating with your interior or exterior environment.
                  </p>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"What's Included"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Custom Design & Planning:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Personalized living wall designs tailored to your space, style, and plant preferences.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Premium Plant Selection:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Carefully curated plants suited for vertical gardens, ensuring longevity and beauty.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Installation & Irrigation Systems:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Expert installation with integrated irrigation for hassle-free maintenance.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Ongoing Maintenance Plans:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Flexible maintenance services to keep your living wall lush and thriving.</p>
                    </li>
                  </ul>
                </div>
                <div className='pt-12.5'>
                  <Title title_text={"How It Works"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Consultation & Design:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>We assess your space and create a custom living wall plan.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Professional Installation:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>Our team installs the system, ensuring proper irrigation and plant arrangement.</p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Post-Installation Care:</h5>
                      <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>We provide maintenance support to keep your living wall vibrant.</p>
                    </li>
                  </ul>
                </div>
                
                <div className='pt-12.5 border-t border-gray-200 mt-12.5'>
                  <Title title_text={"Preparation & Planning"} />
                  <div className='grid md:grid-cols-2 gap-8 mt-6'>
                    <div>
                      <h5 className='font-bold mb-3 underline decoration-plant-tan underline-offset-4'>1. Measurement Guide</h5>
                      <p className='text-sm leading-relaxed'>
                        To help us provide an accurate quote, measure the <strong>Height</strong> and <strong>Width</strong> of the intended wall space. 
                        Note any obstructions like thermostats, outlets, or light switches.
                      </p>
                    </div>
                    <div>
                      <h5 className='font-bold mb-3 underline decoration-plant-tan underline-offset-4'>2. Lighting Guide</h5>
                      <ul className='text-sm space-y-2'>
                        <li><strong>Bright:</strong> Direct sun or very close to large windows.</li>
                        <li><strong>Moderate:</strong> Consistent indirect light throughout the day.</li>
                        <li><strong>Low:</strong> No direct sun, far from windows.</li>
                        <li><strong>Note:</strong> We can integrate professional grow lighting if natural light is insufficient.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className='mt-10 bg-plant-offwhite p-6 rounded-lg'>
                    <h5 className='font-bold mb-3'>3. Investment Transparency</h5>
                    <p className='text-sm mb-4'>
                      Living wall investments vary based on scale, plant density, and irrigation complexity. Typical starting ranges:
                    </p>
                    <ul className='text-sm grid sm:grid-cols-2 gap-4 italic'>
                      <li>• <strong>$5K – $10K:</strong> Small residential accent walls or moss-based designs.</li>
                      <li>• <strong>$10K – $25K:</strong> Medium-scale feature walls for offices or lobbies.</li>
                      <li>• <strong>$25K+:</strong> Large-scale custom installations with integrated automated irrigation.</li>
                    </ul>
                  </div>
                </div>

                <strong className='mt-12.5 block'>
                  Elevate your space with a stunning, eco-friendly living wall by The Plant Lady. Contact us today to bring nature indoors with style and sustainability.
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
