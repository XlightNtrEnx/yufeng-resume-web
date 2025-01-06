import { Projects } from "./Projects";

const KaliLinuxFamiliarisation = {
  name: "Kali Linux familiarisation",
  achievements: `Familiarised myself with the Kali Linux OS. Learnt how to use 
  1) Information gathering tools
  - dig, dnsenum, host, dnsrecon (Zone transfer attacks)
  - lbd, wafw00f, hping3 (IPS/IDS detection)
  - arping, fping, arp-scan, hping3, masscan, atk6-thcping6, nmap, netdiscover, nbtscan (Live Host Identification)
  - (OSINT analysis)
  - traceroute, mtr (Route analysis)
  - snmpwalk, nmap, snmp, hping3 (Device discovery)
  - (SMB attacks)
  2) 
  `,
};

const projects = [KaliLinuxFamiliarisation];

export const CysecProjects = () => {
  return <Projects projects={projects} />;
};
