const questions = [
 {
  id: 1,
  category: "CompTIA A+ 220-1201",
  question: "A technician is troubleshooting an all-in-one laser printer that prints a vertical line when making copies and scans. When users print or receive faxes, the output from the printer is correct. Which of the following should the technician examine to determine the cause of the issue?",
  answers: [
    "The pickup rollers",
    "The corona wire",
    "The document feeder",
    "The drum assembly"
  ],
  correct: 3,
  multiple: false,
  suggestedAnswer: "D",
  communityAnswer: "C",
  communityPercent: 77,
  disputed: true,
  explanation: "Answer guide suggested answer: D. Community vote favors C (77%)."
},

{
  id: 2,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following is an advantage of using a hybrid cloud instead of a public cloud?",
  answers: [
    "Ability to reduce management overhead",
    "Ability to use cross-platform virtualization",
    "Ability to meet data residency requirements",
    "Ability to leverage IaaS and PaaS"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 100,
  disputed: false,
  explanation: "Answer guide suggested answer: C."
},

{
  id: 3,
  category: "CompTIA A+ 220-1201",
  question: "A technician is troubleshooting a desktop PC that is plugged into a UPS. The PC loses the system date/time after every power outage. Which of the following should the technician do to resolve the issue? (Choose two.)",
  answers: [
    "Run a BIOS update.",
    "Swap out the RAM.",
    "Disable NTP in the OS.",
    "Repair the backup power source.",
    "Replace the CMOS battery.",
    "Install a surge protector."
  ],
  correct: [3, 4],
  multiple: true,
  suggestedAnswer: "DE",
  communityAnswer: "DE",
  communityPercent: 70,
  disputed: false,
  explanation: "Answer guide suggested answer: DE."
},

{
  id: 4,
  category: "CompTIA A+ 220-1201",
  question: "A network administrator must ensure that a printer will still be assigned a specific IP address even if all addresses are depleted. Which of the following network configuration concepts is this describing?",
  answers: [
    "VLAN",
    "Lease",
    "Reservation",
    "Exclusion"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 89,
  disputed: false,
  explanation: "Answer guide suggested answer: C."
},

{
  id: 5,
  category: "CompTIA A+ 220-1201",
  question: "A user is having issues when charging a device with a Lightning cable. The cable is not recognized when it is plugged into the device. This issue is usually resolved by flipping the cable over. This issue does not occur with other devices of the same type. Which of the following would most likely cause the issue?",
  answers: [
    "The device needs to be restarted.",
    "The battery may be swelling and needs inspection.",
    "The cable is failing and needs to be replaced.",
    "The charging port is dirty or damaged"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "D",
  communityPercent: 100,
  disputed: true,
  explanation: "Answer guide suggested answer: C. Community vote favors D (100%)."
},

{
  id: 6,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following servers is used to collect data and information about events from a network-connected host?",
  answers: [
    "DNS",
    "Mail",
    "Print",
    "Syslog"
  ],
  correct: 3,
  multiple: false,
  suggestedAnswer: "D",
  communityAnswer: "D",
  communityPercent: 100,
  disputed: false,
  explanation: "Answer guide suggested answer: D."
},

{
  id: 7,
  category: "CompTIA A+ 220-1201",
  question: "A technician observes slow startup times on a laptop. Which of the following is most likely causing the issue?",
  answers: [
    "HDD",
    "RAM",
    "NIC",
    "BIOS"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "Answer guide suggested answer: A."
},

{
  id: 8,
  category: "CompTIA A+ 220-1201",
  question: "A customer reports their tablet was recently dropped on the ground. The tablet has a small crack in one corner of the display, and it does not charge when plugged in. Which of the following should a technician do first?",
  answers: [
    "Perform a hard restart.",
    "Replace the battery.",
    "Inspect the USB-C port for damage.",
    "Run diagnostics on the digitizer."
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 100,
  disputed: false,
  explanation: "Answer guide suggested answer: C."
},

{
  id: 9,
  category: "CompTIA A+ 220-1201",
  question: "A technician needs to select PC components with a minimal number of visible internal cables. Which of the following should the technician use?",
  answers: [
    "SATA drive connections",
    "Liquid cooling",
    "Modular power supply",
    "Wireless NIC"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 100,
  disputed: false,
  explanation: "Answer guide suggested answer: C."
},

{
  id: 10,
  category: "CompTIA A+ 220-1201",
  question: "A user is traveling internationally. They can make and receive phone calls but cannot send or receive email. Which of the following would most likely resolve this issue?",
  answers: [
    "Disabling the GPS",
    "Enabling data roaming",
    "Configuring 4G usage only",
    "Connecting using a hotspot"
  ],
  correct: 1,
  multiple: false,
  suggestedAnswer: "B",
  communityAnswer: "B",
  communityPercent: 100,
  disputed: false,
  explanation: "Answer guide suggested answer: B."
},

  {
  id: 11,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following should be used when installing network cabling above a drop ceiling that is part of the shared air space?",
  answers: [
    "Shielded twisted",
    "Plenum-rated",
    "Optical",
    "Coaxial"
  ],
  correct: 1,
  multiple: false,
  suggestedAnswer: "B",
  communityAnswer: "B",
  communityPercent: 93,
  disputed: false,
  explanation: "Plenum-rated cabling is designed for installation in shared air-handling spaces."
},

{
  id: 12,
  category: "CompTIA A+ 220-1201",
  question: "While using a computer, a user reports that the system fan begins running loudly and the display starts to distort. Which of the following is occurring?",
  answers: [
    "Overheating",
    "Sluggish performance",
    "Overclocking CPU",
    "Crashing applications"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "A loud cooling fan combined with display distortion indicates overheating."
},

{
  id: 13,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following is a common feature of managed switches?",
  answers: [
    "Remote device power delivery",
    "Port VLAN assignment",
    "Content filtering",
    "Load balancing"
  ],
  correct: 1,
  multiple: false,
  suggestedAnswer: "B",
  communityAnswer: "B",
  communityPercent: 100,
  disputed: false,
  explanation: "Managed switches commonly allow administrators to assign individual switch ports to VLANs."
},

{
  id: 14,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following is a characteristic of Type 2 hypervisors?",
  answers: [
    "Bare-metal installation",
    "Need for an underlying OS",
    "Local management only",
    "Specific hardware requirements"
  ],
  correct: 1,
  multiple: false,
  suggestedAnswer: "B",
  communityAnswer: "B",
  communityPercent: 85,
  disputed: false,
  explanation: "A Type 2 hypervisor runs on top of a host operating system."
},

{
  id: 15,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following port numbers is used for a file transfer?",
  answers: [
    "21",
    "53",
    "68",
    "389"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 88,
  disputed: false,
  explanation: "FTP uses TCP port 21 for its control connection."
},

{
  id: 16,
  category: "CompTIA A+ 220-1201",
  question: "A user wants to print files from an overseas office using a shared network folder. The user's laptop has no public-facing internet connectivity. Which of the following can be used to print from the shared network folder?",
  answers: [
    "ADF",
    "USB",
    "PCL",
    "SMB"
  ],
  correct: 3,
  multiple: false,
  suggestedAnswer: "D",
  communityAnswer: "D",
  communityPercent: 83,
  disputed: false,
  explanation: "SMB provides network file and printer sharing."
},

{
  id: 17,
  category: "CompTIA A+ 220-1201",
  question: "A user tries to connect a monitor to a laptop to have an additional screen for work, but both screens show the same content. Which of the following should the user do to resolve the issue?",
  answers: [
    "Use the Add New Hardware assistant to add the monitor and set up the required settings.",
    "Purchase a docking station to connect both the laptop and the monitor.",
    "Configure the Windows tiling feature to display multiple windows.",
    "Go to the Display settings and configure the external monitor as extended."
  ],
  correct: 3,
  multiple: false,
  suggestedAnswer: "D",
  communityAnswer: "D",
  communityPercent: 100,
  disputed: false,
  explanation: "The external monitor needs to be configured for Extend rather than Duplicate."
},

{
  id: 18,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following best represents the purpose of NFC?",
  answers: [
    "Wired connections between several devices",
    "Short-distance wireless connections between two devices",
    "Wireless connections between multiple devices at once",
    "Direct connection of two computers for file sharing"
  ],
  correct: 1,
  multiple: false,
  suggestedAnswer: "B",
  communityAnswer: "B",
  communityPercent: 100,
  disputed: false,
  explanation: "NFC provides very short-range wireless communication between devices."
},

{
  id: 19,
  category: "CompTIA A+ 220-1201",
  question: "A group of friends is gathering in a room to play video games. One of the friends has a game server. Which of the following network types should the group use so they can all connect to the same server and the internet?",
  answers: [
    "SAN",
    "MAN",
    "LAN",
    "PAN"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 89,
  disputed: false,
  explanation: "A LAN connects devices within a small local area such as a room or building."
},

{
  id: 20,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following can a user utilize to share their mobile phone connection with their laptop?",
  answers: [
    "IR",
    "NFC",
    "Wi-Fi Direct",
    "Tethering"
  ],
  correct: 3,
  multiple: false,
  suggestedAnswer: "D",
  communityAnswer: "D",
  communityPercent: 86,
  disputed: false,
  explanation: "Tethering allows a phone's cellular connection to be shared with another device."
},

{
  id: 21,
  category: "CompTIA A+ 220-1201",
  question: "A user reports that their desktop PC does not turn on. Which of the following components would most likely cause the issue?",
  answers: [
    "PSU",
    "GPU",
    "RAM",
    "CPU"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "A failed power supply can prevent the desktop from receiving power and turning on."
},

{
  id: 22,
  category: "CompTIA A+ 220-1201",
  question: "The printer in a main office repeatedly jams. Which of the following tasks should a support technician do to solve the issue?",
  answers: [
    "Apply a maintenance kit.",
    "Replace toner or ink cartridges.",
    "Install a new ribbon.",
    "Change the printhead."
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "Printer maintenance kits contain wear items such as rollers that can cause recurring paper jams."
},

{
  id: 23,
  category: "CompTIA A+ 220-1201",
  question: "A technician is installing a new printer. After registering the printer, the technician receives an email from the manufacturer stating there is a security vulnerability that can be remediated. Which of the following steps should the technician take next?",
  answers: [
    "Disable wireless connectivity.",
    "Enable audit logging.",
    "Update the firmware.",
    "Disable the default gateway on the printer."
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 100,
  disputed: false,
  explanation: "A manufacturer firmware update can remediate a known vulnerability in the printer."
},

{
  id: 24,
  category: "CompTIA A+ 220-1201",
  question: "A technician has built a new computer. On the initial startup, the computer passes POST but will not turn on the operating system. Which of the following components has failed?",
  answers: [
    "Audio card",
    "CPU",
    "Power supply",
    "HDD"
  ],
  correct: 3,
  multiple: false,
  suggestedAnswer: "D",
  communityAnswer: "D",
  communityPercent: 100,
  disputed: false,
  explanation: "After POST, the system must access its storage device to load the operating system."
},

{
  id: 25,
  category: "CompTIA A+ 220-1201",
  question: "A user reports slow internet browsing. The technician finds high CPU and memory usage, and pop-ups occur every minute. Which of the following should the technician do next?",
  answers: [
    "Escalate to the network team to check end-to-end connectivity.",
    "Download and install the latest drivers.",
    "Update the anti-malware signatures and scan the system.",
    "Check the wireless settings and validate the DHCP configuration."
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 86,
  disputed: false,
  explanation: "High resource usage combined with frequent pop-ups is consistent with malware, so the system should be scanned."
},

{
  id: 26,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following is the best to use when testing a file for potential malware?",
  answers: [
    "Multitenancy",
    "Test development",
    "Cross-platform virtualization",
    "Sandbox"
  ],
  correct: 3,
  multiple: false,
  suggestedAnswer: "D",
  communityAnswer: "D",
  communityPercent: 100,
  disputed: false,
  explanation: "A sandbox provides an isolated environment for testing potentially malicious files."
},

{
  id: 27,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following resolutions is commonly known as Ultra HD?",
  answers: [
    "1920x1080",
    "2048x1080",
    "3840x2160",
    "7680x4320"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 86,
  disputed: false,
  explanation: "3840x2160 is commonly called 4K UHD or Ultra HD."
},

{
  id: 28,
  category: "CompTIA A+ 220-1201",
  question: "A technician is troubleshooting stylus issues on identical company-provided tablets. Users can purchase their own accessories. Some users have no issues, but others report that their styluses charge intermittently and die frequently. Which of the following is the most likely cause of this issue?",
  answers: [
    "Certain cases are causing charging issues.",
    "The tablets need to be updated.",
    "Some of the tablets have manufacturing defects.",
    "The malfunctioning styluses need firmware updates."
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "Different user-provided cases can interfere with the stylus charging connection."
},

{
  id: 29,
  category: "CompTIA A+ 220-1201",
  question: "A user prints a job from a laser printer. The user wipes the page, and the words and images come off of it. The technician replaces the toner cartridge, but the issue persists. Which of the following components should the technician replace next?",
  answers: [
    "Fuser",
    "Drum",
    "Developer roller",
    "Discharge lamp"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "The fuser uses heat and pressure to permanently bond toner to the paper."
},

{
  id: 30,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following has the best penetration through physical objects, such as walls?",
  answers: [
    "2.4GHz",
    "5GHz",
    "6GHz",
    "NFC"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "2.4GHz Wi-Fi generally provides better range and wall penetration than higher-frequency Wi-Fi bands."
},

{
  id: 31,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following is a Bluetooth network an example of?",
  answers: [
    "PAN",
    "LAN",
    "WAN",
    "SAN"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "Bluetooth commonly creates a Personal Area Network (PAN) between nearby personal devices."
},

{
  id: 32,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following cloud models would multiple organizations in the same industry most likely use?",
  answers: [
    "Public",
    "Hybrid",
    "Community",
    "Private"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 100,
  disputed: false,
  explanation: "A community cloud is shared by organizations with similar requirements or interests."
},

{
  id: 33,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following is an example of VDI?",
  answers: [
    "Streaming a GUI to thin clients from a server",
    "Provisioning a sandbox as a test environment",
    "Providing high-performance workstations with a local OS",
    "Launching a virtual machine server on a hypervisor"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "VDI hosts desktop environments centrally and delivers their graphical interfaces to client devices."
},

{
  id: 34,
  category: "CompTIA A+ 220-1201",
  question: "A company needs to develop a disaster recovery solution based on virtual machines. Which of the following service models is the most suitable?",
  answers: [
    "Infrastructure as a service",
    "Security as a service",
    "Platform as a service",
    "Software as a service"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "IaaS provides virtual machines, storage, and networking infrastructure that can support disaster recovery."
},

{
  id: 35,
  category: "CompTIA A+ 220-1201",
  question: "A technician is connecting a hands-free car system via Bluetooth. Which of the following is a security feature that should be used for this task?",
  answers: [
    "BitLocker",
    "Biometrics",
    "TPM",
    "PIN code"
  ],
  correct: 3,
  multiple: false,
  suggestedAnswer: "D",
  communityAnswer: "D",
  communityPercent: 100,
  disputed: false,
  explanation: "Bluetooth pairing commonly uses a PIN or passcode to authenticate the devices."
},

{
  id: 36,
  category: "CompTIA A+ 220-1201",
  question: "A technician is troubleshooting a laptop's connectivity via its USB-C port to a projector. The same laptop works well when it is connected to a USB-C docking station. The projector is configured as expected, and the USB-C cable was tested on a charging port. Which of the following could be the issue?",
  answers: [
    "The USB-C cable requires a power injector",
    "The USB-C cable is not compatible with Thunderbolt technology.",
    "The USB-C cable needs an adapter to work with the laptop.",
    "The USB-C cable does not support enough power."
  ],
  correct: 1,
  multiple: false,
  suggestedAnswer: "B",
  communityAnswer: "B",
  communityPercent: 100,
  disputed: false,
  explanation: "USB-C describes the connector, but a particular cable might not support the video or Thunderbolt capabilities required."
},

{
  id: 37,
  category: "CompTIA A+ 220-1201",
  question: "A high-end workstation with a RAID 5 array is exhibiting slow data access speeds and occasional errors when retrieving files. The technician investigates further and notices one of the hard drives in the RAID array has an amber light. Which of the following steps should the technician take to troubleshoot and resolve the issues?",
  answers: [
    "Review network issues that might be causing slow speeds.",
    "Upgrade all RAID drives to higher capacity models to increase data access speeds.",
    "Replace the failing drive, and then allow the RAID controller to rebuild the array.",
    "Reformat all drives in the RAID array to clear any software issues that might be causing the errors."
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 100,
  disputed: false,
  explanation: "The amber indicator points to a failed or failing RAID member, which should be replaced so the RAID 5 array can rebuild."
},

{
  id: 38,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following provides electricity to devices through network cables?",
  answers: [
    "Edge router",
    "PoE switch",
    "Access point",
    "Patch panel"
  ],
  correct: 1,
  multiple: false,
  suggestedAnswer: "B",
  communityAnswer: "B",
  communityPercent: 100,
  disputed: false,
  explanation: "A Power over Ethernet switch can deliver both network connectivity and electrical power through Ethernet cabling."
},

{
  id: 39,
  category: "CompTIA A+ 220-1201",
  question: "An IT specialist sets up a wireless router in a SOHO environment. Afterward, several devices cannot access the internet and are assigned IP addresses starting with 169.254. Which of the following is the best action to resolve this issue?",
  answers: [
    "Reboot the wireless router.",
    "Shorten the lease time.",
    "Use static IP addresses.",
    "Increase the DHCP pool size."
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 80,
  disputed: false,
  explanation: "The source's suggested answer is to reboot the wireless router. A 169.254 address indicates the device did not obtain a normal DHCP address."
},

{
  id: 40,
  category: "CompTIA A+ 220-1201",
  question: "A customer reports slow network speeds. Which of the following components is most likely failing?",
  answers: [
    "CPU",
    "NIC",
    "HDD",
    "RAM"
  ],
  correct: 1,
  multiple: false,
  suggestedAnswer: "B",
  communityAnswer: "B",
  communityPercent: 100,
  disputed: false,
  explanation: "The NIC is the component directly responsible for the computer's network interface."
},

{
  id: 41,
  category: "CompTIA A+ 220-1201",
  question: "A support technician receives a call stating that a user has added a device to the network. The user used the same configurations from another workstation. When both workstations are turned on, neither can access the network reliably. Which of the following is the most likely cause of the issue?",
  answers: [
    "The new computer has a duplicate IP address.",
    "The DNS server is registering both hostnames.",
    "The network cable was improperly terminated",
    "The security on the switchport needs to be reset."
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "Copying the same static network configuration can result in both workstations using the same IP address."
},

{
  id: 42,
  category: "CompTIA A+ 220-1201",
  question: "A technician needs to confirm that desktop PCs can be deployed to a global, remote workforce. Which of the following specifications should the technician validate?",
  answers: [
    "Input voltage",
    "BIOS language support",
    "Supply chain security",
    "Power efficiency"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "Electrical standards vary internationally, so the systems' supported input voltage must be verified."
},

{
  id: 43,
  category: "CompTIA A+ 220-1201",
  question: "A company deploys server machines in a public cloud. Which of the following cloud service models is this an example of?",
  answers: [
    "Platform as a service",
    "Anything as a service",
    "Infrastructure as a service",
    "Software as a service"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 100,
  disputed: false,
  explanation: "IaaS provides infrastructure resources such as virtual servers through a cloud provider."
},

{
  id: 44,
  category: "CompTIA A+ 220-1201",
  question: "A customer needs to install a new printer in their network. The customer reports that users had intermittent connectivity issues with previous printers. Which of the following should the technician configure on the new printer to prevent this issue?",
  answers: [
    "Gateway IP address",
    "DHCP IP address",
    "Static IP address",
    "Public IP address"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 86,
  disputed: false,
  explanation: "A static IP keeps the network printer at a consistent address."
},

{
  id: 45,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following DNS records would an administrator change to redirect email flow?",
  answers: [
    "MX",
    "TXT",
    "SPF",
    "CNAME"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "MX records identify the mail servers responsible for receiving email for a domain."
},

{
  id: 46,
  category: "CompTIA A+ 220-1201",
  question: "A technician is troubleshooting a network issue. Users report that the connection keeps dropping and reconnecting every few seconds. The technician verifies the network configuration settings are correct on the workstation, tests the network cable from the workstation to the switch and finds no issues, and uses a known-good workstation on the existing network cable and replicates the reported issue. Which of the following should the technician do next?",
  answers: [
    "Add new network hardware to reduce congestion",
    "Assign a static IP to the impacted workstations.",
    "Validate the environment for external interference.",
    "Check the network logs for evidence of port flapping."
  ],
  correct: 3,
  multiple: false,
  suggestedAnswer: "D",
  communityAnswer: "D",
  communityPercent: 89,
  disputed: false,
  explanation: "The same issue occurring with a known-good workstation and cable points farther upstream; the source identifies checking for switch port flapping as the next step."
},

{
  id: 47,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following would prevent a virtual machine from communicating with any endpoints on a network or the internet?",
  answers: [
    "VDI",
    "Private cloud",
    "Sandbox",
    "Type 1 hypervisor"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "C",
  communityPercent: 83,
  disputed: false,
  explanation: "A sandbox provides an isolated environment intended to keep activity separated from other systems."
},

{
  id: 48,
  category: "CompTIA A+ 220-1201",
  question: "A technician recently updated the firmware on a dual-BIOS motherboard. Following the update, the system has been stuck in a boot loop and cannot start an OS from any internal or external device. The technician cannot access the UEFI menu either. Which of the following should the technician do next?",
  answers: [
    "Enable the secondary configuration.",
    "Downgrade the firmware via USB.",
    "Start a warranty repair of the motherboard.",
    "Reapply thermal paste to the CPU."
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 62,
  disputed: false,
  explanation: "The source recommends using the secondary configuration available on the dual-BIOS motherboard."
},

{
  id: 49,
  category: "CompTIA A+ 220-1201",
  question: "Which of the following cloud models exclusively utilizes a local data center?",
  answers: [
    "Private",
    "Public",
    "Hybrid",
    "Community"
  ],
  correct: 0,
  multiple: false,
  suggestedAnswer: "A",
  communityAnswer: "A",
  communityPercent: 100,
  disputed: false,
  explanation: "A private cloud is dedicated to a single organization and can use the organization's local data center."
},

{
  id: 50,
  category: "CompTIA A+ 220-1201",
  question: "A customer has several bare-metal servers running a mix of Windows, Linux, and Unix OSs. The customer wants to consolidate the servers but is concerned about data privacy and recurring costs. Which of the following solutions should a technician recommend?",
  answers: [
    "IaaS",
    "Containers",
    "Type 2 hypervisor",
    "VDI"
  ],
  correct: 2,
  multiple: false,
  suggestedAnswer: "C",
  communityAnswer: "B",
  communityPercent: 56,
  disputed: true,
  explanation: "The source's Suggested Answer is C (Type 2 hypervisor), while the community vote favors B (Containers), so this question is flagged as disputed."
},

  {
  "id": 51,
  "category": "CompTIA A+ 220-1201",
  "question": "A technician is troubleshooting internet connectivity issues after a firewall update. Users report that they can access local network resources, such as printers and shares, but cannot access the internet. Which of the following settings is most likely causing the issue?",
  "answers": ["Static IP assignments", "Default gateway", "Subnet mask", "VLANs"],
  "correct": 1,
  "multiple": false,
  "suggestedAnswer": "B",
  "communityAnswer": "B",
  "communityPercent": 83,
  "disputed": false,
  "explanation": "Answer guide suggested answer: B."
},
{
  "id": 52,
  "category": "CompTIA A+ 220-1201",
  "question": "A help desk technician inspects a laptop keyboard because a single key has stopped working. The technician checks the keyboard for debris. Which of the following actions should the technician do next to troubleshoot the issue cost-effectively?",
  "answers": ["Replace the keyboard.", "Replace the key switch.", "Replace the circuit board.", "Replace the keycap."],
  "correct": 1,
  "multiple": false,
  "suggestedAnswer": "B",
  "communityAnswer": "D",
  "communityPercent": 67,
  "disputed": true,
  "explanation": "Answer guide suggested answer: B. Community vote favors D (67%)."
},
{
  "id": 53,
  "category": "CompTIA A+ 220-1201",
  "question": "An end user's domain password expires while they are working from home. The end user tries to reset the password using Ctrl+Alt+Delete and then receives the following message: Configuration information could not be read from the domain controller, either because the machine is unavailable or because access denied. Which of the following will resolve this issue?",
  "answers": ["Restart the computer", "Connect to the VPN.", "Reset the account in Active Directory.", "Join the Wi-Fi network."],
  "correct": 1,
  "multiple": false,
  "suggestedAnswer": "B",
  "communityAnswer": "B",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: B."
},
{
  "id": 54,
  "category": "CompTIA A+ 220-1201",
  "question": "A computer displays an error message indicating there is insufficient storage when installing applications. The user reports slow application load times. Which of the following replacement components would best resolve this issue?",
  "answers": ["SSD", "USB", "HDD", "RAM"],
  "correct": 0,
  "multiple": false,
  "suggestedAnswer": "A",
  "communityAnswer": "A",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: A."
},
{
  "id": 55,
  "category": "CompTIA A+ 220-1201",
  "question": "A technician is troubleshooting a connectivity issue on a network computer. The technician runs ipconfig in a command prompt and receives the following IP address: 169.254.0.6. Which of the following is most likely the type of IP address being assigned?",
  "answers": ["DHCP reservation assignment", "Dynamic assignment", "Self assignment", "Static assignment"],
  "correct": 2,
  "multiple": false,
  "suggestedAnswer": "C",
  "communityAnswer": "C",
  "communityPercent": 83,
  "disputed": false,
  "explanation": "Answer guide suggested answer: C."
},
{
  "id": 56,
  "category": "CompTIA A+ 220-1201",
  "question": "Which of the following storage options would a technician most likely recommend to have large amounts of affordable capacity without concern for read times on a desktop computer?",
  "answers": ["750GB NVMe M.2 SSD", "2x1TB PCIe SSD in RAID 1", "2TB SATA 3.5 5,400rpm HDD", "4TB SAS2.5 15,000rpm HDD"],
  "correct": 2,
  "multiple": false,
  "suggestedAnswer": "C",
  "communityAnswer": "C",
  "communityPercent": 75,
  "disputed": false,
  "explanation": "Answer guide suggested answer: C."
},
{
  "id": 57,
  "category": "CompTIA A+ 220-1201",
  "question": "Which of the following utilizes specialized ports on a laptop to expand the local connection options?",
  "answers": ["NFC adapter", "Docking station", "Port replicator", "USB dongle"],
  "correct": 1,
  "multiple": false,
  "suggestedAnswer": "B",
  "communityAnswer": "B",
  "communityPercent": 67,
  "disputed": false,
  "explanation": "Answer guide suggested answer: B."
},
{
  "id": 58,
  "category": "CompTIA A+ 220-1201",
  "question": "Which of the following tools would a technician use to connect wires to an RJ45 connector?",
  "answers": ["Crimper", "Cable stripper", "Punchdown", "Loopback plug"],
  "correct": 0,
  "multiple": false,
  "suggestedAnswer": "A",
  "communityAnswer": "A",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: A."
},
{
  "id": 59,
  "category": "CompTIA A+ 220-1201",
  "question": "A technician is working on a RAID 1 array that is apparently degraded. The technician verifies the RAM and power are both operating as expected. Which of the following can the technician do to further isolate the issue?",
  "answers": ["Perform individual drive diagnostics.", "Run the chkdsk /f command.", "Rebuild the RAID array.", "Reconfigure the array as RAID 0."],
  "correct": 0,
  "multiple": false,
  "suggestedAnswer": "A",
  "communityAnswer": "A",
  "communityPercent": 83,
  "disputed": false,
  "explanation": "Answer guide suggested answer: A."
},
{
  "id": 60,
  "category": "CompTIA A+ 220-1201",
  "question": "A company wants its RAID array set up so that it could lose multiple drives and still have redundancy. Which of the following configurations should the company choose?",
  "answers": ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
  "correct": 3,
  "multiple": false,
  "suggestedAnswer": "D",
  "communityAnswer": "D",
  "communityPercent": 75,
  "disputed": false,
  "explanation": "Answer guide suggested answer: D."
},
{
  "id": 61,
  "category": "CompTIA A+ 220-1201",
  "question": "A user prints a spreadsheet in duplex mode. The spreadsheet is difficult to read because some of the columns spill onto the second side of the page. Which of the following should the user do to prevent the issue but still print on both sides of the page?",
  "answers": ["Turn off duplex printing.", "Try a smaller font size in the spreadsheet.", "Change the page orientation.", "Use a different print driver."],
  "correct": 2,
  "multiple": false,
  "suggestedAnswer": "C",
  "communityAnswer": "C",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: C."
},
{
  "id": 62,
  "category": "CompTIA A+ 220-1201",
  "question": "Which of the following cable types can be used to transfer data and video?",
  "answers": ["USB-C", "HDMI", "DisplayPort", "VGA"],
  "correct": 0,
  "multiple": false,
  "suggestedAnswer": "A",
  "communityAnswer": "A",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: A."
},
{
  "id": 63,
  "category": "CompTIA A+ 220-1201",
  "question": "Which of the following types of RAM is best suited to handle errors within the module itself?",
  "answers": ["DIMM", "Dual channel", "ECC", "SODIMM"],
  "correct": 2,
  "multiple": false,
  "suggestedAnswer": "C",
  "communityAnswer": "C",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: C."
},
{
  "id": 64,
  "category": "CompTIA A+ 220-1201",
  "question": "A technician needs to move a workstation to a different logical network segment. Which of the following technologies should the technician use?",
  "answers": ["DHCP", "VLAN", "DNS", "VPN"],
  "correct": 1,
  "multiple": false,
  "suggestedAnswer": "B",
  "communityAnswer": "B",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: B."
},
{
  "id": 65,
  "category": "CompTIA A+ 220-1201",
  "question": "After a technician installs a new motherboard, the computer will not start and fails POST. The technician verifies the power supply is functioning as expected, and the CPU is installed correctly. Which of the following steps should the technician complete next?",
  "answers": ["Flash the BIOS.", "Check the CMOS battery.", "Reseat the RAM.", "Reinstall the old motherboard."],
  "correct": 2,
  "multiple": false,
  "suggestedAnswer": "C",
  "communityAnswer": "C",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: C."
},
{
  "id": 66,
  "category": "CompTIA A+ 220-1201",
  "question": "Which of the following is an advantage of using VDI?",
  "answers": ["Authentication is not required on a domain.", "Licensing costs are minimized.", "Less manual configuration is needed for each workstation.", "A virus is automatically contained locally."],
  "correct": 2,
  "multiple": false,
  "suggestedAnswer": "C",
  "communityAnswer": "C",
  "communityPercent": 75,
  "disputed": false,
  "explanation": "Answer guide suggested answer: C."
},
{
  "id": 67,
  "category": "CompTIA A+ 220-1201",
  "question": "A user is unable to access secure applications on their tablet when working from home a couple days per week, but the applications work when in the office. Which of the following services most likely needs to be reconfigured to allow for remote work?",
  "answers": ["Global Positioning System", "Mobile device management", "Wi-Fi Protected Access", "Near-field communication"],
  "correct": 1,
  "multiple": false,
  "suggestedAnswer": "B",
  "communityAnswer": "B",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: B."
},
{
  "id": 68,
  "category": "CompTIA A+ 220-1201",
  "question": "A systems administrator deploys BitLocker to all devices. However, one of the desktop PCs is not able to encrypt the boot drive. Which of the following should the administrator check?",
  "answers": ["TPM", "CPU", "RAM", "HDD"],
  "correct": 0,
  "multiple": false,
  "suggestedAnswer": "A",
  "communityAnswer": "A",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: A."
},
{
  "id": 69,
  "category": "CompTIA A+ 220-1201",
  "question": "A technician is troubleshooting issues occurring on a user's mobile device. Applications and the OS have slow response times, even when performing simple tasks, such as writing an email. Additionally, new applications occasionally fail to launch. Which of the following should the technician do next?",
  "answers": ["Move the device to a room with a colder temperature.", "Close unnecessary programs.", "Reset to factory default settings.", "Check the battery health of the device."],
  "correct": 3,
  "multiple": false,
  "suggestedAnswer": "D",
  "communityAnswer": "B",
  "communityPercent": 100,
  "disputed": true,
  "explanation": "Answer guide suggested answer: D. Community vote favors B (100%)."
},
{
  "id": 70,
  "category": "CompTIA A+ 220-1201",
  "question": "A user connects their laptop to a projector in a conference room. Once connected, the user reports the screen is smaller at the bottom than at the top. The user tries restarting the laptop and then disconnecting and reconnecting the cable to the projector. Which of the following should a technician do to resolve the issue?",
  "answers": ["Replace the HDMI cable.", "Power cycle the projector.", "Adjust the keystone setting.", "Change the display resolution."],
  "correct": 2,
  "multiple": false,
  "suggestedAnswer": "C",
  "communityAnswer": "C",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: C."
},
{
  "id": 71,
  "category": "CompTIA A+ 220-1201",
  "question": "Which of the following interfaces is most commonly used to connect a graphics card to a motherboard?",
  "answers": ["PCIe x16", "PCIe x1", "SATA", "DIMM"],
  "correct": 0,
  "multiple": false,
  "suggestedAnswer": "A",
  "communityAnswer": "A",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: A."
},
{
  "id": 72,
  "category": "CompTIA A+ 220-1201",
  "question": "Which of the following is most likely used to provide a laptop with additional wired network, display, and USB connections through a single connection?",
  "answers": ["Docking station", "KVM switch", "Patch panel", "Access point"],
  "correct": 0,
  "multiple": false,
  "suggestedAnswer": "A",
  "communityAnswer": "A",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: A."
},
{
  "id": 73,
  "category": "CompTIA A+ 220-1201",
  "question": "Which of the following printer components is responsible for pulling paper from the tray?",
  "answers": ["Fuser", "Pickup roller", "Drum", "Transfer belt"],
  "correct": 1,
  "multiple": false,
  "suggestedAnswer": "B",
  "communityAnswer": "B",
  "communityPercent": 100,
  "disputed": false,
  "explanation": "Answer guide suggested answer: B."
},
{
  "id": 74,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following wireless standards commonly operates on both 2.4GHz and 5GHz bands?",

  "answers": ["802.11a", "802.11b", "802.11g", "802.11n"],

  "correct": 3,

  "multiple": false,

  "suggestedAnswer": "D",

  "communityAnswer": "D",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: D."

},

{

  "id": 75,

  "category": "CompTIA A+ 220-1201",

  "question": "A technician needs to connect a computer to a display using a digital video connection that can also carry audio. Which of the following is most appropriate?",

  "answers": ["VGA", "HDMI", "RJ45", "PS/2"],

  "correct": 1,

  "multiple": false,

  "suggestedAnswer": "B",

  "communityAnswer": "B",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: B."

},

{

  "id": 76,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following technologies allows a device to obtain its IP configuration automatically from a network server?",

  "answers": ["DNS", "DHCP", "NAT", "SNMP"],

  "correct": 1,

  "multiple": false,

  "suggestedAnswer": "B",

  "communityAnswer": "B",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: B."

},

{

  "id": 77,

  "category": "CompTIA A+ 220-1201",

  "question": "SIMULATION: A user reports poor performance on the application server. Review server and drive information to determine which drives need to be replaced and choose appropriate replacement drives.",

  "answers": [],

  "correct": [],

  "multiple": true,

  "suggestedAnswer": "",

  "communityAnswer": "",

  "communityPercent": 0,

  "disputed": false,

  "pbq": true,

  "explanation": "This is a performance-based simulation and should be handled separately by the game's PBQ mode."

},

{

  "id": 78,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following ports is commonly used by Remote Desktop Protocol?",

  "answers": ["22", "80", "3389", "443"],

  "correct": 2,

  "multiple": false,

  "suggestedAnswer": "C",

  "communityAnswer": "C",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: C."

},

{

  "id": 79,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following network devices typically forwards traffic based on MAC addresses?",

  "answers": ["Router", "Switch", "Modem", "Firewall"],

  "correct": 1,

  "multiple": false,

  "suggestedAnswer": "B",

  "communityAnswer": "B",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: B."

},

{

  "id": 80,

  "category": "CompTIA A+ 220-1201",

  "question": "A user reports that a phone’s integration features consistently stop and restart when charging the phone in a car. A technician checks the phone and finds no malicious applications. Which of the following should the technician do to fix the issue?",

  "answers": ["Clean the connection port.", "Replace the cable with a longer cable.", "Reinstall MDM software on the phone.", "Reset the phone to factory defaults."],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 81,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following cloud characteristics allows resources to be increased or decreased automatically according to demand?",

  "answers": ["Elasticity", "Multitenancy", "Measured service", "Community cloud"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 82,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following storage interfaces is commonly associated with NVMe drives?",

  "answers": ["IDE", "M.2", "Floppy", "SCSI"],

  "correct": 1,

  "multiple": false,

  "suggestedAnswer": "B",

  "communityAnswer": "B",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: B."

},

{

  "id": 83,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following is most likely required to connect a laptop securely to a corporate network while working remotely?",

  "answers": ["VPN", "NFC", "Bluetooth", "VLAN"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 84,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following printer technologies commonly uses a ribbon?",

  "answers": ["Laser", "Inkjet", "Impact", "Thermal"],

  "correct": 2,

  "multiple": false,

  "suggestedAnswer": "C",

  "communityAnswer": "C",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: C."

},

{

  "id": 85,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following is the most appropriate tool for testing whether an Ethernet cable is wired correctly?",

  "answers": ["Cable tester", "Multimeter", "Loopback plug", "Crimper"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 86,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following components stores BIOS or UEFI configuration information when a computer is powered off?",

  "answers": ["CMOS battery", "CPU cache", "RAM", "GPU"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 87,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following allows several guest operating systems to run on one physical computer?",

  "answers": ["Hypervisor", "Load balancer", "Proxy server", "DNS server"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 88,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following protocols is most commonly used to securely browse websites?",

  "answers": ["HTTP", "HTTPS", "FTP", "Telnet"],

  "correct": 1,

  "multiple": false,

  "suggestedAnswer": "B",

  "communityAnswer": "B",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: B."

},

{

  "id": 89,

  "category": "CompTIA A+ 220-1201",

  "question": "Which component of a laser printer uses heat and pressure to bond toner to the paper?",

  "answers": ["Drum", "Fuser", "Pickup roller", "Transfer roller"],

  "correct": 1,

  "multiple": false,

  "suggestedAnswer": "B",

  "communityAnswer": "B",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: B."

},

{

  "id": 90,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following devices provides wireless clients access to a wired network?",

  "answers": ["Access point", "Patch panel", "Hub", "Cable modem"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 91,

  "category": "CompTIA A+ 220-1201",

  "question": "Which RAID level provides striping with distributed parity and requires at least three drives?",

  "answers": ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],

  "correct": 2,

  "multiple": false,

  "suggestedAnswer": "C",

  "communityAnswer": "C",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: C."

},

{

  "id": 92,

  "category": "CompTIA A+ 220-1201",

  "question": "Which networking protocol resolves hostnames to IP addresses?",

  "answers": ["DHCP", "DNS", "SMTP", "SNMP"],

  "correct": 1,

  "multiple": false,

  "suggestedAnswer": "B",

  "communityAnswer": "B",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: B."

},

{

  "id": 93,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following is typically used to connect an internal 2.5-inch SATA SSD to a motherboard?",

  "answers": ["SATA data cable", "RJ45 cable", "HDMI cable", "USB-C cable"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 94,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following IP addresses is in the APIPA range?",

  "answers": ["10.0.0.1", "172.16.0.1", "169.254.10.20", "192.168.1.1"],

  "correct": 2,

  "multiple": false,

  "suggestedAnswer": "C",

  "communityAnswer": "C",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: C."

},

{

  "id": 95,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following computer components provides long-term nonvolatile storage?",

  "answers": ["RAM", "CPU cache", "SSD", "Registers"],

  "correct": 2,

  "multiple": false,

  "suggestedAnswer": "C",

  "communityAnswer": "C",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: C."

},

{

  "id": 96,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following port numbers is associated with HTTPS?",

  "answers": ["21", "22", "80", "443"],

  "correct": 3,

  "multiple": false,

  "suggestedAnswer": "D",

  "communityAnswer": "D",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: D."

},

{

  "id": 97,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following is used to provide power and data to a wireless access point over a single Ethernet cable?",

  "answers": ["PoE", "NFC", "SATA", "VGA"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 98,

  "category": "CompTIA A+ 220-1201",

  "question": "Which component is most commonly upgraded to improve a computer's ability to run several applications simultaneously?",

  "answers": ["RAM", "Power supply", "Sound card", "NIC"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 99,

  "category": "CompTIA A+ 220-1201",

  "question": "Which of the following is the most likely cause when a laser printer repeatedly feeds multiple sheets of paper at once?",

  "answers": ["Worn separation pad", "Low toner", "Failed fuser", "Incorrect printer driver"],

  "correct": 0,

  "multiple": false,

  "suggestedAnswer": "A",

  "communityAnswer": "A",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: A."

},

{

  "id": 100,

  "category": "CompTIA A+ 220-1201",

  "question": "A user reports that the print quality of their desk printer is poor. A technician replaces the ink cartridge, but this does not resolve the issue. Which of the following should the technician do next?",

  "answers": ["Replace the pickup rollers", "Clean the printheads", "Switch the paper type", "Replace the fuser"],

  "correct": 1,

  "multiple": false,

  "suggestedAnswer": "B",

  "communityAnswer": "B",

  "communityPercent": 100,

  "disputed": false,

  "explanation": "Answer guide suggested answer: B."
}

  // ======================================================
// REMAINING QUESTIONS: 71-462
// #100 excluded because you already added it.
// ======================================================

const Q = (
  id,
  question,
  answers,
  correct,
  multiple = false
) => ({
  id,
  category: "CompTIA A+ 220-1201",
  question,
  answers,
  correct,
  multiple,
  explanation: ""
});

const P = (id, question) => ({
  id,
  category: "CompTIA A+ 220-1201",
  question,
  answers: [],
  correct: null,
  multiple: false,
  pbq: true,
  explanation:
    "Performance-based question; save for PBQ mode."
});

const remainingQuestions = [

Q(71,
"A projector has been shutting down after 30 minutes of use, and it has a strange smell. The technician confirms the power source is not the cause of the issue. Which of the following steps should the technician take next to resolve this issue?",
[
"Replace the bulb.",
"Check the projector configuration.",
"Clean the filter.",
"Adjust the gamma settings"
],
2),

Q(72,
"A user reports that the printouts from a laser printer have lines and smudges on them. The printer is also intermittently misfeeding the paper. Which of the following components should a technician replace to address this issue?",
[
"Fuser",
"Maintenance kit",
"Corona wire",
"Toner cartridge"
],
1),

Q(73,
"A company has a main office and 20 branch offices. The company wants to have a backup network connection to allow connectivity if the main fiber connection goes down. The company does not want to create new infrastructure. Which of the following should the company use?",
[
"Cable",
"Cellular",
"DSL",
"SAN"
],
1),

Q(74,
"Which of the following drive interfaces is typically used in server systems but not in home computers?",
[
"NVMe",
"SAS",
"SATA",
"PCIe"
],
1),

Q(75,
"Which of the following could a user employ to maximize module bandwidth when selecting memory for a high-end gaming computer?",
[
"Error correction",
"RAM voltage",
"Channel configuration",
"Physical module size"
],
2),

Q(78,
"An IT specialist compares Bluetooth and NFC technologies for mobile device connectivity. Which of the following statements accurately describes a key difference between the two?",
[
"NFC is faster than Bluetooth when transferring large files between devices.",
"NFC consumes more power than Bluetooth, making it less suitable for devices in which battery conservation is crucial.",
"NFC requires pairing with the receiving host, whereas Bluetooth just needs the available connection.",
"NFC works best within a few centimeters, but Bluetooth can connect devices that are up to 32ft (10m) apart."
],
3),

Q(79,
"A help desk technician needs to work on a high-volume printer. Users have reported occasional paper jams and smudges appearing on printed documents. Which of the following steps should the technician do next to address these issues?",
[
"Perform a full factory reset.",
"Check and clean the rollers.",
"Change all the ink or toner cartridges.",
"Replace the fuser."
],
1),

Q(80,
"A user reports that a phone’s integration features consistently stop and restart when charging the phone in a car. A technician checks the phone and finds no malicious applications. Which of the following should the technician do to fix the issue?",
[
"Clean the connection port.",
"Replace the cable with a longer cable.",
"Reinstall MDM software on the phone.",
"Discharge the battery."
],
0),

Q(81,
"A technician sets up a conference room projector that begins to intermittently flicker. The projector is connected to a laptop via an HDMI cable. When the technician connects the laptop to a monitor using the same cable, the issue persists. Which of the following steps should the technician take to troubleshoot the display issue?",
[
"Adjust the resolution settings on the laptop.",
"Swap the HDMI cable with a new one.",
"Replace the projector.",
"Check and configure the refresh rate settings."
],
3),

Q(82,
"A SOHO customer runs an OS on a bare-metal server that has been EOL for almost a decade and is showing signs of failure. The application meets all the customer’s needs, and they want to continue using it. However, the developer went out of business, and there is no way to upgrade it. A technician does not think the OS will run on modern hardware. Which of the following will allow the customer to use the application long-term?",
[
"Continue to use the current system until failure.",
"Virtualize the entire system under a compatible hypervisor.",
"Containerize the application in a multitenant cloud environment.",
"Clone the disks and run the application from a USB enclosure."
],
1),

Q(83,
"Which of the following network services is used to assign an IP address to a network host?",
[
"DHCP",
"DNS",
"LDAP",
"SMTP"
],
0),

Q(84,
"Which of the following ports is commonly used for remote desktop connections?",
[
"137",
"445",
"3389",
"4443"
],
2),

Q(85,
"Images and text from a laser printer smudge if touched. Which of the following should a technician do to resolve the issue?",
[
"Check the toner levels.",
"Install a maintenance kit.",
"Replace the fuser.",
"Clean the pickup rollers."
],
2),

Q(86,
"A user reports their company-provided smartphone does not have internet access when the user is in the parking lot. Which of the following should a technician check first?",
[
"3G/4G/5G/LTE settings",
"SIM connection",
"Hotspot capability",
"GPS configuration"
],
0),

Q(87,
"Every day for a week, when a user turns on their computer, the time is wrong. A technician corrects the time, but the issue happens again. Which of the following is most likely the cause of the issue?",
[
"A failing NIC",
"Misconstrued NTP settings",
"Incorrect time zone",
"A faulty CMOS battery"
],
3),

Q(88,
"A company decides to subscribe to a cloud service to provide email for its employees. Which of the following cloud models is the company adopting?",
[
"PaaS",
"SaaS",
"DaaS",
"IaaS"
],
1),

Q(90,
"A customer reports that a workstation has no internet connectivity. A technician confirms the port is disabled. Which of the following is most likely responsible for the issue?",
[
"Patch panel",
"Physical NIC",
"Managed switch",
"Stand-alone firewall"
],
2),

Q(91,
"A company is testing the latest model of a laptop. After turning on the laptop, there is a noticeable burning smell. Which of the following steps should a technician take to troubleshoot the laptop issue? (Choose two.)",
[
"Turn it off and disconnect all power sources",
"Submit an emergency request to the local facilities manager",
"Check for foreign objects, liquid spills, and internal damage.",
"Contact the vendor and submit a return request.",
"Remove the device from the MDM",
"Try an alternate AC adapter."
],
[0,2],
true),

Q(92,
"A technician needs to figure out why a laser printer is intermittently not feeding paper to print. The technician verifies the issue by running several copy-and-print tests. Which of the following should the technician do next?",
[
"Update the printer drivers.",
"Select the correct paper size.",
"Clean the pickup rollers.",
"Replace the toner cartridge."
],
2),

Q(93,
"Which of the following can be used to logically segment networks?",
[
"MAC",
"VLAN",
"NIC",
"DSL"
],
1),

Q(94,
"After troubleshooting a computer's connectivity, the network team determines there is a port-flapping issue. After plugging the patch cable into a different port, the issue persists. Which of the following troubleshooting steps should a technician take next to resolve the issue?",
[
"Convert the patch cable to a crossover cable",
"Test the patch cable from the computer to the network closet",
"Verify the length of the patch cable meets current standards",
"Replace the patch cable from the device to the wall"
],
1),

Q(95,
"Which of the following statements best summarize managed vs unmanaged switches?",
[
"Unmanaged switches are generally more expensive.",
"Unmanaged switches have more security capabilities",
"Unmanaged switches start working as soon as they are plugged in to the network.",
"Managed switches have more features",
"Managed switches require no configuration.",
"Managed switches consume less power."
],
[2,3],
true),

Q(96,
"A user is testing a new OS that is contained on a USB drive. The user wants the new OS to load automatically when the computer is turned on. Which of the following should the user configure?",
[
"BIOS password",
"Trusted Platform Module",
"USB permissions",
"Boot options"
],
3),

Q(97,
"A technician is setting up a locally hosted environment for internal developers who need concurrent access to a wide array of test OSs. Which of the following would best fulfill this requirement?",
[
"Hypervisor",
"SaaS platform",
"Multiboot server computer",
"Sandbox"
],
0),

Q(98,
"An employee’s screen keeps flashing. Sometimes the picture goes out and comes back. The employee checks the power cord and confirms the device is plugged in fully. Which of the following should a technician check for first?",
[
"Loose video cable",
"Failing graphics card",
"Conflicting drivers",
"Swollen motherboard capacitor"
],
0),

Q(99,
"A technician is setting up a scan-to-SMB function on a multifunction printer. Which of the following connection types should the technician configure?",
[
"Email server",
"SFTP connection",
"Network share",
"Print services"
],
2),

Q(101,
"An end user reports that their laptop shuts down when they undock it. Even when using a new charging cable, the issue persists. Which of the following should the technician do next?",
[
"Flash the BIOS",
"Update the drivers",
"Try a different charger",
"Replace the battery"
],
3),

Q(102,
"A company provides cell phones to employees who travel internationally. An employee brings their phone to the help desk so the necessary equipment can be installed. However, the technician cannot install any new hardware on the phone. Which of the following will the technician require so the phone can connect to a different provider?",
[
"USB-C",
"SD card",
"eSIM",
"MDM"
],
2),

Q(103,
"Which of the following internet connection types provides the fastest speeds and greatest coverage in less populated areas with minimal infrastructure?",
[
"Fiber",
"Cable",
"DSL",
"Cellular"
],
3),

Q(104,
"Which of the following ports should a technician disable to increase the security of remote connectivity?",
[
"22",
"23",
"25",
"53"
],
1),

Q(105,
"A network operations analyst receives an automated alert regarding a server with an array. The analyst walks over to the server and sees a blinking orange light at the hard disk bay. The server is configured for RAID 1. Which of the following should the analyst do to resolve this issue?",
[
"Change the array to RAID 0",
"Undo the array and create a new one",
"Update RAID card firmware",
"Replace the hard disk and rebuild the array"
],
3),

Q(106,
"A user returns from a trip and discovers a computer that is connected to the LAN times out intermittently. Upon investigation, a technician finds the RJ45 pin is not properly terminated. Which of the following networking tools is most appropriate to fix the issue?",
[
"Toner probe",
"Cable tester",
"Punchdown",
"Crimper"
],
3),

Q(107,
"A technician upgrades a PC with two DIMMs, for a total of 32GB. After installing the two DIMMs, the user notices the OS is reporting only 16GB. Which of the following tasks should the technician perform to resolve the issue in the most rapid, cost-effective way possible?",
[
"Roll back recent system updates",
"Reinstall RAM in different slots",
"Update the OS to the latest version",
"Replace the faulty motherboard"
],
1),

Q(108,
"Which of the following internet connection types is the best for extremely high data transfer with symmetrical upload and download speeds?",
[
"DSL",
"Cellular",
"Fiber",
"Satellite"
],
2),

Q(109,
"A company wants to have fast read speeds for its locally stored data. Which of the following configurations has the lowest cost to fulfill this requirement?",
[
"RAID 0",
"RAID 1",
"RAID 5",
"RAID 10"
],
0),

Q(110,
"Which of the following connectors can be used to charge most modern mobile devices and may have the capacity to send data audio, and video?",
[
"Lightning",
"USB-C",
"MicroUSB",
"MiniUSB"
],
1),

Q(111,
"Which of the following devices has ACL capabilities?",
[
"PoE injector",
"DSL",
"Firewall",
"Unmanaged switch"
],
2),

Q(112,
"A user would like to connect a laptop to a monitor, keyboard, and mouse when in the office. The user prefers to use as few cables as possible. Which of the following would best achieve that goal?",
[
"Bluetooth",
"Managed switch",
"Docking station",
"Near-field communication"
],
2),

Q(113,
"A user keeps getting an error message when trying to print a letter. The printer is normally used to print cards and invitations. The user tries printing from a different computer, but the issue persists. Which of the following should the user do to resolve the issue?",
[
"Print fewer pages.",
"Print on card stock.",
"Replace the rollers.",
"Change the paper tray setting."
],
3),

Q(114,
"Which of the following should a company use to implement automatic time synchronization?",
[
"DHCP",
"UTM",
"NTP",
"AAA"
],
2),

Q(115,
"An end user reports that their laptop has a blank screen. A technician observes the keyboard lights are on, and the fan is running. Which of the following should the technician do next?",
[
"Check the display ribbon cable.",
"Contact vendor support.",
"Replace the inverter.",
"Connect to an external monitor."
],
3),

Q(116,
"Which of the following minimizes the time it takes to connect a display, keyboard, mouse, and network cable to a laptop?",
[
"Lightning interface",
"Port replicator",
"USB hub",
"Bluetooth"
],
1),

Q(117,
"A multifunction printer in a small office recently had issues with scan-to-email functionality. The manufacturer has an update ready to fix the printer issues. Which of the following would a technician most likely deploy to remediate the issue?",
[
"Firmware",
"Driver",
"OS update",
"HSM"
],
0),

Q(118,
"A technician is setting up a new SOHO wireless router. According to security best practices, which of the following should the technician do first?",
[
"Enable encryption.",
"Assign a static IP.",
"Change the default password.",
"Reset the router."
],
2),

Q(119,
"Which of the following can carry data and electricity to network devices? (Choose two.)",
[
"Router",
"Injector",
"Cable modem",
"Access point",
"PoE",
"Unmanaged switch"
],
[1,4],
true),

Q(120,
"A company deploys its infrastructure in self-operated data centers. The company recently migrated some of its applications to a public cloud. Which of the following most accurately describes the cloud model the company is following?",
[
"Public",
"Hybrid",
"Community",
"Private"
],
1),

Q(121,
"A technician is setting up a new multifunction device to be used over a shared network connection. Copier functions need to be restricted to only office employees. Which of the following should the technician perform after configuring the device to use a print server that exists on the domain?",
[
"SMTP implementation",
"Firmware update",
"User authentication",
"SMB configuration"
],
2),

Q(122,
"Which of the following networking devices is used to create a mesh network?",
[
"Modem",
"DSL",
"Access point",
"ONT"
],
2),

Q(123,
"Which of the following display technologies typically provides the highest contrast?",
[
"IPS",
"OLED",
"TN",
"VA"
],
1),

Q(124,
"Which of the following types of RAM would most likely be used in a server?",
[
"SODIMM",
"ECC",
"Unbuffered",
"DDR3"
],
1),

Q(125,
"A company migrates a local application to an internal cloud platform. Which of the following best describes this cloud platform?",
[
"Private",
"Public",
"Community",
"Hybrid"
],
0),

Q(126,
"A user purchases a new mobile phone and tries to connect it to the corporate communications and email applications without success. Which of the following should a technician do to allow the phone to connect?",
[
"Configure biometric security settings",
"Turn on LTE hotspot connectivity",
"Enroll the device in the MDM software.",
"Complete the company's BYOD training process"
],
2),

Q(127,
"Which of the following is the ability to automatically increase and decrease instances based on demand?",
[
"Availability",
"Scalability",
"Multitenancy",
"Elasticity"
],
3),

Q(128,
"A technician sets up secure print and configures an NFC device that will authenticate users for access. Which of the following will the NFC device most likely use to authenticate?",
[
"Badging",
"Password",
"Passcode",
"Biometrics"
],
0),

Q(129,
"A customer recently lost data due to several unexpected shutdowns. Data integrity is important to the customer. Which of the following features should the technician choose to prevent data loss?",
[
"Redundant power supply",
"Uninterruptible power supply",
"Modular power supply",
"High-efficiency power supply"
],
1),

Q(130,
"Which of the following allows a physical server to host multiple virtual machines?",
[
"Cross-platform virtualization",
"Hypervisor",
"Sandbox",
"SaaS"
],
1),

Q(131,
"Which of the following virtualization technologies is best suited for running microservices?",
[
"Containers",
"VDI",
"Type 2 hypervisors",
"Type 1 hypervisors"
],
0),

Q(132,
"An IT specialist sets up a new computer for a user who requires a high-end video card and the fastest hard drive possible. Which of the following connectors should the specialist verify are available on the motherboard? (Choose two.)",
[
"Molex",
"NVMe",
"SATA",
"FireWire",
"USB-C",
"PCIe"
],
[1,5],
true),

Q(133,
"Which of the following tools is best to track where an Ethernet cable is patched?",
[
"Crimper",
"Punchdown tool",
"Cable stripper",
"Toner probe"
],
3),

Q(134,
"A user’s phone does not respond to touch. A technician inspects the phone but does not see any evidence of physical damage. The technician restarts the device, which does not fix the issue. Which of the following components should the technician examine next?",
[
"Battery",
"Screen",
"Stylus",
"Digitizer"
],
3),

Q(135,
"A user is having trouble with the location services on their smartphone. Location-based applications show incorrect positions when the user is traveling. This issue affects the user's ability to navigate and use location-dependent applications. Which of the following is the best way to resolve this issue?",
[
"Downloading a third-party mapping application",
"Resetting the network settings",
"Enabling Wi-Fi to assist GPS",
"Restarting the smartphone"
],
2),

Q(136,
"A user can connect their laptop to the internet in the main office. However, when the user places the laptop on top of a motor on the factory floor, there is no internet connectivity. Which of the following is the most likely cause of this issue?",
[
"Jitter",
"Insufficient power levels",
"External interference",
"High latency"
],
2),

Q(137,
"Which of the following is a characteristic of an NVMe drive?",
[
"M.2 interface",
"3.5in (8.9cm) external",
"7,200rpm",
"Molex connector"
],
0),

Q(138,
"Which of the following connector types is associated with coaxial terminations serving cable internet deployments?",
[
"DB9",
"ST",
"F-type",
"RJ45"
],
2),

Q(139,
"A technician receives several complaints from the same office about VoIP calls sounding broken up, being difficult to hear, and having lagging audio. The technician arrives on-site and runs an internet speed test on several wired and wireless computers. Internet speed seems normal throughout the office. Which of the following should the technician do to fix the call issues?",
[
"Enable QoS in the router",
"Configure PoE on the switch",
"Change the encryption from WPA3 to WPA2",
"Turn on MAC address filtering"
],
0),

Q(140,
"A technician needs to update a web server’s IPv4 address in a DNS server. Which of the following records should the technician update?",
[
"AAAA",
"MX",
"CNAME",
"A"
],
3),

Q(141,
"A technician needs to prepare a conference room for a meeting. The technician connects the laptop to the LCD projector and audio system, and then verifies the connectivity of each device. The meeting begins, but the visual presentation suddenly cuts off 30 minutes later. The audio continues to play without interruption. The technician brings in a backup laptop and connects it to the projector. The meeting continues without issue for 15 minutes until the presentation suddenly cuts off again. Which of the following should the technician do to resolve this issue?",
[
"Check the laptop's audio output",
"Verify the input source.",
"Examine the display for burn-in",
"Inspect the cables for damage.",
"Clean or replace the filter"
],
4),

Q(142,
"A technician installs an upgraded wireless access point. The technician then notices the activity light comes on briefly and turns off. The access point continues to exhibit this behavior repeatedly and does not come online. Which of the following is the most likely cause of this issue?",
[
"High latency",
"Port flapping",
"External interference",
"Channel conflict"
],
1),

Q(143,
"A technician is setting up a workstation. Which of the following settings should the technician configure to ensure that users can connect to the network? (Choose three.)",
[
"API РА",
"Gateway",
"IP address",
"Subnet mask",
"Static routes",
"UPnP settings",
"NAT rules",
"MAC filters"
],
[1,2,3],
true),

Q(144,
"A major retailer is moving its online shopping website to the cloud and wants to expand its server resources as needed during busier shopping days. Which of the following should the retailer consider?",
[
"Location",
"Elasticity",
"Availability",
"Multitenancy"
],
1),

Q(145,
"A network printer does not release a user's final print job from the queue, but the user's other print jobs successfully printed a few moments before. Other users can print without issues. Which of the following should the user check first to solve the issue?",
[
"If the print job is configured to a tray or manual feed",
"If the computer and printer are connected to the same network",
"If the print queue is full and will not allow additional jobs",
"If the printer has stopped due to empty trays"
],
0),

Q(146,
"A technician is troubleshooting a workstation that repeatedly shuts down within ten minutes of being turned on. The technician notices a loud clicking sound coming from inside the case. Which of the following components should the technician check first?",
[
"Exhaust fan",
"Capacitors",
"CPU fan",
"Intake fan"
],
2),

Q(147,
"Which of the following is related to the creation of a secured communication channel between workstations in different locations and is supported by credentials for authentication?",
[
"DHCP",
"CNAME",
"VLAN",
"VPN"
],
3),

Q(148,
"Which of the following allows for a beam of light to transmit data through a flexible cable?",
[
"Coaxial",
"HDMI",
"Thunderbolt",
"Single-mode fiber"
],
3),

Q(149,
"An IT specialist is setting up a new custom computer. The specialist wants to minimize the number of power cables to keep the internal components organized and uncluttered. Which of the following power supply types should the specialist use?",
[
"Modular",
"Redundant",
"Linear",
"External"
],
0),

Q(150,
"A company policy change requires all computers to be encrypted. Which of the following technologies should a technician configure to meet this new requirement?",
[
"NVMe",
"RISC",
"ARM",
"TPM"
],
3),

Q(151,
"A company wants to use cloud services with the requirement that data will reside on physical hardware that will not be shared with other companies. Which of the following meets this requirement?",
[
"Dedicated resources",
"Elasticity",
"Hybrid cloud",
"SaaS"
],
0),

Q(152,
"A user connects a company-issued laptop to a 4K TV but can only get 1080p resolution on the TV. The technician confirms that the laptop is capable of producing a 4K output. Which of the following the most likely cause of the issue?",
[
"The TV firmware is out of date.",
"The HDMI cable version is incorrect.",
"The laptop firmware is not current.",
"The CPU cannot keep up with the transcoding."
],
1),

Q(153,
"Which of the following is an isolated virtual machine?",
[
"Sandbox",
"Hypervisor",
"Container",
"VDI"
],
3),

Q(154,
"A user cannot see the office multifunction printer in their laptop's print options. They have printed to the device in the past successfully. The user’s laptop is connected to the guest wireless network. Other users on both wireless and wired computers can see and print to the printer. Which of the following will fix the issue?",
[
"Power cycle the printer to refresh connectivity",
"Reset the closest wireless AP",
"Download the printer driver from the manufacturer's website",
"Connect the laptop to the corporate Wi-Fi"
],
3),

Q(155,
"A technician receives a notification after a network outage that indicates the printer is not reachable. Which of the following printer settings should the technician implement to prevent this issue in the future?",
[
"Gateway",
"Static IP",
"APIPA",
"DHCP"
],
1),

Q(156,
"Which of the following network technologies is used for the operation of physical access control systems?",
[
"802.1X",
"VPN",
"GPS",
"RFID"
],
3),

Q(157,
"A technician wants to evaluate several desktop Linux OSs simultaneously. Which of the following is the best way to accomplish this task?",
[
"Container",
"Sandbox",
"Hypervisor",
"VDI"
],
2),

Q(158,
"A user asks a technician for assistance with a printer that has stopped printing. The user states that the print jobs are generated from a website and are difficult to re-create. When the technician remotes into the user's computer, they can see many jobs in the queue. The issue persists after the user performs a hard reset of the printer. Which of the following will most likely fix the issue?",
[
"Restarting the print spooler service on the local computer",
"Deleting all the jobs and having the user restart their computer",
"Making sure the printer is using the latest PCL driver",
"Updating the manufacturer's firmware on the printer"
],
0),

Q(159,
"A user reports that a laptop runs very slowly when documents are opened and saved. The user got the laptop within the past year. A technician finds the following specifications for the laptop: Intel Core i5-1235U - Windows 11 Home - Intel Iris Xe Graphics - 1TB 7200RPM 16GB: 2 x 8GB DDR4 2666. The technician thinks a minor upgrade should solve the slow performance issue. Which of the following components should the technician install?",
[
"Gaming GPU",
"i7 CPU",
"64GB RAM",
"2.5 SATA SSD"
],
3),

Q(160,
"Which of the following is an example of SaaS?",
[
"Videoconferencing",
"Managed VDI",
"Hosted database",
"Hypervisor"
],
0),

Q(161,
"A computer is experiencing random shutdowns. A technician notices that the fans on the computer work but are noisy. The CPU temperature is about 122°F (50°C) when the computer is started but rises to 208°F (98°C) when applications are opened. Which of the following would most likely fix this issue?",
[
"Replacing the power supply",
"Installing a high-performance heat sink",
"Adjusting the fan settings",
"Adding more RAM to the computer"
],
1),

Q(162,
"A technician is troubleshooting an HDMI over Ethernet solution. The network link lights on the transmitter and receiver are both active. The TV that is connected to the receiver unit is getting audio, but video is intermittently flashing. Which of the following should the technician check next to find the source of the issue?",
[
"HDMI signal source",
"PoE power",
"Firmware on TV",
"Network cable termination"
],
3),

Q(163,
"A customer reports that internet browsing on their smartphone is fast at the beginning of the month but significantly slows down toward the end of the month. A technician examines the phone and finds multiple free cloud backup services running, with several gigabytes of personal data spread across each. Data availability is important to the customer. Which of the following is the best way to resolve the customer's issue?",
[
"Disabling all cloud backup services except one",
"Installing an additional SD card for photos and videos",
"Expanding the cache storage to consolidate data",
"Configuring data synchronization only over Wi-Fi connections"
],
3),

Q(164,
"A user reports slow performance when saving documents locally on a computer. A technician reviews the logs and notices entries showing S.M.A.R.T. errors. Which of the following actions should the technician take next?",
[
"Reseat all SATA cables.",
"Replace the hard drive.",
"Defragment the hard drive.",
"Run Disk Cleanup.",
"Install a heat sink on the hard drive."
],
1),

Q(165,
"Which of the following cable types is used to connect a display?",
[
"DVI",
"RJ45",
"SATA",
"USB 1.1"
],
0),

Q(166,
"A user is having issues displaying the contents of their laptop screen on a projector. The laptop is connected using an HDMI cable, but the screen displays a message indicating there is no signal. Which of the following should the technician do first to diagnose the issue?",
[
"Check the projector input sources.",
"Replace the HDMI cable.",
"Change the resolution of the screen to 1080p.",
"Verify the HDMI port is not damaged."
],
0),

Q(167,
"Which of the following best describes the purpose of a firewall?",
[
"To connect to Wi-Fi",
"To assign IP addresses",
"To route network packets locally",
"To block unwanted traffic"
],
3),

Q(168,
"A customer's laptop has been randomly shutting down. The laptop charges intermittently, and the screen dims when the laptop is not charging. Which of the following is the most likely cause of the issue?",
[
"Malware",
"Failed digitizer",
"Faulty battery",
"Damaged power port"
],
2),

Q(169,
"Which of the following DNS record types is used to identify an email server?",
[
"AAAA",
"CNAME",
"TXT",
"MX"
],
3),

Q(170,
"Which of the following is used to register inputs on a touch-screen monitor?",
[
"Inverter",
"Digitizer",
"OLED",
"LCD"
],
1),

Q(171,
"A user's company-issued smartphone is swollen and will not fit in its protective enclosure. Which of the following would a technician most likely do?",
[
"Replace the battery.",
"Upgrade the RAM.",
"Change the case.",
"Restore to the factory settings."
],
0),

Q(172,
"A customer uses multipart forms in a dot matrix printer. They report that nothing prints on the top page of the multipart form, but the bottom pages print fine. Which of the following should a technician do to resolve the issue?",
[
"Clean the printhead.",
"Install a maintenance kit.",
"Replace the ribbon.",
"Check for broken pins."
],
2),

Q(173,
"Which of the following uses a small and portable private network to allow multiple wireless devices to share an internet connection?",
[
"Bluetooth",
"Hotspot",
"Tethering",
"NFC"
],
2),

Q(174,
"Which of the following DNS records should a technician configure to allow domains that are not owned by the company to send messages on the company's behalf?",
[
"SPF",
"MX",
"CNAME",
"DMARC",
"DKIM"
],
0),

Q(175,
"An office is experiencing frequent wireless outages and slow network speeds. A technician confirms that all wireless devices are experiencing the same symptoms. Which of the following should the technician do to determine whether the issue is external or internal?",
[
"Restart all devices and ensure they join the workgroup.",
"Check the DNS configuration to make sure it is correct.",
"Connect a machine using Ethernet and test connectivity.",
"Perform a policy update on Active Directory and reset network settings."
],
2),

Q(176,
"Which of the following connectors supports High-bandwidth Digital Content Protection (HDCP)?",
[
"DVI-A",
"F-type",
"VGA",
"DisplayPort"
],
3),

Q(177,
"A shared printer experiences an outage when users submit numerous print jobs at the same time. Which of the following would an engineer most likely do after verifying network connectivity?",
[
"Reboot the server.",
"Reinstall the printer drivers.",
"Reset the printer to factory settings.",
"Restart the spooler service."
],
3),

Q(178,
"Which of the following is designed for interaction to take place via an OS running on the host rather than the host directly?",
[
"Type 1 hypervisor",
"Type 2 hypervisor",
"Elasticity",
"Multitenancy"
],
1),

Q(179,
"A user's wireless headset shows a \"connected\" status when turned on, but the Bluetooth list on the user's phone shows that the headset is \"not connected.\" Which of the following should the technician do?",
[
"Enter the PIN.",
"Turn off Wi-Fi.",
"Re-pair the devices.",
"Enable Bluetooth."
],
2),

Q(180,
"Which of the following should be considered first when looking for replacement storage?",
[
"Form factors",
"RAID",
"Spindle speeds",
"NVMe"
],
0),

Q(181,
"Which of the following technologies should a company implement to track its asset inventory?",
[
"RFID",
"NFC",
"Bluetooth",
"Wi-Fi"
],
0),

Q(182,
"A developer wants to ensure that their critical data is protected from a hard drive failure. Their workstation has two hard drives. Which of the following should the developer use for their workstation?",
[
"RAID 0",
"RAID 1",
"RAID 5",
"RAID 10"
],
1),

Q(183,
"A technician needs to deploy a router at a home office to provide internet access. The WAN port is required to connect to a static, public IP address assigned by the ISP. Which of the following should the ISP assign?",
[
"10.1.1.1",
"172.16.0.1",
"192.30.0.1",
"192.168.10.1"
],
2),

Q(184,
"Which of the following devices forwards traffic based on MAC addresses?",
[
"Switch",
"Router",
"Firewall",
"Gateway"
],
0),

Q(185,
"A company purchases a new printer for an international office. When a technician installs the printer, the display only shows a white screen. Which of the following should the technician do to troubleshoot the issue?",
[
"Check network port connectivity.",
"Verify the printer's power requirements.",
"Ensure the printer is in the correct organizational unit.",
"Upgrade the printer's firmware."
],
1),

Q(186,
"Which of the following connection methods allows a mobile device to share an LTE connection with other nearby devices?",
[
"Bluetooth",
"NFC",
"Cellular",
"Hotspot"
],
3),

Q(187,
"When traveling in another country, a user is unable to receive calls or emails on their mobile phone. Which of the following should the technician verify is enabled on the user's device?",
[
"Bluetooth connectivity",
"International eSIM",
"Personal hotspot",
"Domestic calling plan"
],
1),

Q(188,
"The output from a dot matrix printer has become lighter over time. Which of the following should a technician do to fix the issue?",
[
"Clean the printhead.",
"Replace the ribbon.",
"Install a maintenance kit.",
"Calibrate the alignment."
],
1),

Q(189,
"When installing a network printer, a technician needs to ensure the printer is available after a network is restarted. Which of the following should the technician set up on the printer to meet this requirement?",
[
"Static IP address",
"Private address",
"Wi-Fi on the printer",
"Dynamic addressing"
],
0),

Q(190,
"A technician needs to configure a scan-to-folder capability on a multifunction device. Which of the following services does the technician need to enable this capability?",
[
"SMB",
"FTP",
"SSH",
"SMTP"
],
0),

Q(191,
"A small business is setting up a new network for its office. The business needs to select the appropriate device to help isolate traffic between staff and guest devices. Which of the following best meets this need?",
[
"Access point",
"Network bridge",
"Managed switch",
"Load balancer"
],
2),

Q(192,
"Which of the following technologies allows for a segmented environment in which malicious indicators can be inspected safely?",
[
"Hypervisor",
"Sandbox",
"Cross-platform virtualization",
"Container"
],
1),

Q(193,
"A technician needs to change the VLAN configuration for all the desktops in the sales office. Which of the following devices should the technician connect to in order to complete the task?",
[
"Modem",
"Hub",
"PoE injector",
"Managed switch"
],
3),

Q(194,
"A user ran out of USB ports on their laptop but would like to plug in more devices. Which of the following technologies is the best for them to use?",
[
"Near-field communication",
"Bluetooth",
"USB receiver",
"Port replicator"
],
3),

Q(195,
"Which of the following DNS records displays the destination of incoming email on a domain?",
[
"CNAME",
"TXT",
"MX",
"AAAA"
],
2),

Q(196,
"A developer needs to test a new software application in multiple, diverse environments. The company wants to use the least-expensive testing method but still get the full experience of the target environments. Which of the following should the developer use?",
[
"Containers",
"Dual boot",
"Type 2 hypervisor",
"Sandbox"
],
2),

Q(197,
"A company plans to decommission a legacy application in one year. The company wants to decommission the current environment. Which of the following is the best migration method?",
[
"Relocating the physical server to a colocated data center",
"Performing a physical-to-virtual conversion and host on IaaS",
"Deploying all components using PaaS",
"Taking a backup and shutting down the server"
],
1),

Q(198,
"A technician needs to replace a laptop's display assembly. Which of the following should the technician do to complete this task?",
[
"Reattach the heat sinks.",
"Reconnect the wireless antennas.",
"Install a new CPU fan.",
"Reset the BIOS to default settings."
],
1),

Q(199,
"A company wants to enable access to corporate email on smartphones. Employees will choose from a list of supported devices but must install software that separates corporate and personal data. Which of the following should the company implement to achieve this goal?",
[
"Encryption",
"Network access control",
"Mobile device management",
"Endpoint protection"
],
2),

Q(200,
"An IT support specialist needs to configure several laptops to access local resources wherever the employees are while in the office. Which of the following would best meet this requirement?",
[
"Configure cellular location services to facilitate device identification.",
"Set up a Wi-Fi connection with a common SSID.",
"Enable Bluetooth connectivity in all laptops.",
"Create roaming profiles for each laptop."
],
1),

Q(201,
"A user's computer can connect to internal network resources but cannot access websites on the internet. Other users on the same network do not have this issue. Which of the following should a technician do first to troubleshoot the issue?",
[
"Verify the computer's DNS settings.",
"Replace the network cable.",
"Restart the DHCP server.",
"Adjust the firewall rules on the router."
],
0),

Q(202,
"Which of the following requires the connector to be attached in a specific orientation?",
[
"HDMI",
"USB-C",
"Lightning",
"Coaxial"
],
0),

Q(203,
"A user is conducting a meeting using a monitor. However, the user notices a transparent image of a clock over the presentation. The technician thinks that the issue is caused by burn-in. Which of the following should the technician do to test this theory?",
[
"Replace the DisplayPort cable and verify that the image is gone.",
"Turn off the monitor to check if the image is still present.",
"Adjust the refresh rate and examine the monitor.",
"Use a software tool to attempt the recovery of dead pixels."
],
1),

Q(204,
"A user accidentally leaves their smartphone in a taxi. Which of the following can help the user locate the misplaced smartphone?",
[
"NFC",
"Bluetooth",
"Satellite",
"DSL"
],
2),

Q(205,
"Users have noticed their devices are frequently disconnecting or experiencing slow speeds in the company lobby, but the Wi-Fi signal is strong. Which of the following is the first step to troubleshoot the issue?",
[
"Increase the number of access points throughout the building to boost the overall signal strength.",
"Inspect the area for possible sources of interference or physical obstructions that could be disrupting the signal.",
"Recommend that all affected users switch to a wired connection to avoid wireless instability.",
"Change the wireless network frequency from 2.4GHz to 5GHz to enhance the connection stability and speed."
],
1),

Q(206,
"Which of the following describes the function of an injector?",
[
"To provide only data connectivity",
"To supply power across a cable",
"To improve wireless performance",
"To extend a network connection"
],
1),

Q(207,
"A technician needs to provide equipment for an international contractor. Which of the following cables would most likely change depending on the equipment's destination?",
[
"Power",
"Ethernet",
"FireWire",
"USB"
],
0),

Q(208,
"A customer is able to print most documents with their USB inkjet printer, but the system is unresponsive when printing a certain report from a custom application. Nothing will print until the computer is restarted and the printer is power cycled. A technician remotes into the PC and confirms that the spooler stops working when this report is sent. After clearing the spooler and reinstalling the drivers from the manufacturer's website, the issue persists. No other sites using the application report similar issues. Which of the following is most likely causing the issue?",
[
"The manufacturer is curating content before it reaches the device to preserve ink.",
"The application has a bug that the developer needs to address.",
"The system is using the postscript language instead of the PCL.",
"Personal preferences have changed and documents with graphics are now online-only."
],
1),

Q(209,
"A small business owner purchases a building and wants to set up an internet connection. A technician examines the target network room and discovers a coaxial wall jack. Which of the following internet types would the technician most likely recommend for the new business?",
[
"Fiber",
"Satellite",
"DSL",
"Cable"
],
3),

Q(210,
"Which of the following is an advantage of using the 2.4GHz wireless frequency?",
[
"Communication between devices without external power",
"Security for connections in close proximity",
"Minimized structural interference",
"Increased channel options"
],
2),

Q(211,
"Which of the following is an advantage of a display using mini LEDs for its backlight?",
[
"Increased dimming zones",
"Faster refresh rate",
"Higher color gamut",
"Reduced latency"
],
0),

Q(212,
"Which of the following best characterizes a plenum-rated cable?",
[
"Resistant to fire",
"Avoids electromagnetic interference",
"Exclusively used for external installations",
"Up to 1GB of speed"
],
0),

Q(213,
"A technician is configuring a new office network for a customer. Which of the following subnets should the technician use for the local network?",
[
"52.84.52.0/25",
"85.159.80.0/26",
"172.31.88.0/24",
"195.205.143.160/27"
],
2),

Q(214,
"Which of the following systems most likely contains ECC memory?",
[
"A high-end gaming console",
"A file server",
"A smartphone",
"A laptop"
],
1),

Q(215,
"A technician must install a printer at a corporate office for all employees to use. Which of the following is the best option?",
[
"Print server",
"Bluetooth printing",
"Cloud printing",
"Wi-Fi Direct"
],
0),

Q(216,
"Which of the following services are typically provided by a networked host to facilitate file sharing across different OSs? (Choose two.)",
[
"NTP",
"SMB",
"IMAP",
"FTP",
"RDP",
"LDAP"
],
[1,3],
true),

Q(217,
"A technician is configuring a laptop that will be used in different locations. Which of the following IP configurations is the most appropriate?",
[
"DHCP reservation",
"APIPA",
"Static",
"Dynamic"
],
3),

Q(218,
"A drive for a RAID 1 array fails. Users are concerned that information could be lost. Which of the following is the best way to manage the situation?",
[
"Repairing and reinstalling the defective disk to recover any files",
"Discarding the defective disk without further action",
"Replacing the defective disk and syncing the new one so that all files are retained",
"Finding the latest backup of the legacy server and restoring it to transfer the files"
],
2),

Q(219,
"A technician needs to replace a failed computer power supply. The customer wants to minimize the amount of heat the computer generates. Which of the following specifications should the technician recommend?",
[
"Higher wattage",
"Redundancy",
"Lower input voltage",
"Better energy efficiency"
],
3),

Q(220,
"A user's smartphone battery drains faster than usual even when not in use. The smartphone also feels unusually hot. Which of the following should be done first to troubleshoot the issue?",
[
"Check for applications that are using excessive background resources.",
"Replace the smartphone’s battery with a new one.",
"Create a backup and perform a factory reset on the smartphone.",
"Disable Wi-Fi and Bluetooth."
],
0),

Q(221,
"Which of the following technologies has the shortest range?",
[
"2.4GHz",
"NFC",
"3G",
"Bluetooth"
],
1),

Q(223,
"A company purchases a SOHO router for a small office. The new router does not have DHCP. Which of the following address types should the company use so that all computers can communicate on the network?",
[
"Static",
"Public",
"Dynamic",
"IPv6"
],
0),

Q(224,
"A technician is enabling BitLocker. Which of the following is required to accomplish this task?",
[
"TPM",
"SAN",
"ARM",
"HSM"
],
0),

Q(225,
"Which of the following cloud types should be used when minimizing cost is the priority?",
[
"Dedicated",
"Shared",
"Private",
"Hybrid"
],
1),

Q(226,
"A customer reports that the output from their thermal receipt printer has vertical white lines. Which of the following would most likely resolve this issue?",
[
"Replacing the ink cartridge",
"Using the correct paper type",
"Installing a maintenance kit",
"Cleaning the heating element"
],
3),

Q(227,
"A user’s laptop is constantly printing pages with random characters. The user makes multiple attempts to resend the print job but gets the same result. Which of the following should the technician do next to troubleshoot this issue?",
[
"Download the correct printer driver to the laptop and configure it.",
"Update the laptop’s anti-malware software and scan the system.",
"Reimage the laptop with the last-known working configuration.",
"Check the laptop for BIOS updates and install the latest version."
],
0),

Q(228,
"While using a laptop and Bluetooth headset for conference calls, a user notices intermittent sound issues. The user frequently walks between office rooms during the calls, leaving the laptop in place. The office wireless network uses fiber for internet access and consists of two wireless APs that are connected. Which of the following is most likely causing the connectivity issue?",
[
"The number of available APs is inadequate.",
"The user is moving in and out of range.",
"The APs are not in mesh mode.",
"The internet connection is too slow to support conference calls."
],
1),

Q(229,
"After a user builds their first PC, the user needs to install the operating system from a USB drive. Which of the following should the user configure next?",
[
"BIOS password",
"PXE boot",
"Secure Boot",
"Boot order"
],
3),

Q(230,
"Which of the following should a technician use to terminate a Cat 6 cable to a patch panel?",
[
"Punchdown tool",
"Crimper",
"Toner probe",
"Network tap"
],
0),

Q(231,
"A developer needs to run multiple instances of an application using the fewest resources possible. The developer has access to a machine that has all the necessary libraries for the application to run. Which of the following actions should the technician suggest?",
[
"Running a VDI for each instance",
"Running each instance under a Type 2 hypervisor",
"Using containerization",
"Creating a virtual switch"
],
2),

Q(232,
"A technician replaces a laptop's failed motherboard. During validation testing, the wireless is slow and shows a weak signal. Which of the following should the technician do first to verify the source of the issue?",
[
"Contact the manufacturer.",
"Reseat antenna connections.",
"Restart the access point.",
"Install a new wireless adapter."
],
1),

Q(233,
"A customer wants a new desktop machine that can run recently released, popular video games. Which of the following should a desktop technician consider when building the machine? (Choose two.)",
[
"A low-wattage power supply unit",
"An integrated GPU",
"A high amount of RAM",
"A dedicated graphics card",
"A Linux OS",
"A TPM 2.0"
],
[2,3],
true),

Q(234,
"A technician needs to scan-to-file from a legacy printer. The technician sets up a shared drive but then is unable to view the scanned files. The technician confirms their credentials are valid. Which of the following should the technician do to the computer to view the scanned files?",
[
"Disable the firewall on the desktop PC.",
"Add a $ to the end of the share name.",
"Enable SMB 1.0 through Windows features.",
"Remove the malware protection software."
],
2),

Q(235,
"Which of the following is the standard for Wi-Fi 7?",
[
"802.1X",
"802.3at",
"802.11be",
"802.15.1"
],
2),

Q(236,
"A user’s phone does not charge consistently, even after a new cable is used to try to charge the phone. The phone's battery is not swollen. Which of the following should a technician try next to fix the phone?",
[
"Reset the phone to factory default settings.",
"Change the battery.",
"Arrange for repairs at a service center.",
"Clean the USB-C port."
],
3),

Q(237,
"Which of the following cloud models exclusively uses dedicated resources?",
[
"Community",
"Hybrid",
"Private",
"Public"
],
2),

Q(238,
"An engineer must implement a solution to facilitate and maintain an organization's legacy application until it is retired. The application is currently hosted on three physical servers. Which of the following is the most suitable concept for this purpose?",
[
"SAN",
"FaaS",
"Virtualization",
"Configuration management platform"
],
2),

Q(239,
"Which of the following is used to reduce cabling requirements to specific security cameras?",
[
"PoE",
"DSL",
"ONT",
"NIC"
],
0),

Q(240,
"A user’s computer system does not complete the startup process and shows the following message: No boot disk found. The system does pass the HDD diagnostic test. Which of the following should the technician do to resolve the issue?",
[
"Change the BIOS from legacy to UEFI.",
"Replace the HDD with an NVMe drive.",
"Disable the Secure Boot feature.",
"Upgrade the operating system to Windows 11."
],
0),

Q(241,
"A user has issues selecting objects on their tablet. The user tries to select an object, and the object that opens is to the right of the object that the user selects. Which of the following should a technician do to troubleshoot the issue?",
[
"Change the stylus.",
"Calibrate the digitizer.",
"Check for malware.",
"Clean the screen."
],
1),

Q(242,
"Which of the following RAID configurations provides redundancy and better performance without the added work of parity calculations?",
[
"0",
"5",
"6",
"10"
],
3),

Q(243,
"Which of the following is typically found in server memory modules?",
[
"RGB",
"ECC",
"Static",
"SODIMM"
],
1),

Q(244,
"An employee requires a workstation with three high-end graphics cards to render 3-D models. A technician must choose a power supply that meets the power requirements for the components and takes into consideration the mission-critical nature of the work. Which of the following meet the requirements? (Choose two.)",
[
"12V output",
"Modularity",
"20-pin motherboard connector",
"Redundancy",
"3.3V output",
"240 VAC input"
],
[0,3],
true),

Q(245,
"An IP address is automatically assigned to a single workstation in an office, but the technician confirms the IP address is not in the lease pool. This workstation is having issues accessing the internet and internal fileshares. Which of the following address types has been automatically assigned?",
[
"APIPA",
"Static",
"DHCP",
"Public IP"
],
0),

Q(246,
"All VoIP phone users at a call center report that they get distorted audio and drops in conversations during peak working hours. A technician updates the firmware on the phones, but the issue persists. Which of the following should the technician do next?",
[
"Replace all the patch cables.",
"Verify that the users’ extensions are in the correct call groups.",
"Reset the phones to factory settings and provision them.",
"Ask the network team to check the VLAN for QoS."
],
3),

Q(247,
"Which of the following describes a cloud computing system's ability to use changing levels of resources based on demand?",
[
"Availability",
"Multitenancy",
"Elasticity",
"Metered usage"
],
2),

Q(248,
"A technician needs to prevent a 3-D-rendering desktop from throttling. Which of the following is the best way to address this issue?",
[
"Enabling the CPU fan through the application",
"Switching to a modular power supply",
"Installing a high-performance heat sink",
"Decreasing the memory timings"
],
2),

Q(249,
"A customer contacts the help desk to report they can access the corporate fileshare but cannot browse the internet. The technician runs ipconfig and receives the following output. Which of the following is most likely causing the issue?",
[
"Corrupt NIC drivers",
"Conflicting IPv4 address",
"Incorrect next hop information",
"Unplugged Ethernet cable"
],
2),

Q(250,
"A workstation is making clicking sounds inside the case. The UEFI POST takes longer than usual, but the system starts up and all the programs function normally. Which of the following should a technician enable in the UEFI to troubleshoot this issue?",
[
"Trusted Platform Module",
"Hyperthreading",
"Virtualization extensions",
"Self-monitoring and Reporting Technology"
],
3),

Q(251,
"A user notices a clicking sound each time they turn on a workstation, and it takes a long time for the system to start up. Which of the following should the technician replace?",
[
"Fan",
"HDD",
"RAM",
"SSD"
],
1),

Q(252,
"A customer is upgrading an engineering workstation with multiple video cards and storage drives. Which of the following should the customer consider first when identifying a new power supply?",
[
"Input voltage",
"Connector quantity",
"Output voltage",
"Wattage rating"
],
3),

Q(253,
"A technician is configuring a laptop with an IP address that will not change but will be assigned dynamically. Which of the following configurations should the technician use to achieve this goal?",
[
"Exclusion",
"Lease",
"Scope",
"Reservation"
],
3),

Q(254,
"Which of the following resolutions does the Full HD standard use?",
[
"1280x720",
"1920x1080",
"3840x2160",
"7680x4320"
],
1),

Q(255,
"Which of the following can be used by a mobile device to access a secure building?",
[
"Hotspot",
"Near-field communication",
"Infrared scanner",
"Geolocation"
],
1),

Q(256,
"An organization uses a vendor-hosted database server. Which of the following best describes this solution?",
[
"Hybrid cloud",
"PaaS",
"IaaS",
"SaaS"
],
1),

Q(257,
"A human resources manager printed a sensitive employee termination announcement and forgot to retrieve the document from the printer. Which of the following is a way to avoid this situation?",
[
"Badging",
"Duplex",
"Printer share",
"Wireless encryption"
],
0),

Q(258,
"Which of the following characteristics differentiates DDR4 RAM from DDR3 RAM?",
[
"Lower operating voltage",
"Higher latency",
"Increased DIMM width",
"Single-sided modules"
],
0),

Q(259,
"A software developer wants to test a new application in an environment that limits access to the OS. Which of the following should the developer implement?",
[
"Container",
"Type 2 hypervisor",
"VDI",
"Quarantined PC"
],
0),

Q(260,
"A technician is manually configuring network settings on a user’s computer to route network traffic to a newly deployed firewall. Which of the following should the technician change?",
[
"VPN",
"Gateway",
"Subnet mask",
"VLAN"
],
1),

Q(261,
"Which of the following is used to verify that an emailer is allowed and designated to send emails from a particular IP address?",
[
"CNAME",
"SPF",
"DKIM",
"DMARC"
],
1),

Q(262,
"Which of the following describes an environment in which virtual machines are hosted on premises and in a cloud?",
[
"Hybrid",
"Public",
"Private",
"SaaS"
],
0),

Q(263,
"A user is trying to print diagrams on 11in x 17in (28cm x 43cm) paper. The correct paper is in the printer, but the printer prompts the user to insert paper. A technician assisting the user successfully prints the diagram to a different printer that is the same model. Which of the following is the most likely cause of this issue on the user's printer?",
[
"Tray settings",
"Incorrect driver",
"Connectivity issues",
"Insufficient permissions"
],
0),

Q(264,
"A technician installs an external camera on a user's laptop. When loading the company meeting software, the video preview shows a blank screen. Which of the following should the technician do next?",
[
"Select the correct camera source.",
"Replace the camera with a different model.",
"Update the camera software to the latest version.",
"Check the camera's cable for damage or pinches."
],
0),

Q(265,
"Which of the following tools will a technician most likely use to identify an unlabeled network connection?",
[
"Network tap",
"Loopback plug",
"Cable tester",
"Toner probe"
],
3),

Q(266,
"The Chief Information Security Officer asks a technician to inventory desktop PCs to determine which ones meet the requirements for Secure Boot. The technician must also configure the PCs for non-user-controllable keys. Which of the following are necessary to meet the enhanced security requirements? (Choose two.)",
[
"VDI",
"BIOS password",
"TPM",
"UEFI",
"Disabled boot drive",
"USB permissions"
],
[2,3],
true),

Q(267,
"A user reports that they cannot get their laptop to work with a video projector connected with an HDMI cable. The projector is turned on, the HDMI cable is securely connected on both ends, and the laptop displays properly on its own screen. The display mode is set to \"Duplicate\" on the laptop. Which of the following is most likely causing the issue?",
[
"The projector does not support HDMI connections.",
"The laptop display mode should be set to \"Extend\".",
"An HDMI port on the projector failed.",
"The input source is incorrect on the projector."
],
3),

Q(268,
"Which of the following cable types must be used when running copper network cable through a suspended ceiling that is used for air ventilation?",
[
"Plenum",
"Multimode",
"Coaxial",
"Twisted pair"
],
0),

Q(269,
"A computer training institute needs to implement multiple VLANs that must connect to each other with minimum hardware and communicate traffic at wire speed. Which of the following is the most suitable?",
[
"Web application firewall",
"DDoS appliance",
"Layer 3 switch",
"Router"
],
2),

Q(270,
"A small business is growing and wants to scale its computing capacity. The business wants to continue using on-site equipment until it is EOL. The solution must be able to share data with the local data center. Which of the following models should a technician suggest?",
[
"Public",
"Community",
"Hybrid",
"Private",
"SaaS"
],
2),

Q(271,
"A company implements a new policy that prohibits users from installing unapproved applications on corporate tablets. Which of the following should the technician use to enforce this policy?",
[
"MDM",
"ACL",
"DRM",
"PAM"
],
0),

Q(272,
"Which of the following connectors will uplink a new ISP cable modem to its wall jack?",
[
"F-type",
"LC",
"RJ45",
"Lightning"
],
0),

Q(273,
"Which of the following types of RAM is most likely used in data centers and in high-performance machines?",
[
"ECC",
"Single-channel",
"Unbuffered",
"RDIMM"
],
3),

Q(274,
"Which of the following wireless frequency ranges involves the use of channels 1, 6, and 11?",
[
"2.4GHz",
"5GHz",
"6GHz",
"60GHz"
],
0),

Q(275,
"Following a power outage, a laptop will not turn on. Which of the following should a technician replace first to resolve the issue?",
[
"The AC adapter",
"The RAM",
"The inverter",
"The battery"
],
0),

Q(276,
"Which of the following should a technician create to assign a permanent IP address to a PC using DHCP?",
[
"Reservation",
"Lease",
"Exclusion",
"Scope option"
],
0),

Q(277,
"A customer is using port 110 for email. However, the customer wants to upgrade to a more secure connection that automatically synchronizes with the server. Which of the following should the customer use?",
[
"IMAP",
"HTTPS",
"SMTP",
"SFTP"
],
0),

Q(278,
"Two workstations are connected to a LAN that does not have internet access. A user reports that they are unable to access a network service after a power outage. The web page warns the user that the site is insecure. Which of the following will most likely resolve the certificate error? (Choose two.)",
[
"Renewing the SSL certificate",
"Setting the system date and time in the BIOS",
"Replacing the CMOS battery",
"Adjusting the browser security settings",
"Opening the HTTPS port on the workstation’s firewall",
"Scanning the LAN for unauthorized devices"
],
[1,2],
true),

Q(279,
"A small company recently added VoIP through its ISP. Users report intermittent call quality issues during peak hours. Which of the following steps should the IT administrator take to solve the issue?",
[
"Configure the VLAN to split services.",
"Route calls through a gigabit port.",
"Install a shielded network cable.",
"Increase the VoIP bit rate."
],
0),

Q(280,
"A user's smartphone frequently disconnects from Wi-Fi networks, particularly in crowded areas like airports and coffee shops. The user also notices that their device shows a lower Wi-Fi signal strength compared to other devices in the same location. Which of the following is likely contributing to the smartphone's Wi-Fi connectivity issues?",
[
"The smartphone's antenna may be malfunctioning.",
"The smartphone may have an outdated Wi-Fi standard.",
"The smartphone may be experiencing interference from nearby devices.",
"The smartphone's power settings may be affecting performance."
],
0),

Q(281,
"Which of the following internet connection types will most likely experience interference from rain?",
[
"Fiber",
"Cable",
"Satellite",
"DSL"
],
2),

Q(282,
"A technician is installing an office printer that can only be accessed by a single computer. Which of the following should the technician do?",
[
"Configure a USB connection.",
"Install a PCL driver.",
"Set a static IP address.",
"Enable secure print."
],
0),

Q(283,
"A user reports the following error message to the help desk: Drive failure imminent. The user presses F1 to continue past the error and work like normal. Which of the following should the help desk technician do to fix this issue?",
[
"Replace the hard disk.",
"Reformat the partition.",
"Rebuild the array.",
"Enter safe mode."
],
0),

Q(284,
"A healthcare facility is printing government documents on preprinted forms. The output has shifted downward on the paper and the printed data is not aligned with the blank spaces on the forms. Which of the following should a technician do first?",
[
"Verify that the correct paper type is loaded into the tray.",
"Make sure that PostScript drivers are being used.",
"Check the orientation settings of the printer.",
"Ensure that the pickup rollers are firmly gripping the paper."
],
2),

Q(285,
"Which of the following should a technician check when the display of a computer is flickering?",
[
"LCD type",
"Refresh rate",
"Screen resolution",
"Pixel density"
],
1),

Q(286,
"Which of the following best describes a Type 2 hypervisor?",
[
"It works as a firewall to control network traffic.",
"It interacts with the underlying hardware.",
"It runs on a host operating system.",
"It brings higher CPU capabilities to virtual machines."
],
2),

Q(287,
"A user with a home office wants to add additional devices to the existing internet service while maintaining minimal cost and administration. Which of the following provides the needed functionality?",
[
"DSL modem",
"Firewall",
"Unmanaged switch",
"Cable modem"
],
2),

Q(288,
"A user reports issues controlling the cursor on a company-owned laptop. The technician inspects the laptop and discovers a bulge under the trackpad. Which of the following components should the technician replace first?",
[
"Motherboard",
"Heat sink",
"Battery",
"Trackpad"
],
2),

Q(289,
"Which of the following cloud computing models provides hardware, storage, networking, and virtualization, but requires customers to manage the OS and applications?",
[
"SaaS",
"PaaS",
"IaaS",
"XaaS"
],
2),

Q(290,
"A user wants a printer set up for scan-to-email functionality. Which of the following should be configured on the printer to fulfill this request?",
[
"SMS",
"SMTP",
"SFTP",
"SMB"
],
1),

Q(291,
"A company wants to share application resources with another business. Which of the following should the company implement?",
[
"Community cloud",
"File synchronization",
"Rapid elasticity",
"Dedicated resources"
],
0),

Q(292,
"A technician is installing an expansion card on a desktop computer to provide internet access. Which of the following expansion cards should the technician use?",
[
"GPU",
"NIC",
"Sound",
"Capture",
"PCIe"
],
1),

Q(293,
"An administrator is configuring a SOHO network. The network scope requires static IP addresses for printers. Which of the following must the administrator set manually? (Choose two.)",
[
"DHCP",
"Subnet mask",
"Default gateway",
"DNS",
"Reservations",
"Exclusions"
],
[1,2],
true),

Q(294,
"A local bank is designing its new infrastructure blueprint. Which of the following RAID types offers double parity?",
[
"RAID 0",
"RAID 1",
"RAID 5",
"RAID 6"
],
3),

Q(295,
"A consultant is assessing the wireless configurations for a small office. The existing equipment uses WEP encryption and operates on the default channel. The office is in a crowded urban area with many nearby networks. Which of the following is the best way to improve the wireless network performance?",
[
"Replacing the access point",
"Disabling SSID broadcasting",
"Enabling MAC address filtering",
"Updating the firmware"
],
0),

Q(296,
"Which of the following services allows a networked host to automatically assign IP addresses to devices on a network?",
[
"DNS",
"DHCP",
"SMTP",
"SNMP"
],
1),

Q(297,
"A technician is unable to join a computer to the domain. The technician runs ipconfig and gets the following output. Which of the following is the most likely cause?",
[
"The subnet mask is incorrect.",
"NetBIOS is enabled.",
"DHCP is enabled.",
"DNS servers are manually set."
],
3),

Q(298,
"A company wants to migrate a large amount of data from an on-premises server to a cloud provider. Which of the following connection types is most likely the fastest?",
[
"Coaxial",
"DSL",
"Fiber",
"SAN"
],
2),

Q(299,
"An end user is having trouble printing from an application. The text on the page is unreadable. However, the application prints successfully from a newer computer. Which of the following should be done next?",
[
"Reinstall the printer.",
"Adjust the print tray.",
"Update the printer driver.",
"Change the toner."
],
2),

Q(300,
"Which of the following wireless networking technologies primarily operates in the 5GHz frequency band?",
[
"Bluetooth",
"802.11ac",
"NFC",
"RFID"
],
1),

Q(301,
"Which of the following cloud characteristics allows local folders to contain updates that are made by users on other devices?",
[
"Network share",
"Synchronization",
"Availability",
"Metered utilization"
],
1),

Q(302,
"Which of the following will most likely be installed in an NVMe port on the motherboard of a desktop PC?",
[
"SATA drive",
"Solid-state drive",
"SAS drive",
"Optical drive"
],
1),

Q(305,
"A desktop support specialist wants to install software that will automatically download email attachments to check for malicious content. Which of the following would accomplish this task?",
[
"VDI",
"Hypervisor",
"Sandbox",
"Container"
],
2),

Q(306,
"Which of the following record types is used to create an alias for a domain?",
[
"CNAME",
"AAAA",
"TXT",
"A"
],
0),

Q(307,
"Which of the following allows an organization to provide remote desktop resources without providing physical workstations to its users?",
[
"RMM",
"SaaS",
"VDI",
"Containers"
],
2),

Q(308,
"Which of the following is commonly affected by high latency?",
[
"Satellite",
"Fiber",
"Cable",
"DSL"
],
0),

Q(309,
"A technician must upgrade a computer system to improve its overall processing performance. Which of the following should the technician focus on to ensure maximum system performance?",
[
"Integrated GPU",
"Power connectors",
"Voltage regulator module",
"Clock frequency"
],
3),

Q(310,
"Which of the following will most likely be an issue when increasing the channel width of an 802.11 network?",
[
"Wireless interference",
"Decreased data throughput",
"Increased latency",
"Reduced collisions"
],
0),

Q(311,
"Which of the following records allow a user to navigate to a server by using a memorable title instead of an IPv4 address? (Choose two.)",
[
"SPF",
"AAAA",
"CNAME",
"TXT",
"MX",
"A"
],
[2,5],
true),

Q(312,
"An employee tries to use a projector to share a slideshow from a laptop. The projector displays the message No video signal from source device. A technician verifies that all cables are properly connected. Which of the following steps will most likely resolve this issue?",
[
"Changing the input",
"Using a different computer",
"Power cycling the laptop",
"Putting the slideshow on a USB"
],
0),

Q(313,
"Which of the following is the best to use to stream real-time video from a network camera?",
[
"UDP",
"TCP",
"FTP",
"RDP"
],
0),

Q(314,
"Which of the following are radio frequency connections? (Choose two.)",
[
"Cable",
"Satellite",
"DSL",
"Cellular",
"Ethernet",
"Fiber"
],
[1,3],
true),

Q(315,
"An administrator is investigates a misuse of printer resources. The administrator suspects an employee. Which of the following will help the administrator verify the source of misuse?",
[
"Secure printing",
"Print counter",
"Audit logs",
"User authentication"
],
2),

Q(316,
"An IT specialist is setting up a new shared network printer. The printer will receive a pre-allocated IP address via DHCP. Attempting to connect to the printer's web interface produces a Page not found message. The specialist runs diagnostics and finds that the IP is different than expected. Which of the following should the specialist check next?",
[
"The MAC address used in the reservation",
"The printer driver on the print server",
"The subnet mask that the printer is using",
"The default gateway in the address pool"
],
0),

Q(317,
"A technician must configure a device that can direct packets across multiple broadcast domains. Which of the following devices should the technician select?",
[
"Switch",
"Modem",
"Access point",
"Router"
],
3),

Q(318,
"Users in a 200-person call center report that phone calls experience severe performance degradation on busy days. The technician confirms upload and download speeds are 50Mbps during a speed test and VoIP call prioritization settings are properly configured for the VLAN that the call center uses. Which of the following is most likely the cause of this issue?",
[
"The QoS is not configured correctly on the router.",
"The switchports dedicated to the call center are flapping.",
"The call center’s VLAN is not configured to allow voice traffic.",
"The bandwidth dedicated to the call center is insufficient."
],
3),

Q(319,
"Which of the following DNS records is used by DMARC to verify the authenticity of email servers?",
[
"MX",
"CNAME",
"TXT",
"A"
],
2),

Q(320,
"A user reports that when scanning or copying from an MFP, lines appear to be running down the paper. The technician examines the printer and determines that it is processing jobs properly. Which of the following should the technician do to resolve this issue?",
[
"Replace the transfer roller.",
"Remove the pickup rollers.",
"Clean the glass bed.",
"Apply a maintenance kit."
],
2),

Q(321,
"Which of the following best describes a community cloud?",
[
"Several companies share the same cloud resources.",
"Cloud resources are locally hosted in a single company’s data center.",
"A third-party provider hosts all cloud resources.",
"Some cloud resources are hosted locally while some are hosted by a third-party provider."
],
0),

Q(322,
"Which of the following will most likely be used in a testing environment to execute unauthorized code?",
[
"Virtual machines",
"Hybrid cloud",
"Load balancers",
"Application gateways"
],
0),

Q(323,
"A user's laptop is projecting an image upside down while using a ceiling-mounted projector. Which of the following should a technician do to best solve this issue?",
[
"Change the input source.",
"Rotate the image from the laptop.",
"Adjust the display frequency.",
"Flip the image vertically from the projector."
],
3),

Q(324,
"An administrator selects a new platform that provides the following benefits: Shares a host OS, shares kernel resources, rapid start and deployment, and limited isolation. Which of the following virtualization options did the administrator select?",
[
"Type 1 hypervisor",
"Containers",
"Virtual desktop",
"Virtual machine"
],
1),

Q(325,
"A data center technician notices that one of the servers in a RAID 5 configuration is experiencing slow performance. A message in the server logs indicates a degraded RAID array. Which of the following actions should the technician take to address the degraded RAID array?",
[
"Replace the failed drive with a new one.",
"Reseat all existing drives to improve connection.",
"Perform a disk defragmentation on all drives.",
"Change the RAID configuration to RAID 6."
],
0),

Q(326,
"A user goes to their office and forgets their laptop charger. After borrowing a charger, the user notices that the battery is charging slowly. Which of the following steps should a technician take first to charge the battery normally?",
[
"Adjust laptop battery performance.",
"Try a different charging port.",
"Use a different power supply.",
"Replace the laptop battery."
],
2),

Q(327,
"The power supply for a user’s gaming computer fails. The user buys a replacement online. The user connects the power supply to the motherboard, the graphics card, and the SSDs, but the computer fails to start and displays a critical error. Which of the following is the most likely cause?",
[
"The computer requires an additional RAM upgrade.",
"The wattage is insufficient for all the peripherals.",
"The user did not connect the 4-pin connector for the CPU.",
"The power supply only operates in a redundant configuration."
],
2),

Q(328,
"A technician must install additional RAM in a desktop computer. Which of the following types of RAM will the technician most likely use?",
[
"Static",
"ECC",
"DIMM",
"Registered"
],
2),

Q(329,
"Which of the following is used to confirm that a physical port is working?",
[
"Network tap",
"Crimper",
"Patch panel",
"Loopback plug"
],
3),

Q(330,
"A user only has access to basic printer functions. A technician notices that the advanced printer features are missing. Which of the following actions will fix this issue?",
[
"Modifying the printer settings and rebooting the printer",
"Installing the drivers from the printer's manufacturer",
"Restarting the OS and attempting to reprint the document",
"Applying the OS-provided patches for the printer"
],
1),

Q(331,
"A technician is configuring a desktop computer in a small office. The computer is able to connect to the local file server but is unable to access the internet. The technician runs the following command to troubleshoot. Which of the following will most likely restore internet access?",
[
"Flushing the DNS cache",
"Choosing a different IPv6 address",
"Setting the gateway",
"Disabling NetBIOS"
],
2),

Q(332,
"After replacing a laptop screen, a technician is unable to see Wi-Fi connections. Which of the following will most likely resolve the issue?",
[
"Turning the Wi-Fi on",
"Replacing the wireless card",
"Making sure that all cables are plugged in",
"Disabling Wi-Fi Protected Access"
],
2),

Q(333,
"Which of the following cloud models allows customers to connect to company resources from their laptops with the least amount of infrastructure?",
[
"PaaS",
"IaaS",
"SaaS",
"FaaS"
],
2),

Q(334,
"Which of the following storage devices is best suited for a high-performance gaming laptop that requires fast data access and transfer rates?",
[
"1TB SATA 2.5\" HDD",
"512GB NVMe M.2 SSD",
"750GB SATA III internal HDD",
"1TB SAS SSD"
],
1),

Q(335,
"Which of the following will a company most likely use to control which websites a user can access?",
[
"Proxy server",
"Spam gateway",
"DHCP server",
"RADIUS server"
],
0),

Q(336,
"After a technician updated the wireless APs to 5GHz, users report they have degraded Wi-Fi performance. The technician tests for interference but finds none. Which of the following should the technician do next?",
[
"Select a different channel.",
"Switch the Wi-Fi back to the 2.4GHz frequency.",
"Upgrade the wireless drivers on the users' devices.",
"Add more access points for better coverage."
],
3),

Q(337,
"An organization upgrades all of its desktop machines to Windows 11. The organization must ensure that all machines are protected from malicious software on startup. Which of the following advanced options should the organization enable?",
[
"Trusted Platform Module",
"Hardware security module",
"Secure Boot",
"BIOS password"
],
2),

Q(338,
"A user reports that the Wi-Fi signal is intermittent in an open office area. Other users are not experiencing this issue. Which of the following is the most likely cause?",
[
"There are other Wi-Fi signals that could be causing interference.",
"All wireless devices are on the same frequency.",
"The laptop's wireless card is malfunctioning.",
"The antenna was installed near a device that generates electromagnetic interference."
],
2),

Q(339,
"A Wi-Fi router is set up in a central room. A user on the outer edge of the building reports slow connections and intermittent internet drops. Which of the following actions will solve the issue?",
[
"Enabling the 5GHz band from the router configuration page",
"Running the flushdns command from the command line",
"Upgrading the user’s laptop to a NIC that is compatible with Wi-Fi 6",
"Installing additional wireless APs around the location"
],
3),

Q(340,
"A manager wants to ensure that employees can only pick up their own printouts. Which of the following accomplishes this objective? (Choose two.)",
[
"PCL",
"Tray selection",
"Duplex setting",
"User PIN",
"RFID",
"USB"
],
[3,4],
true),

Q(341,
"Faded images from previous jobs appear on each page of output from an office printer. Which of the following should a technician do first to resolve this issue?",
[
"Reload the paper tray.",
"Adjust the fuser temperature.",
"Inspect the transfer roller.",
"Clean the corona wire."
],
3),

Q(342,
"A technician receives a report that the network fileshare has been very slow for several weeks, and today it is no longer available. The file server is running, and the technician can establish an RDP connection to it. Which of the following should the technician check next?",
[
"RAID array status",
"Data backup integrity",
"Network connectivity",
"Server available memory"
],
0),

Q(343,
"Which of the following RAID configurations can lose two drives without data loss?",
[
"0",
"1",
"5",
"6"
],
3),

Q(344,
"Which of the following technologies is most used in portable devices?",
[
"ECC",
"RAID",
"SATA",
"SODIMM"
],
3),

Q(345,
"A company is installing a new shared printer for all employees in the area. However, some managers need to use the printer for human resources-related purposes. The company does not want to purchase additional printers for the private use of the managers. Which of the following should the company implement?",
[
"Audit logging",
"Secure printing",
"Wired connectivity",
"Duplex settings"
],
1),

Q(346,
"Which of the following, when combined, are used to make sure a workstation always has the same IP address on a network managed with DHCP?",
[
"Creating a new scope",
"Enabling network address translation",
"Assigning a reservation",
"Configuring an automatic private IP address"
],
2),

Q(347,
"A technician is building a home desktop computer. The technician wants to prioritize cable management when considering the type of power supply. Which of the following power supply types should the technician consider?",
[
"Back-up",
"Modular",
"Standard",
"Redundant"
],
1),

Q(348,
"Which of the following devices is designed specifically to allow multiple network devices to communicate across a single platform?",
[
"NIC",
"Firewall",
"Switch",
"Routers"
],
2),

Q(349,
"A client is unable to unlock their smartphone. When they try to enter their code, the input is unsuccessful. Which of the following components has most likely failed?",
[
"Charging port",
"Touch screen",
"OLED",
"Biometric scanner"
],
1),

Q(350,
"Which of the following supplies power to an IP phone?",
[
"Digital subscriber line",
"Patch panel",
"Fiber router",
"PoE switch"
],
3),

Q(351,
"A company is separating its accounting department’s network from its customer service department’s network. Which of the following will accomplish this task?",
[
"VPN",
"DNS",
"VLAN",
"DHCP"
],
2),

Q(352,
"A mobile user’s laptop is having intermittent performance issues when the user tries to connect to network resources from their desk. Upon further research, a technician notices the WLAN signal strength is low within the user’s office, only two 2.4GHz wireless channels are being used near the office, the laptop was recently imaged and hardware resources are normal, nearby RJ45 ports have no connectivity, and the user can connect successfully elsewhere on campus. Which of the following is the most likely cause?",
[
"The APs are installed too far away from the user’s office.",
"Multiple brute-force attempts are causing connection drops.",
"The ports near the user’s office are currently disabled.",
"The user’s laptop has malware, causing it to connect to unauthorized sites."
],
0),

Q(353,
"A user’s workstation occasionally turns off and smells burnt. The workstation is located in a manufacturing area where users are required to wear respirators. Which of the following will most likely repair the workstation?",
[
"Inspecting and repairing the swollen motherboard capacitors",
"Replacing the intake air filter",
"Resetting the BIOS configuration to default",
"Switching the power outlets"
],
1),

Q(354,
"Which of the following cables should be installed if nearby electromagnetic interference is a possibility?",
[
"STP",
"UTP",
"Thunderbolt",
"USB"
],
0),

Q(355,
"Which of the following is a characteristic to consider when selecting a satellite internet connection?",
[
"Necessary proximity to urban infrastructure",
"eSIM requirement",
"Line of sight to nearby tower",
"Increased latency"
],
3),

Q(356,
"Which of the following options offers the best connectivity performance with limited necessary accessories?",
[
"Hotspot",
"Lightning cable",
"NFC",
"Bluetooth"
],
0),

Q(358,
"Users report that multiple desktop computers show the wrong date and time. A technician updates the date and time and restarts the legacy system. When the system restarts, the time and date are incorrect again. Which of the following should the technician do next to troubleshoot?",
[
"Configure the hardware clock.",
"Install OS updates.",
"Replace the CMOS batteries.",
"Upgrade the NTP settings."
],
2),

Q(359,
"A technician needs to configure a shared multifunction printer to consume the least amount of supplies. Which of the following settings should the technician change?",
[
"User authentication",
"Sleep timer",
"Tray settings",
"Duplex configuration"
],
3),

Q(360,
"A technician is troubleshooting an MFP issue in which the printed copies have speckling. The technician verifies that the issue does not occur when a document is scanned, but speckling does appear when copied. After verifying that the print does not smear on the page after printing, which of the following should the technician do to fix the issue?",
[
"Install a maintenance kit.",
"Change the toner cartridge.",
"Replace the print fuser.",
"Clean the transfer roller."
],
3),

Q(361,
"When a user scans a page on a printer, a line always appears on the printout. However, when the user prints from the printer, the line does not appear. Which of the following maintenance steps should a technician take to resolve the issue?",
[
"Replace the paper type.",
"Wipe the flatbed glass.",
"Remove any internal debris.",
"Clean the heating element."
],
1),

Q(362,
"Which of the following requires pairing during the initial use of a new mobile accessory?",
[
"NFC",
"Lightning cable",
"RFID",
"Bluetooth"
],
3),

Q(363,
"Which of the following networking technologies allows for high-speed data transmission over short distances between devices like smartphones and tablets?",
[
"Near-field communication",
"Zigbee",
"Infrared",
"Wi-Fi Direct"
],
3),

Q(364,
"A user reports that their smartphone requires frequent charging. The user purchased the smartphone new three years ago, and it would last a full day on a single charge. The user now keeps application usage to a minimum and enables power efficiency modes to prolong the smartphone’s charge. A technician connects the smartphone to a cable and notices it takes much longer to fully charge the battery than the manufacturer’s specifications. Which of the following should the technician check for next?",
[
"Damaged ports",
"Malware infection",
"Performance degradation",
"Overheating"
],
0),

Q(365,
"A user’s smartphone frequently disconnects from Wi-Fi networks, particularly in crowded areas like airports and coffee shops. The user also notices that their device shows a lower Wi-Fi signal strength compared to other devices in the same location. Which of the following is likely contributing to the smartphone’s Wi-Fi connectivity issues?",
[
"The smartphone’s antenna may be malfunctioning.",
"The smartphone may have an outdated Wi-Fi standard.",
"The smartphone may be experiencing interference from nearby devices.",
"The smartphone’s power settings may be affecting performance."
],
0),

Q(366,
"Some users are unable to access their workstations. An administrator runs ipconfig and sees IPv4 address 192.168.1.27, subnet mask 255.255.255.0, and default gateway 192.168.1.1. The administrator then pings the gateway and receives Request timed out. Which of the following is the source of issue?",
[
"Web server",
"Router",
"DNS",
"DHCP"
],
1),

Q(367,
"A user’s laptop experiences intermittent issues during startup. A technician finds that the user has left a corporate flash drive plugged in, which is causing the issues. Which of the following should the technician configure?",
[
"BitLocker",
"Boot options",
"USB Enable",
"TPM features"
],
1),

Q(368,
"Which of the following protocol ports is used for secure remote access to a network device?",
[
"21",
"22",
"23",
"25"
],
1),

Q(369,
"Which of the following statements is true when comparing DDR3 RAM and DDR4 RAM?",
[
"DDR4 offers faster data transfer rates compared to DDR3.",
"DDR3 is capable of achieving higher bandwidth than DDR4.",
"DDR4 operates at a higher voltage than DDR3.",
"DDR3 is better suited for low-power environments than DDR4."
],
0),

Q(370,
"Which of the following devices forwards data between different networks by analyzing the headers of packets?",
[
"Hub",
"Router",
"Repeater",
"Unmanaged switch"
],
1),

Q(371,
"Which of the following is a key characteristic of cloud computing that ensures resources are dynamically distributed to meet varying workloads?",
[
"Hybrid deployment",
"Elasticity",
"Multitenancy",
"Metered utilization"
],
1),

Q(372,
"A customer experiences a power outage at their data center. After the outage, one server with three hard drives in RAID 5 does not come back online. When a technician connects to the server, they receive a message stating that Drive 3 has failed. Which of the following steps should the technician take next to minimize the risk of data loss?",
[
"Replace the defective drive and trigger an array rebuild.",
"Acknowledge the drive error and allow the system to start normally.",
"Upgrade the firmware on the drives.",
"Perform a full drive restore from the most recent backup."
],
0),

Q(373,
"An end user is printing, but the image is being cut off because the paper is too small. The user did put the correct type of paper in the printer. Which of the following should the user change first?",
[
"The image size",
"The quality of the image",
"The tray settings",
"The file type"
],
0),

Q(374,
"A technician connects a network printer to a SOHO router. The technician configures several workstations to send print jobs to the printer's network address. After several days, users report that they are no longer able to use the printer. Which of the following should the technician use to resolve the issue and prevent it from reoccurring?",
[
"Network gateway",
"USB cable",
"APIPA",
"Static IP"
],
3),

Q(375,
"A user reports issues trying to print to a printer. Every time the user tries to print, continuous pages of random characters are printed. There are no smudging or print quality issues. Which of the following should the technician do to resolve this issue?",
[
"Reinstall the printer driver software.",
"Configure the printer DPI settings.",
"Replace the toner cartridge.",
"Update the printer's firmware."
],
0),

Q(376,
"A business purchases a computer with a built-in WWAN card. Which of the following technologies does the computer's WWAN card support?",
[
"SIM",
"NFC",
"Bluetooth",
"Wi-Fi"
],
0),

Q(377,
"An end user is able to send emails but not receive them. Which of the following settings should a technician check first on the user's laptop to troubleshoot the issue?",
[
"DNS",
"SMTP",
"IMAP",
"DMARC"
],
2),

Q(378,
"An office manager wants to know which users are printing the most pages. Which of the following can a technician enable to provide this data to the office manager?",
[
"Audit logging",
"Control language",
"Firmware updates",
"Network scan services"
],
0),

Q(379,
"Which of the following cloud models allows an organization to have exclusive access to cloud resources?",
[
"Public",
"Hybrid",
"Private",
"Community"
],
2),

Q(380,
"Which of the following cloud models allows for some services to remain on premises and other services to be delivered by a cloud-hosting provider?",
[
"Hybrid",
"Community",
"Public",
"Private"
],
0),

Q(381,
"Which of the following allows an internal application to be hosted without managing the underlying OS?",
[
"SaaS",
"IaaS",
"UCaaS",
"PaaS"
],
3),

Q(382,
"A customer's laptop is no longer charging when plugged in to the docking station. A technician observes that none of the devices plugged in to the dock appear to be functioning. The technician verifies that the dock has power, the laptop ports are not damaged, and the BIOS updates are current, but the issue persists. Which of the following should the technician do next?",
[
"Switch the power supply.",
"Replace the dock with a new one.",
"Reinstall the OS on the laptop.",
"Roll back the BIOS updates."
],
1),

Q(383,
"A technician is installing a new speaker and microphone in a conference room. The technician makes the connections and installs the manufacturer's application for the devices. However, when the technician uses corporate collaboration tools, the input and output devices have not switched to the new speaker and microphone. Which of the following should the technician do to ensure that the new conference devices are working properly?",
[
"Configure the default devices in the meeting software sound settings.",
"Install the proper drivers for the devices.",
"Disable the speaker and microphone in the computer’s BIOS.",
"Power cycle the devices and the laptop."
],
0),

Q(384,
"A user's laptop monitor dims every evening. The user manually adjusts the screen setting but wants a permanent solution. Which of the following settings should a technician change to prevent the issue?",
[
"Ambient light",
"Battery",
"Graphics",
"Scheduled tasks"
],
0),

Q(385,
"A help desk technician investigates a laser printer issue. Smudges are appearing on the printed pages, but they are not present on the document that was sent to the printer. Which of the following should the technician do first to diagnose the issue?",
[
"Use a different kind of printing paper.",
"Inspect the printer drum.",
"Update the printer firmware.",
"Replace the toner."
],
1),

Q(386,
"Which of the following controls network traffic based on MAC addresses?",
[
"Router",
"PoE injector",
"Firewall",
"Switch"
],
3),

Q(387,
"A thief stole a company phone and successfully extracted confidential company information from the device. Which of the following should have been used to prevent the extraction?",
[
"GPS",
"EFS",
"eSIM",
"MDM"
],
3),

Q(388,
"A user has two SSDs of the same size in their PC. The user wants to configure both SSDs to have a copy of all data so there will be no data loss if one drive fails. Which of the following is this an example of?",
[
"RAID 0",
"RAID 1",
"RAID 5",
"RAID 10"
],
1),

Q(389,
"The display in a conference room has a burn-in that does not match the presentation. Which of the following would best resolve the issue?",
[
"Adjust the color settings.",
"Correct the keystone.",
"Increase the brightness levels.",
"Replace the monitor."
],
3),

Q(390,
"A technician needs to provide a new employee with a phone number for their company mobile phone number. Which of the following is the most cost-effective and professional way to complete this task?",
[
"Forward a company number to the employee's mobile phone.",
"Offer a company SIM card to the employee.",
"Give a company mobile phone to the employee.",
"Issue a company eSIM to the employee."
],
3),

Q(391,
"A user asks a technician to increase the storage capacity of their new laptop by adding another SSD. Which of the following connectors will the technician most likely use?",
[
"USB",
"SATA",
"SAS",
"SCSI"
],
1),

Q(392,
"A technician adds the NTP service to a server and configures all network computers to that service. Which of the following is the technician most likely trying to achieve?",
[
"Defined network transport protocols",
"Enabled print services on the server",
"Synchronized system clocks",
"Defined server options in DHCP"
],
2),

Q(393,
"Which of the following best describes the benefits of cloud computing in the context of business operations?",
[
"It provides elasticity, allowing businesses to scale resources up or down easily.",
"It offers complete control over physical servers to the IT team.",
"It removes the need for software licenses for on-premises deployments.",
"It delivers on-premises data storage for sensitive information."
],
0),

Q(394,
"Which of the following is a characteristic of a Type 1 hypervisor?",
[
"Host OS required",
"Bare-metal server installation",
"Lightweight OS",
"Local configuration options"
],
1),

Q(395,
"A marketing developer creates a new DNS record called promotions.comptia.org so it references the same IP address as www.comptia.org. Which of the following DNS records did the developer change in this scenario?",
[
"MX",
"CNAME",
"A",
"TXT"
],
1),

Q(396,
"A technician is evaluating how to connect a power-redundant server to the outlets of a rack. Which of the following is the best way to provide electricity to the server?",
[
"Using only one power outlet, as the system will provide energy to the redundant source",
"Leaving one of the power supplies disconnected for use in case the other fails",
"Identifying available power outlets in different UPSs and distributing the connection between them",
"Connecting the device to one dedicated battery backup to provide continuous energy"
],
2),

Q(397,
"Which of the following cables can carry a video signal?",
[
"MicroUSB",
"USB-A",
"MiniUSB",
"USB-C"
],
3),

Q(398,
"A user asks a technician to recommend a CPU upgrade for a desktop computer. Which of the following should the technician consider first?",
[
"Core count",
"Socket type",
"Bus frequency",
"Integrated GPU"
],
1),

Q(399,
"Which of the following is used to verify the functionality of an Ethernet NIC?",
[
"Toner probe",
"Loopback plug",
"Wi-Fi analyzer",
"Punchdown tool"
],
1),

Q(400,
"A small office is using an internal subnet that includes 192.168.1.0 through 192.168.1.255. Which of the following is the proper subnet mask?",
[
"0.0.0.0",
"255.0.0.0",
"255.255.255.0",
"255.255.255.128"
],
2),

Q(401,
"A user is setting up a gaming PC with multiple GPUs to play highly advanced games. The user's primary concern is that the power supply is sufficient to support these tasks while allowing for future upgrades. Which of the following power supply configurations should the user select?",
[
"Redundant",
"Non-modular",
"Low wattage",
"Multiple-rail"
],
3),

Q(402,
"A technician needs to run cable for a new office through a drop ceiling. Which of the following cable types should the technician run?",
[
"BNC",
"Fiber-optic",
"Coaxial",
"Plenum"
],
3),

Q(403,
"An administrator for a wireless network is planning the company’s floor plan using a heat map. Which of the following types of networks is the administrator configuring?",
[
"SAN",
"PAN",
"MAN",
"WLAN"
],
3),

Q(404,
"A technician recently replaced a user's laptop screen. Since then, the user has had trouble connecting to wireless networks. Which of the following should the technician do?",
[
"Verify that wireless technologies are compatible with the updated hardware.",
"Reinstall the wireless drivers after the OS is reloaded.",
"Reconnect the antenna to the system board.",
"Reset the network services."
],
2),

Q(405,
"A technician builds a workstation. When the technician starts up the workstation, the technician notices a burning smell. During POST, the workstation shuts down. Which of the following is most likely the cause of these issues?",
[
"The technician did not properly ground the workstation.",
"The technician chose the wrong type of RAM.",
"The technician did not connect power to the exhaust fan.",
"The technician did not apply thermal paste."
],
3),

Q(406,
"A device with an IP address of 169.254.34.24 is having trouble accessing internet websites. Which of the following is most likely causing the issue?",
[
"The static IP address configuration is incorrect.",
"The DNS resolution failed.",
"The DHCP assignment cannot be obtained.",
"The internet is disconnected from the router."
],
2),

Q(407,
"An office manager wants to scan a contract that is approximately 300 pages. The office manager is concerned the process will take a long time because each page must be scanned individually. Which of the following can the office manager use to increase the speed of scanning?",
[
"Flatbed scanner",
"Duplexing",
"Automatic document feeder",
"Orientation configuration"
],
2),

Q(408,
"Which of the following internet connection types is primarily used for high-speed internet access in rural areas where traditional broadband services are unavailable?",
[
"Fiber",
"Satellite",
"DSL",
"Cable"
],
1),

Q(409,
"Which of the following cloud delivery models should an organization choose when it requires ownership of all physical hardware?",
[
"Hybrid cloud",
"Private cloud",
"Public cloud",
"IaaS",
"PaaS"
],
1),

Q(410,
"Which of the following devices can handle large volumes of data and uses flash memory?",
[
"SSD",
"DVD-RW",
"HDD",
"Tape"
],
0),

Q(411,
"A programmer needs to run a virtual machine on their laptop to test an application. Which of the following virtualization technologies is the best way to accomplish this goal?",
[
"Containerization",
"Hypervisor",
"Virtual desktop infrastructure",
"Emulation"
],
1),

Q(412,
"A company wants to optimize its hardware usage by running multiple operating systems concurrently on a single physical server. Which of the following concepts achieves this goal?",
[
"Host-based virtualization",
"Public cloud services",
"High-availability clustering",
"Software as a service",
"Load balancing"
],
0),

Q(413,
"A network printer consistently produces faint printouts. Users report that the issue persists across different computers and print jobs. Which of the following steps should the technician take first?",
[
"Run a printer calibration process.",
"Replace the toner cartridge.",
"Reinstall the printer drivers.",
"Adjust the fuser temperature."
],
1),

Q(414,
"A user turns on their laptop. The keyboard lights up, but the screen is black even after the user restarts the laptop. Which of the following should a technician do next to troubleshoot the issue?",
[
"Connect the laptop to an external monitor.",
"Remove the device bezel.",
"Plug in a laptop charger.",
"Replace the laptop."
],
0),

Q(415,
"A user reports that the office inkjet printer is making smudges on the printed pages. Which of the following tasks would best resolve the issue?",
[
"Apply a maintenance kit.",
"Clean the cartridge heads.",
"Clear any jams.",
"Replace the fuser."
],
1),

Q(416,
"Marketing department users report network performance degradation in the morning and early afternoon, but sales and customer service department users do not report any issues. All structured cabling is Cat 5e. All departments are connected to a core switch. Which of the following is the most likely cause of the performance issues?",
[
"The marketing department subnet has an error.",
"The structured Cat 5e cabling is outdated.",
"The interfaces are configured with incorrect IP addresses.",
"The marketing department interface is running at 10/100."
],
3),

Q(417,
"A user needs cellular internet connectivity for their laptop without using an external device. Which of the following technologies can the user use on their laptop to achieve this connection?",
[
"Bluetooth",
"Hotspot",
"SIM card",
"NFC"
],
2),

Q(418,
"A company wants to get the fastest network speeds possible between nearby locations. If all technologies are available, which of the following connection types should the company use?",
[
"Fiber",
"DSL",
"Satellite",
"Coaxial"
],
0),

Q(419,
"Which of the following describes an advantage of traditional HDDs over SSDs?",
[
"Faster data access speeds",
"Increased energy efficiency",
"Higher storage capacity per cost",
"Lower weight and size"
],
2),

Q(420,
"After a laptop screen has been replaced, the laptop is having Wi-Fi connectivity issues. No SSIDs are discovered. Bluetooth and Ethernet are working. Which of the following should a technician investigate first?",
[
"Wireless card",
"Wireless antenna",
"Wireless AP",
"Network interface card",
"Motherboard"
],
1),

Q(421,
"Which of the following is used to assign an IP address to a network PC?",
[
"VLAN",
"DNS",
"DHCP",
"TCP"
],
2),

Q(422,
"Which of the following offers access to business productivity applications for a recurring fee?",
[
"SaaS",
"DaaS",
"PaaS",
"IaaS"
],
0),

Q(424,
"Which of the following is a way to synchronize the clocks across all devices in an environment?",
[
"Reducing the DHCP lease duration",
"Using a public DNS server",
"Installing an HTTP server",
"Configuring an NTP server"
],
3),

Q(425,
"Which of the following cable types requires a user to manually turn the connector in a clockwise direction in order to securely attach the cable?",
[
"Ethernet",
"HDMI",
"Fiber-optic",
"Serial",
"Coaxial"
],
4),

Q(426,
"A technician installs a new workgroup MFP in a small office with a DHCP address. Immediately after the MFP is installed, office IoT devices using Wi-Fi experience connectivity issues. The office has a single Wi-Fi access point, and the IoT devices can only operate on the 2.4GHz spectrum. Which of the following should the technician do next to troubleshoot the issue?",
[
"Enable the Wi-Fi Direct feature on the MFP.",
"Configure the MFP with WPA3 instead of WPA2.",
"Connect the printer to the network using Ethernet.",
"Assign a unique static IP address."
],
2),

Q(427,
"A computer with two redundant drives is displaying an error: SMART failure predicted: Drive 1. A technician notes that a spare drive is not available and the computer is currently functioning normally. Which of the following should the technician do next?",
[
"Immediately remove the drive.",
"Request a replacement unit.",
"Rebuild the array.",
"Restore the computer base image."
],
1),

Q(428,
"Which of the following networking hardware devices is primarily used to connect different network segments and forward data based on MAC addresses?",
[
"Router",
"Switch",
"Modem",
"Firewall"
],
1),

Q(429,
"An administrator is configuring a bare-metal server to host several virtual machines. Which of the following should the administrator use to complete this task?",
[
"VLAN",
"Hypervisor",
"VDI",
"RDP",
"Container"
],
1),

Q(430,
"Which of the following is used to expose the wires in an unshielded twisted pair?",
[
"Loopback plug",
"Punchdown tool",
"Crimper",
"Cable stripper"
],
3),

Q(431,
"Which of the following wireless technologies has the most range but is susceptible to more interference?",
[
"NFC",
"Bluetooth",
"Wi-Fi 5",
"Infrared"
],
2),

Q(432,
"A technician is setting up a SOHO router. The environment requires DHCP to be disabled. Which of the following address types must the technician configure?",
[
"Static",
"Dynamic",
"Public",
"APIPA"
],
0),

Q(433,
"A company's directory services server is located on premises. Which of the following best describes the directory services infrastructure?",
[
"Hybrid cloud",
"Private cloud",
"Public cloud",
"Community cloud"
],
1),

Q(434,
"After a technician installs a new network printer, the technician discovers that one of the printer features is not available. Which of the following should the technician do first?",
[
"Update the firmware.",
"Contact the manufacturer for assistance.",
"Enable IPv6",
"Connect the printer with a USB cable."
],
0),

Q(435,
"A user’s monitor shows strange colored lines and flickers when adjusting the brightness. The user requires the device for daily professional tasks. Which of the following should a technician do to effectively address the screen issue, given cost and urgency considerations?",
[
"Suggest the user use a secondary monitor for essential tasks.",
"Conduct a factory reset to eliminate software issues",
"Install a screen protector to minimize flickering.",
"Check for loose connections on the display."
],
3),

Q(436,
"Which of the following technologies uses smartphones to allow contactless entry to secure areas?",
[
"NFC",
"IR",
"RFID",
"Bluetooth"
],
0),

Q(437,
"An administrator must configure a server that prioritizes data availability. Because the server will be accessed by many users, the administrator must also consider performance. Which of the following RAID levels best meets these requirements within a single array?",
[
"1",
"2",
"5",
"10"
],
3),

Q(438,
"An employee's corporate phone is experiencing connectivity issues. The user is unable to access the internet, send emails, or use business applications outside the office. The device is not in airplane mode, and Wi-Fi is turned off. Which of the following is the most likely cause of the issue?",
[
"The SIM is malfunctioning and needs to be replaced.",
"The user has exceeded the phone's mobile data plan.",
"The SSID settings are misconfigured.",
"The phone is missing security updates."
],
1),

Q(439,
"Which of the following display technologies is known for offering the highest contrast ratios?",
[
"LCD",
"LED",
"OLED",
"QLED"
],
2),

Q(440,
"A busy network printer is producing faded printouts after a technician performed maintenance on the printer several months ago. The technician now replaces the toner cartridge, but the issue persists. Which of the following should the technician check next?",
[
"The firmware version",
"The paper type",
"The drum unit for wear",
"The print resolution settings"
],
2),

Q(441,
"After several workstations received OS updates, users report that their network speeds have dropped. A technician verifies that the network speeds on other workstations are fine. Which of the following would most likely solve the issue on the updated workstations?",
[
"Rolling back to the previous driver",
"Replacing the network cards",
"Restarting the router",
"Switching the workstations to IPv6"
],
0),

Q(442,
"A user’s smartphone has stopped connecting to corporate Wi-Fi networks. The user has tried restarting the phone, but the issue persists. The device indicates full signal strength but fails to obtain an IP address during connection attempts. The user also notes that the smartphone can still connect to cellular data without any issues. Which of the following is the most likely cause of the connectivity issue?",
[
"DHCP server failure",
"Outdated smartphone firmware",
"Malfunctioning Wi-Fi antenna",
"Insufficient Wi-Fi signal strength"
],
0),

Q(443,
"A technician is migrating an application server to another server. Which of the following DNS records should the technician create to ensure seamless connectivity?",
[
"TXT",
"SPF",
"DKIM",
"CNAME"
],
3),

Q(444,
"A company network is spread across multiple office branches that are located within the same postal code and connected using leased lines. Which of the following best describes this network type?",
[
"Campus area network",
"Metropolitan area network",
"Local area network",
"Wide area network"
],
0),

Q(445,
"A user wants to use a new laptop to play audio and video to an office projector, but the laptop does not have VGA or HDMI. Which of the following adapters should the user buy?",
[
"USB-C to HDMI",
"MicroUSB to VGA",
"DisplayPort to VGA",
"DVI to HDMI"
],
0),

Q(446,
"Which of the following port numbers is used for NetBIOS?",
[
"110",
"137",
"143",
"445"
],
1),

Q(447,
"Which of the following describes a virtualization concept that improves resource utilization by allowing multiple operating systems to run on a single physical server?",
[
"Containerization",
"Virtual machine",
"Hypervisor",
"Microservices architecture"
],
1),

Q(448,
"Which of the following connector types would most likely be used to connect a fiber-optic cable to an SFP module?",
[
"ST",
"SC",
"FC",
"LC"
],
3),

Q(449,
"A developer needs to isolate a testing VM in a Type 1 hypervisor from the other guests. Which of the following does the administrator need to use to accomplish this task?",
[
"VDI",
"Container",
"Private cloud",
"Sandbox"
],
3),

Q(450,
"A technician is building a custom CAD workstation with a high-end graphics card. The customer requests that the system has the highest possible stability. Which of the following is the best choice for the power supply?",
[
"UPS",
"Redundant",
"Surge protector",
"Modular"
],
1),

Q(451,
"Which of the following tools would most likely be used to identify a cable's location in the network closet?",
[
"Loopback plug",
"Crimper",
"Toner probe",
"Network tap"
],
2),

Q(452,
"Which of the following is the best option to maintain a stable, tethered connection between a cell phone and a laptop?",
[
"Bluetooth",
"USB",
"Hotspot",
"NFC"
],
1),

Q(453,
"A technician is troubleshooting a computer that fails to start and makes frequent, unexpected sounds. The monitor remains blank, and no OS loads. Which of the following should the technician review first to diagnose this issue?",
[
"Output voltages of power supplies",
"Availability of CPU thermal paste",
"OS boot configuration",
"Proper installation of RAM modules"
],
3),

Q(454,
"Which of the following contains details about its manufacturer and is hardcoded?",
[
"DSL",
"MAC",
"APIPA",
"IP"
],
1),

Q(455,
"Which of the following is used to implement PoE?",
[
"Modem",
"Range extender",
"Media converter",
"Injector"
],
3),

Q(456,
"A technician replaces a motherboard in a desktop computer. After reassembling the system and turning it on, the computer fails to start, and no display output is shown. The power supply fan and case fans are working, but there are no beep codes or POST messages. Which of the following should the technician do first to make the computer turn on properly?",
[
"Replace the power supply with a higher wattage unit.",
"Ensure that the CPU power connector is properly installed.",
"Update the BIOS/UEFI firmware.",
"Reseat the memory modules."
],
1),

Q(457,
"Which of the following devices can provide combined data and power to hardwired VoIP phones in a small office?",
[
"Injector",
"PoE switch",
"Optical network terminal",
"Router"
],
1),

Q(458,
"A company requires a storage solution that combines performance and redundancy for a main database server with high levels of read/write operations. Which of the following storage configurations best meets these requirements?",
[
"RAID 0",
"RAID 5",
"RAID 6",
"RAID 10"
],
3),

Q(459,
"A user's laptop keyboard is distorted and is no longer flat. Which of the following components most likely failed?",
[
"Battery",
"RAM",
"Keyboard",
"HDD"
],
0),

Q(460,
"Which of the following types of RAM is typically used in servers?",
[
"SODIMM",
"Rambus",
"DDR3",
"ECC"
],
3),

Q(461,
"A specialist needs to configure a computer so that it will not boot up using any non-trusted or unsigned external devices that are connected to the computer. Which of the following should the specialist configure?",
[
"BIOS password",
"Secure Boot",
"USB settings",
"Single sign-on"
],
1),

Q(462,
"Which of the following RAM characteristics allows for recovery from data faults in memory modules?",
[
"Capacity",
"Speed",
"ECC",
"DDR",
"Parity"
],
2)

];

// Add all standard questions to your existing question bank
questions.push(...remainingQuestions);


// ======================================================
// PBQ / SIMULATION QUESTIONS
// Kept OUT of normal Battle Mode for now
// ======================================================

const pbqQuestions = [

P(76,
"SIMULATION - A customer recently experienced a power outage at a SOHO. The customer does not think the components are connected properly. A print job continued running for several minutes after the power failed, but the customer was not able to interact with the computer. Once the UPS stopped beeping, all functioning devices also turned off. In case of a future power failure, the customer wants to have the most time available to save cloud documents and shut down the computer without losing any data. INSTRUCTIONS - Based on the customer's requirements, connect the customer's devices to the proper outlets. Then, use the drop-down menus to select the power source for the surge protector and UPS."
),

P(77,
"SIMULATION - A user reports poor performance on the application server. INSTRUCTIONS - Click on Server 1 and Server 2 and review the information presented in each chart to determine which drives need to be replaced. Select the appropriate replacement drive that should be used, for the least performance degradation to the server."
),

P(89,
"HOTSPOT - A customer built a computer for gaming, sourcing individual components and then assembling the system. The OS starts up, but within a few minutes the machine locks up. The customer brought the computer to a technician to diagnose the issue. INSTRUCTIONS - Click on the BIOS system information and each component to view the specifications. Select the appropriate cause and resolution for the issue."
),

P(222,
"HOTSPOT - An office manager reports that a printer is experiencing performance issues. All double-sided printouts are getting stuck in the printer and must be manually removed. Additionally, there are streaks of faded text running down each page. INSTRUCTIONS - Select from the available printer parts to replace only the faulty components."
),

P(303,
"HOTSPOT - A technician is diagnosing several device issues reported by employees. INSTRUCTIONS - Click on each device to review the issue. Then select the appropriate issue and solution from the drop-down menu."
),

P(304,
"HOTSPOT - An office manager reports that a printer is experiencing performance issues. Printouts are smudging when they are handled and recently whenever they need to print legal sized documents, the paper jams before anything is printed on it."
),

P(357,
"SIMULATION - A user at site A is reporting dropped VoIP calls when using a softphone application. However, users at site B are not experiencing any issues. The VoIP provider has a tool to troubleshoot connectivity issues. INSTRUCTIONS - Investigate the cause of the dropped calls and make the necessary network configuration changes."
),

P(423,
"DRAG DROP - A support technician for a small office is asked to improve the signal quality of the wireless network. An employee located in Office 1 reports poor Wi-Fi performance, particularly during certain times of the day. The office has two access points, and management requests that electronics be located strategically to minimize signal interference."
)

];
];
