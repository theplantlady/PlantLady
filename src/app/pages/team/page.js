import Feedback from '@/components/section/feedback'
import TeamCardOne from '@/components/ui/cards/teamCardOne'
import SectionTitle from '@/components/ui/sectionTitle'
import { teamData } from '@/lib/fackData/teamData'

export const metadata = {
    title: "The Plant Lady -- Team",
    description: "The Plant Lady is a next js and tailwind css website",
};

const Team = () => {
    return (
        <>
            <section className='pt-20'>
                <div className='contain er-fluid '>
                    <SectionTitle
                        sectionName={"Team"}
                        sectionTitle={"Architects of The Plant Lady"}
                        sectionDesc={"Where Imagination Takes Flight, and Excellence Blossoms"}
                    />
                </div>
                <div className='container tab:pt-30 ts:pt-20 pt-14'>
                    <div className='grid tab:grid-cols-3 ts:grid-cols-2 gap-7'>
                        {
                            teamData.map(({ id, img, name, position, social_link }) => <TeamCardOne key={id} img={img} name={name} position={position} social_link={social_link} />)
                        }
                    </div>
                </div>
            </section>
            <Feedback/>
        </>
    )
}

export default Team