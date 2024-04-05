import Image from "next/image";
import AboutMe from '../components/aboutme'
import { aboutMe, skills, professionalData } from "../data/page-data";
import ProfessionalExperience from '../components/professionalexp'

export default function Home() {
  return (
    <div><AboutMe data={aboutMe} skills={skills} />
    <ProfessionalExperience data={professionalData} />
    </div>
      );
}
