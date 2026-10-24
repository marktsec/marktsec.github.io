---
layout: post
title: "Behind the Mask of Madgicx Plus: A Chrome Extension Campaign Targeting Meta Advertisers"
date: 2025-09-09
categories: [Threat-Intelligence, Malware-Analysis]
tags: [Chrome-Extension, Meta, Malvertising, Credential-Harvesting]
author: Mark T.
---
> **Archival notice:** Originally published by Cybereason on June 17, 2025. This copy is maintained for research and portfolio-archival purposes. The [archived original](https://web.archive.org/web/20260314232341/https://www.cybereason.com/blog/chrome-extension-campaign-madgicx) remains available through the Internet Archive. All rights remain with the original rights holders.

> **Research note:** The analysis and claims below reflect the original publication. Claims made by ransomware operators are presented as claims, not independently verified facts.
# Behind the Mask of Madgicx Plus: A Chrome Extension Campaign Targeting Meta Advertisers

Investigation into a broader malicious Chrome extension campaign, part of which had been previously documented by DomainTools. While earlier iterations of this campaign involved the impersonation of a variety of services, the latest version shifts focus to Meta (Facebook/Instagram) advertisers through a newly crafted lure: “Madgicx Plus,” a fake AI-driven ad optimization platform. 

Promoted as a tool to streamline campaign management and boost ROI using artificial intelligence, the extension instead delivers potentially malicious functionalities capable of hijacking business sessions, stealing credentials, and compromising Meta Business accounts. Notably, several domains associated with earlier parts of the campaign have been repurposed to promote this new theme, highlighting the operators’ tendency to recycle infrastructure while adapting their social engineering strategy to new targets.

![Figure 1: Campaign Lure Overview](assets/images/image1.png)

---

## Key Points

* **Ongoing Campaign Targeting Meta Advertisers:** A new campaign has been observed where malicious Chrome extensions are being distributed through websites posing as AI-powered ad optimization tools for Meta (Facebook/Instagram) platforms.
* **Fake Platform Branding (“Madgicx Plus”):** The campaign uses fake branding and marketing language closely mimicking real advertising tools, such as "Madgicx Plus," to lure digital marketers into installing a compromised extension.
* **Malicious Extensions Delivered via Fake Tools:** The extensions are promoted as productivity or ad performance enhancers, but they operate as dual-purpose malware capable of stealing credentials, accessing session tokens, or enabling account takeover.

---

## Analysis

### Infrastructure Discovery and Domain Analysis
The campaign's infrastructure relies on a network of professionally crafted domains to distribute malicious Chrome extensions. Although many of these domains are protected by Cloudflare to obscure their origin, further analysis using favicon hashes and open-source intelligence tools such as Shodan revealed the real IP addresses behind the proxy. This exposure enabled the identification of related domains, shared hosting infrastructure, and connections to earlier phases of the campaign.

### Lure Websites Analysis
Several domains have been identified that impersonate the Madgicx brand, promoting a fake "Madgicx Plus" platform as part of a potentially malicious Chrome extension campaign. Madgicx is a legitimate advertising technology company known for offering AI-driven tools to optimize Meta advertising campaigns, which makes it a convincing target for impersonation. 

Importantly, there is no indication that Madgicx itself is connected to this activity. Instead, threat actors are abusing its brand as a lure to increase credibility and attract victims. The investigation also shows that domains previously linked to other malicious extensions have been repurposed to deliver the fake Madgicx Plus site, suggesting continuity of infrastructure and indicating that this is likely an evolution of the same campaign rather than the work of unrelated copycats.

**Madgicx Lure Websites (Targeting META):**
* `hxxps[:]//privacy-shield[.]world`
* `hxxps[:]//madgicxads[.]world`
* `hxxps[:]//madgicx-plus[.]com`
* `hxxps[:]//cookie-whitelist[.]com`
* `hxxps[:]//ad-guardian[.]world`
* `hxxps[:]//ad-seeker[.]world`
* `hxxps[:]//safesurf[.]world`
* `hxxps[:]//siteanalyzer[.]world`
* `hxxps[:]//webinsight[.]world`
* `hxxps[:]//www.orchid-vpn[.]com`
* `hxxps[:]//www.key-stat[.]com`
* `hxxps[:]//www.clonewebstat[.]com`
* `hxxps[:]//www.flight-radar[.]life`
* `hxxps[:]//www.calendly-daily[.]com`
* `hxxps[:]//www.web-radar[.]world`
* `hxxps[:]//www.similarweb[.]one`
* `hxxps[:]//www.webwatch[.]world`

![Figure 2: privacy-shield[.]world lure website promotes madgicx extension](assets/images/image2.png)
*Figure 2: Example of privacy-shield[.]world lure website promoting the malicious extension.*

![Figure 3: siteanalyzer[.]world lure website promotes madgicx extension](assets/images/image3.png)
*Figure 3: Example of siteanalyzer[.]world lure website.*

![Figure 4: viewdns.info shows 3 IP addresses behind Cloudflare services](assets/images/image4.png)
*Figure 4: viewdns.info showing 3 IP addresses hidden behind Cloudflare services.*

Analysis revealed that `www.web-radar[.]world` and `web-radar[.]world` resolve to the same Cloudflare IP addresses yet display different content. This difference is not caused by DNS redirection but by server-side logic that adjusts responses based on the Host header. Further investigation found this pattern repeated across other domains in the campaign, with `www` and non-`www` variants delivering distinct lure content. This configuration allows operators to run multiple themed pages from the same infrastructure, enabling content diversification while reducing hosting costs and complicating detection.

![Figure 5: The Madgicx extension is linked by www.web-radar[.]world](assets/images/image5.png)
*Figure 5: The Madgicx extension hosted and linked by www.web-radar[.]world.*

![Figure 6: The Web Radar extension linked by web-radar[.]world](assets/images/image6.png)
*Figure 6: The Web Radar extension, part of the same campaign, linked by web-radar[.]world (since removed from the Chrome Store).*

Even though the site was hosted behind Cloudflare, by analyzing the website’s hosted resources, it was possible to identify unique artifacts that led to the origin server’s IP address.

![Figure 7: Infrastructure reuse between Debank and Madgicx](assets/images/image7.png)
*Figure 7: The malicious Debank extension lure site and the Madgicx website were hosted on the same infrastructure, indicating a reuse of resources.*

![Figure 8: Shodan IP lookup](assets/images/image8.png)
*Figure 8: According to Shodan, the IP behind Cloudflare is 185.245.104[.]195, hosted by VDSina provider.*

![Figure 9: Direct IP access](assets/images/image9.png)
*Figure 9: Direct access to the IP 185.245.104[.]195 returns the Madgicx lure website.*

![Figure 10: VDSina hosting provider](assets/images/image10.png)
*Figure 10: The website is hosted on VDSina, a service known for hosting malicious resources.*

![Figure 11: Malwarebytes detections for VDSina](assets/images/image11.png)
*Figure 11: Source: Malwarebytes detections for VDSina.ru hosting.*

The first phase of the investigation uncovered a network of lure websites impersonating legitimate advertising tools, including the fraudulent “Madgicx Plus” platform. Analysis of these sites’ resources exposed the real hosting infrastructure hidden behind Cloudflare, revealing the service provider and IP address in use.

---

## Chrome Extension Analysis

The second phase of the investigation focused on the malicious Chrome extension itself, examining its technical makeup and behavior through both static and dynamic analysis. This stage uncovers the extension’s capabilities, data access permissions, and any potentially malicious functionality embedded within its code, as well as observing its runtime activity and interactions with external services.

### Identified Malicious Extensions

**1. Madgicx Plus The Superapp**
* **Lure Domain:** `hxxps[:]//madgicx-plus[.]com`
* **Extension ID:** `eoalbaojjblgndkffciljmiddhgjdldh`
* **Extension Filename:** `eoalbaojjblgndkffciljmiddhgjdldh.crx`
* **SHA-256:** `eaebd30ad9860b54b076c3e1241fc59c2c7c86c7bf568c4a6fece9cda904e65c`

**2. Meta Ads SuperTool**
* **Lure Domain:** `hxxps[:]//madgicxads[.]world`
* **Extension ID:** `cpigbbjhchinhpamicodkkcpihjjjlia`
* **Extension Filename:** `cpigbbjhchinhpamicodkkcpihjjjlia.crx`
* **SHA-256:** `7640907d54d5d76a25d19429968ff6b1d8fdae232b481df15d3cc47d1a224083`

---

## Static Analysis

This phase of the investigation examines the malicious Chrome extension through static analysis of its code and configuration.

### Manifest.json

![Figure 12: Manifest.json host_permissions](assets/images/image12.png)
*Figure 12: `host_permissions` grants full access to all websites the user visits.*

This enables the extension to inject content scripts, read DOM data, and potentially hijack sessions across any domain. 
`declarativeNetRequest`, `declarativeNetRequestWithHostAccess` - These allow the extension to intercept and modify network traffic, including headers and redirect chains, without user knowledge. In combination with full host access, it enables powerful man-in-the-browser capabilities.

![Figure 13: Content_scripts permissions](assets/images/image13.png)
*Figure 13: `content_scripts` permissions.*

The `content_scripts` permission allows the extension to automatically inject and execute custom JavaScript code on every website the user visits. In practice, this means the extension can monitor browsing activity, capture form inputs, modify page content, or interact with web applications without the user’s awareness. When misused, this capability can be weaponized to harvest sensitive information (such as login credentials), perform unauthorized actions in active sessions, or manipulate the user’s experience to further social engineering goals.

![Figure 14: CSP Bypass](assets/images/image14.png)
*Figure 14: CSP Bypass mechanisms.*

This appears to be bypassing CSP (Content Security Policy). Disabling it allows the extension to inject arbitrary scripts even into secured apps like Facebook, Gmail, etc.

### Rules.json

![Figure 15: Declarative Net Request Rules](assets/images/image15.png)
*Figure 15: The code removes the Origin HTTP header from requests whose URLs match the regex.*

The extension uses a Declarative Net Request rule to strip the Origin header from outbound requests containing the parameter `caller=ext`. This is an indicator of Cross-Origin Resource Sharing policies evasion and is commonly employed in privacy-invasive or malicious extensions to bypass Facebook’s origin validation mechanisms.

### background.iife.js

![Figure 16: background.iife.js code snippet](assets/images/image16.png)
*Figure 16: Unauthorized API access functions.*

The code indicates unauthorized API access using the victim’s session or tokens. By stealing a valid session token, the extension bypasses the need for login credentials entirely and can impersonate the victim directly. This grants the attacker access to the victim’s authenticated environment, allowing them to perform actions such as viewing private data, modifying account settings, or even managing advertising assets, effectively taking over the account without ever knowing the password.

![Figure 17: C2 Communication](assets/images/image17.png)
*Figure 17: External communications routing.*

![Figure 18: C2 Domain Hardcoding](assets/images/image18.png)
*Figure 18: Hardcoded C2 domain references.*

Additionally, it communicates with `hxxps[:]//madgicx-plus[.]com` which is not Meta, and functions potentially as a C2 domain.

---

## Dynamic Analysis

Dynamic analysis involves running the extension in a controlled environment to observe its real-time behavior, network communications, and interactions with browser APIs.

![Figure 19: Local storage harvesting](assets/images/image19.png)
*Figure 19: Harvesting Google account details.*

Once a user links their Google account, the extension quietly stores sensitive account details within its local storage, ensuring persistence and long-term access. Rather than ending there, the extension quickly escalates by prompting the user to connect their Facebook account.

![Figure 20: Facebook connection prompt](assets/images/image20.png)
*Figure 20: Escalating to request Facebook connectivity.*

This staged approach reveals a clear threat-actor strategy: first capturing Google identity data, then pivoting to Facebook to broaden access and increase the chances of hijacking valuable business or advertising assets.

![Figure 21: Identity and Token Capturing](assets/images/image21.png)
*Figure 21: Capturing identity and session tokens dynamically.*

**Network Requests to C2:**

![Figure 22: C2 Network Request Log](assets/images/image22.png)
*Figure 22: Active request transmitted to the C2 server.*

![Figure 23: Payload Delivery](assets/images/image23.png)
*Figure 23: Data payload successfully sent out.*

---

## Conclusion

This investigation highlights a malicious Chrome extension campaign that impersonates the Madgicx brand to lure Meta advertisers. While presented as a legitimate advertising tool, the extension demonstrates potentially malicious behavior, including requesting broad permissions, attempting to bypass web security controls, and embedding mechanisms to interact with sensitive user sessions. 

The infrastructure behind this activity shows clear signs of reuse: domains previously tied to unrelated extensions have been repurposed to promote the fake “Madgicx Plus” platform, suggesting that the same threat actors are iterating on their tactics rather than isolated groups running copycat operations. This reuse, combined with the technical sophistication of the extension, indicates the campaign is part of a broader, evolving effort to compromise advertiser accounts and harvest valuable business data. These findings underscore the importance of ongoing monitoring, as the persistence of infrastructure reuse and the rapid adaptation of lures point to a campaign that is both active and likely to expand further.

---

## Recommendations

To reduce the risk of falling victim to malicious browser extensions, users and organizations should adopt a cautious approach:

* **Verify before installing** – Always check the extension’s publisher, permissions, and user feedback. Be wary of extensions with little history or unclear ownership.
* **Clean up unused extensions** – Remove any extensions that are no longer actively used, as dormant ones can still pose risks.
* **Disable when unnecessary** – Consider turning off extensions temporarily if they are not needed for ongoing tasks.
* **Separate browsing contexts** – Use dedicated Chrome profiles for different purposes (e.g., work, banking, personal use) to limit potential exposure.
* **Inspect and report** – For technically capable users, reviewing extension code can uncover suspicious behavior. Report anything unusual to the browser vendor.
