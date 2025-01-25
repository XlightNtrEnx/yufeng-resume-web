import { Projects } from "./Projects";

const HackTheBox = {
  name: "Hack The Box",
  achievements: "Work in progress",
};

const KaliLinuxFamiliarisation = {
  name: "Kali Linux familiarisation",
  achievements: `Familiarised myself with the Kali Linux OS. Learnt how to use 
  1) Information gathering tools
  - dig, dnsenum, host, dnsrecon (Zone transfer attacks)
  - lbd, wafw00f, hping3 (IPS/IDS detection)
  - arping, fping, arp-scan, hping3, masscan, atk6-thcping6, nmap, netdiscover, nbtscan (Live Host Identification)
  - (OSINT analysis)
  - traceroute, mtr (Route analysis)
  - snmpwalk, nmap, snmp, hping3, snmp-check, onesixtyone (Device discovery)
  - nbtscan, enum4linux, smbmap (SMB scans)
  - smtp-user-enum, swaks (SMTP server testing)
  - sslscan, sslyze, ssldump (SSL/TLS analysis)

  2) Vulnerability analysis
  - SPIKE fuzzer suite (fuzzing)
  - (VoIP analysis)
  `,
};

const projects = [HackTheBox, KaliLinuxFamiliarisation];

export const CysecProjects = () => {
  return <Projects projects={projects} />;
};
