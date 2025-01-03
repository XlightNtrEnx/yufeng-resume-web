import { Projects } from "./Projects";

const KaliLinuxFamiliarisation = {
  name: "Kali Linux familiarisation",
  achievements: `Familiarised myself with the Kali Linux OS. Learnt how to use 
  1) Information gathering tools
  - dig, dnsenum (Zone transfer attacks)
  - lbd (IPS/IDS evasion)`,
};

const projects = [KaliLinuxFamiliarisation];

export const CysecProjects = () => {
  return <Projects projects={projects} />;
};
