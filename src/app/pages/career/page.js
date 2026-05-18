import SectionTitle from '@/components/ui/sectionTitle'
import JobPostCard from '@/components/ui/cards/jobPostCard'
import { jobPostList } from '@/lib/fackData/jobPostList'
import ServiceCard from '@/components/ui/cards/serviceCard'
import { servicesData } from '@/lib/fackData/servicesData'
import AboutThree from '@/components/section/about/aboutThree'
import Faq from '@/components/section/faq'

export const metadata = {
  title: "Plant Lady -- Career",
  description: "Plant Lady is a next js and tailwind css website",
};
const Career = () => {
  return (
    <>
      <section>
        <div className='container-fluid '>
          <SectionTitle
            sectionName={"Career"}
            sectionTitle={"Career Opportunities"}
            sectionDesc={"Discover Your Future at Plant Lady: Where Innovation Meets Passion"}
          />
        </div>
        <div className='container mt-30'>
          <ul>
            {
              jobPostList.map(({ id, date_line, job_name, level, link, location, salary, time }) =>
                <JobPostCard key={id} id={id} date_line={date_line} job_name={job_name} level={level} location={location} link={link} salary={salary} time={time} />)
            }
          </ul>
        </div>
      </section>
      {/* -------- compnay feature start------- */}
      <section className='pt-20'>
        <div className='container-fluid '>
          <SectionTitle
            sectionName={"Why"}
            sectionTitle={"Why Join Plant Lady"}
            sectionDesc={"Discover Your Future at Plant Lady: Where Innovation Meets Passion"}
          />
          <div className='tab:pt-30 ts:pt-20 pt-14  '>
            <div className='grid tl:grid-cols-4 tab:grid-cols-2 ts:grid-cols-2 gap-x-[32px] gap-y-10'>
              {
                servicesData.map(({ id, link, service_desc, service_name }) => <ServiceCard key={id} id={id} service_desc={service_desc} service_name={service_name} link={link} />)
              }
            </div>
          </div>
        </div>
      </section>
      {/* -------- compnay feature end */}
      <AboutThree/>
      <Faq className={"pb-20"}/>
    </>
  )
}

export default Career
