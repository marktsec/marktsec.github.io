## layout: post
title: "The Curious Case of PlayBoy Locker"
date: 2025-03-25
categories: \[Ransomware, Threat-Intelligence\]
tags: \[PlayBoyLocker, RaaS, ESXi, ActiveDirectory, MITRE-ATT&CK\]
author: marktsec

# The Curious Case of PlayBoy Locker

Ransomware-as-a-Service (RaaS) known as PlayBoy Locker

## KEY POINTS

* **Access to Sophisticated Attack Kits for Less-Skilled Attackers:** PlayBoy Locker Ransomware-as-a-Service (RaaS) platform allows relatively unskilled cybercriminals to launch ransomware attacks by providing a comprehensive toolkit, including ransomware payloads, management dashboards, and support services. Many dark web RaaS providers operate on an affiliate model, sharing profits with affiliates who spread the malware, which makes ransomware accessible to a broader range of attackers who lack the technical skills to develop it themselves.

* **Binary Customizations:** The PlayBoy Locker RaaS platform offers affiliates numerous options for building ransomware binaries that target Windows, NAS, and ESXi systems, enabling tailored configurations to suit different operational requirements.

* **Frequent Updates and Customer Support for Affiliates:** PlayBoy Locker RaaS operators advertise regular updates, anti-detection features, and even customer support for affiliates. Through dark web forums, RaaS developers may offer troubleshooting support, guidance on maximizing infection rates, and updates to evade antivirus and endpoint detection tools. This support infrastructure creates a more professionalized ecosystem, further increasing the threat level of ransomware attacks by enabling frequent innovation and more complex attack strategies.

### INTRODUCTION

The PlayBoy Locker group has been active since September 2024. Their initial post on a darknet forum was a request for beta testers to try out their new locker.


*Request for beta testers to try out new locker functionality*

PlayBoy Locker affiliate program was presented in the dark web forum, where affiliates agree to share a percentage of ransom payments with the PlayBoy Locker service operator by splitting the revenue 85/15%.


*PlayBoy Affiliate program presentation On The Russian Anonymous Marketplace*


*PlayBoy Affiliate program presentation On The Russian Anonymous Marketplace*

PlayBoy Locker also created an onion site, and added the first victim.

Then, out of the blue, they shared a sales pitch on the dark web, trying to sell their project, shutting down the project.


*PlayBoy Locker unexpectedly selling their project*

### TECHNICAL ANALYSIS

**PlayBoy Locker Operating System Support – Windows**
The current known Windows versions of PlayBoy Locker demonstrate the following capabilities:

* Combination of hc-128 and curve25519 encryption algorithms.

* Written in the C++ programming language


*PlayBoy Locker Windows Binary*

* Segmented file encryption

* Automatic worm in AD via LDAP with provided AD credentials

* Multithreaded queue for encryption

* Processes/Services termination

* Shadow copy delete

* Restart-System

* Change Wallpaper

* Running One locker process at a time

* Wipe Free Space

* Customizable ransom note

* Empty Bin

**Additional Support – NAS And ESXi**
The PlayBoy Locker version has the following capabilities:

For the ESXi version, it has the following capabilities:

* Automatic VM’s shut down

* Run as a daemon

* Exclude files/paths

* Build size 70 kb

For the NAS version (Network-attached storage), it can do:

* Simple single path encryption

Screenshots are provided showing this can be fully automated from a web-based builder:

Screenshots also show active chats panel and administration panels:


*PlayBoy Locker Admin Panel*

**Binary Analysis**
Like most ransomware, the initial compromise often occurs through various infection vectors, such as phishing emails, or compromised remote desktop protocol (RDP) endpoints.
In this section, Cybereason describes the analysis of a sample of the ransomware binary that is supposed to be executed on the victim machines.

**LDAP Scan**
The Lightweight Directory Access Protocol (LDAP) is a vendor-neutral application protocol used for accessing and maintaining distributed directory information services over an IP network. It is commonly used to query and manage directory services, such as Microsoft Active Directory, but is not limited to Windows environments.

PlayBoy Locker performs LDAP scans to automatically search for machines available in the network and then try to copy ransomware executable to the remote device. The ransomware will then set up a Windows service from a remote location to run the executable.
In order to perform LDAP scan, parameters `-ip`, `-u` (user name), `-p` (password) are required.


*LDAP Query Search for Available Machines in the network*


*Remote Service Strings*

**RstrtMgr DLL Loading (Restart Manager)**
`RstrtMgr.dll`, the Restart Manager, is a critical system component that safeguards open and unsaved files during system reboots. It acts as a gatekeeper, prompting users to save their work before shutting down to prevent data loss. PlayBoy Locker exploits this DLL in a malicious way.
Before encrypting a file, the ransomware stops services and processes in order to unlock and safely close open files.

**List of services and processes targeted by PlayBoy Locker:**

| Process/Service | Process/Service | Process/Service | Process/Service | 
| ----- | ----- | ----- | ----- | 
| `Telegram.exe` | `encsvc.exe` | `powerpnt.exe` | `msexchange` | 
| `Skype.exe` | `firefox.exe` | `steam.exe` | `sophos` | 
| `Chrome.exe` | `tbirdconfig.exe` | `thebat.exe` | `veeam` | 
| `sql.exe` | `mydesktopqos.exe` | `thunderbird.exe` | `backup` | 
| `Oracle.exe` | `ocomm.exe` | `visio.exe` | `GxVss` | 
| `ocssd.exe` | `dbeng50.exe` | `winword.exe` | `GxBlr` | 
| `dbsnmp.exe` | `sqbcoreservice.exe` | `wordpad.exe` | `GxFWD` | 
| `synctime.exe` | `excel.exe` | `notepad.exe` | `GxCVD` | 
| `agntsvc.exe` | `infopath.exe` | `calc.exe` | `GxCIMgr` | 
| `isqlplsussvc.exe` | `msaccess.exe` | `wuauclt.exe` |  | 
| `xfssvccon.exe` | `mspub.exe` | `svc$` |  | 
| `mydesktopservice.exe` | `onenote.exe` | `memtas` |  | 
| `ocautoupds.exe` | `outlook.exe` | `mepocs` |  | 

**Shadow Copy Deletion**
Deleting shadow copies is typical from ransomware in order to avoid their victim to restore their data through Windows snapshots. When Shadow Copy delete process is initiated by PlayBoy Locker, it calls the following command:
`vssadmin delete shadows /all /quiet`


*PlayBoy Locker Shadow Copies delete attempt*

**File Encryption**
Ransomware often employs multithreading to accelerate file encryption. This technique involves the parent thread identifying and sending files for encryption to child threads.


*Multiple threads can be seen from this dynamic analysis screenshot*

The child threads then work concurrently, each encrypting a different file, significantly speeding up the overall encryption process. This approach leverages the system's hardware capabilities to encrypt files more efficiently.
PlayBoy Locker uses strong encryption methods to lock down files on all connected devices in a network. It targets a variety of file formats, such as documents, pictures, videos, and databases.
Once files are encrypted, victims can't access them unless they have the decryption key, which is controlled by the attackers.


*PDF File Encryption Process Example*


*Encrypted Files*

**Ransom Note**
The ransom note thread extracts and decodes the embedded ransom note, which was specified in the malware's settings. This note is then saved as an `INSTRUCTIONS.txt` file in every directory that isn't explicitly excluded from encryption.


*Creation Of The Ransom Note INSTRUCTIONS.txt*


*Ransom Note*

**Self Deletion**
Once the ransomware completes its operations, it tries to remove itself using the following command:

```
C:\Windows\System32\cmd.exe /C ping 127.0.0.1 -n 2 >nul del /F file name

```

### IOCs

Cybereason shared a list of indicators of compromise related to this research:

| IOC | IOC type | Description | 
| ----- | ----- | ----- | 
| `3030a048f05146b85c458bcabe97968e5efdd81b224b96c30c83b74365839e7b` | SHA-256 | PlayBoy Locker Windows Encryptor | 
| `a9e1bd8f9cbeeec64da558027f380195f7ed572f03830a890dd0494e64d98556` | SHA-256 | PlayBoy Locker Windows Encryptor | 

### MITRE ATT&CK MAPPING

| Tactic | Techniques / Sub-Techniques | 
| ----- | ----- | 
| **TA0002: Execution** | T1047 – Windows Management Instrumentation  T1106 - Native API | 
| **TA0003: Persistence** | T1543.003 – Create or Modify System Process: Windows Service | 
| **TA0004: Privilege Escalation** | T1078.001 – Valid Accounts: Default Accounts  T1078.002 – Valid Accounts: Domain Accounts | 
| **TA0005: Defense Evasion** | T1406.002 – Obfuscated Files or Information: Software Packing  T1620 - Reflective Code Loading | 
| **TA0007: Discovery** | T1083 - File and Directory Discovery  T1135 - Network Share Discovery  T1016 - System Network Configuration Discovery | 
| **TA0009: Collection** | T1119 – Automated Collection | 
| **TA0040: Impact** | T1486 - Data Encrypted for Impact  T1489 – Service Stop  T1490 – Inhibit System Recovery | 
