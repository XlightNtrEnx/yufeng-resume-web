import { LI, OL, P, UL } from "@src/elements";

import { Project, ProjectAchievements } from "./Project";
import { Projects } from "./Projects";

const HTBProject = () => {
  return (
    <Project
      name="Hack The Box"
      achievements={<ProjectAchievements>Work in progress</ProjectAchievements>}
    />
  );
};

const KaliProject = () => {
  return (
    <Project
      name="Kali Linux familiarisation"
      achievements={
        <ProjectAchievements>
          <P>Familiarised myself with the Kali Linux OS. Learnt how to use</P>
          <OL>
            <LI>
              <P>Information gathering tools</P>
              <UL>
                <LI>dig, dnsenum, host, dnsrecon (Zone transfer attacks)</LI>
              </UL>
              <UL>
                <LI>lbd, wafw00f, hping3 (IPS/IDS detection)</LI>
              </UL>
              <UL>
                <LI>
                  arping, fping, arp-scan, hping3, masscan, atk6-thcping6, nmap,
                  netdiscover, nbtscan (Live Host Identification)
                </LI>
              </UL>
              <UL>
                <LI>(OSINT analysis)</LI>
              </UL>
              <UL>
                <LI>traceroute, mtr (Route analysis)</LI>
              </UL>
              <UL>
                <LI>
                  snmpwalk, nmap, snmp, hping3, snmp-check, onesixtyone (Device
                  discovery)
                </LI>
              </UL>
              <UL>
                <LI>nbtscan, enum4linux, smbmap (SMB scans)</LI>
              </UL>
              <UL>
                <LI>smtp-user-enum, swaks (SMTP server testing)</LI>
              </UL>
              <UL>
                <LI>sslscan, sslyze, ssldump (SSL/TLS analysis)</LI>
              </UL>
            </LI>
            <LI>
              <P>Vulnerability analysis</P>
              <UL>
                <LI>SPIKE fuzzer suite (fuzzing)</LI>
              </UL>
              <UL>
                <LI>(VoIP analysis)</LI>
              </UL>
            </LI>
          </OL>
        </ProjectAchievements>
      }
    />
  );
};

export const CysecProjects = () => {
  return (
    <Projects>
      <HTBProject />
      <KaliProject />
    </Projects>
  );
};
