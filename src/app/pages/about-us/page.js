import AboutTwo from '@/components/section/about/aboutTwo'
import Expertise from '@/components/section/expertise'
import Feedback from '@/components/section/feedback'
import TeamCardOne from '@/components/ui/cards/teamCardOne'
import SectionTitle from '@/components/ui/sectionTitle'
import { teamData } from '@/lib/fackData/teamData'
import { cardSlideAnimation } from '@/lib/utils'

export const metadata = {
  title: "Plant Lady -- About Us",
  description: "Plant Lady is a next js and tailwind css website",
};
const AboutUs = () => {
  return (
    <>
      <AboutTwo />
      <Expertise />
      {/* --------- start team section */}
      <section className='pt-20'>
        <div className='container-fluid '>
            <SectionTitle
                sectionName={"Team"}
                sectionTitle={"Meet the Green Team"}
                sectionDesc={"Where horticulture, creativity, and top-notch expertise flourish."}
                button_text={"All Team Members"}
                link={"/team"}
            />
        </div>
        <div className='container lg:pt-[340px] 2sm:pt-20 pt-14'>
          <div className='grid lg:grid-cols-2 2sm:grid-cols-2 gap-7'>
            {
              teamData.map(({ id, img, pageLink, name, position, social_link, page }) => <TeamCardOne key={id} img={img} name={name} position={position} page={page} social_link={social_link} pageLink={pageLink} prantCalss={"team-card"} cardVariants={cardSlideAnimation()} />)
            }
          </div>
        </div>
      </section>
      {/* --------- start team section */}
      <Feedback />
    </>
  )
}

export default AboutUs