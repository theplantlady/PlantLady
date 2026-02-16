import React from 'react'
import AboutOne from '@/components/section/about/aboutOne'
import Gallery from '@/components/section/gallery'
import BannerOne from '@/components/section/heroes/bannerOne'
import ServicesSlider from '@/components/section/servicesSlider'
import VideoPortfolio from '@/components/section/videoPortfolio'
import ProjectsSlider from '@/components/section/projectsSlider'
import Testimonial from '@/components/section/testimonial'
import ShopSlider from '@/components/section/shopSlider'
// import BlogSlider from '@/components/section/blogSlider'
import Feedback from '@/components/section/feedback'
import Counter from '@/components/ui/counter'
import SectionTitle from '@/components/ui/sectionTitle'
import TeamCardOne from '@/components/ui/cards/teamCardOne'

import { productData } from '@/lib/fackData/productData'
// import { blogData } from '@/lib/fackData/blogData'
import { teamData } from '@/lib/fackData/teamData'
import { cardSlideAnimation } from '@/lib/utils'
import { bannerOneData } from '@/lib/fackData/bannerOneData'
import HeaderOne from '@/components/header/headerOne'
import Footer from '@/components/footer'


const Home = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BannerOne data={bannerOneData} />
        <AboutOne />

        <Counter />
        <Gallery />
        <ServicesSlider />
        {/* --------- start team section */}
        <section className='pt-20'>
          <div className='container-fluid '>
            <SectionTitle
                sectionName={"Our Team"}
                sectionTitle={"Creators of Living Design"}
                sectionDesc={"Blending Vision and Nature to Shape Breathtaking Interiors"}
                button_text={"Meet the Team"}
                link={"/team"}
            />
          </div>
          <div className='container tab:pt-[340px] ts:pt-20 pt-14'>
            <div className='grid tab:grid-cols-3 ts:grid-cols-2 gap-7'>
              {
                teamData.slice(0, 3).map(({ id, img, name, position, social_link, page }) => <TeamCardOne key={id} img={img} name={name} position={position} page={page} social_link={social_link} prantCalss={"team-card"} cardVariants={cardSlideAnimation()} />)
              }
            </div>
          </div>
        </section>
        {/*--------- end team section*/}
        <VideoPortfolio />
        <ProjectsSlider />
        <Testimonial />

        <ShopSlider data={productData.slice(0, 5)} />
        {/*-------- blog slider start*/}
        {/*<section className='pt-20'>
          <div className='container-fluid '>
            <SectionTitle
              sectionName={"Blog"}
              sectionTitle={"Design Insights & Inspiration"}
              sectionDesc={"Unveil the Secrets to Transforming Spaces"}
            />
          </div>
          <div className='container tab:pt-30 ts:pt-20 pt-14'>
            <BlogSlider data={blogData.slice(0, 4)} />
          </div>
        </section>*/}
        {/*-------- blog slider end*/}
        <Feedback />
      </main>
      <Footer />
    </>
  )
}

export default Home