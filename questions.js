const questions = [
  {
    category: "Networking",
    question: "Which port is used by HTTPS?",
    answers: ["21", "22", "80", "443"],
    correct: 3,
    explanation: "HTTPS uses TCP port 443."
  },

  {
    category: "Networking",
    question: "Which service automatically assigns IP addresses to devices?",
    answers: ["DNS", "DHCP", "SMTP", "SSH"],
    correct: 1,
    explanation: "DHCP automatically assigns IP configuration to clients."
  },

  {
    category: "Networking",
    question: "Which port does SSH use by default?",
    answers: ["20", "21", "22", "23"],
    correct: 2,
    explanation: "SSH uses TCP port 22."
  },

  {
    category: "Hardware",
    question: "Which component temporarily stores data currently being used by the CPU?",
    answers: ["SSD", "RAM", "PSU", "HDD"],
    correct: 1,
    explanation: "RAM provides temporary working memory for active programs and data."
  },

  {
    category: "Hardware",
    question: "Which connector is commonly used for wired Ethernet networking?",
    answers: ["RJ11", "RJ45", "USB-A", "HDMI"],
    correct: 1,
    explanation: "RJ45 connectors are commonly used with Ethernet cables."
  },

  {
    category: "Hardware",
    question: "Which expansion slot is commonly used for a modern graphics card?",
    answers: ["PCIe x16", "PCIe x1", "DIMM", "M.2"],
    correct: 0,
    explanation: "Modern graphics cards normally use a PCIe x16 slot."
  },

  {
    category: "Printers",
    question: "Which laser printer component bonds toner to the paper using heat and pressure?",
    answers: ["Drum", "Fuser", "Pickup roller", "Transfer belt"],
    correct: 1,
    explanation: "The fuser uses heat and pressure to permanently bond toner to paper."
  },

  {
    category: "Storage",
    question: "Which RAID level mirrors data across two drives?",
    answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
    correct: 1,
    explanation: "RAID 1 uses disk mirroring for redundancy."
  },

  {
    category: "Wireless",
    question: "Which Wi-Fi frequency typically provides greater range?",
    answers: ["2.4 GHz", "5 GHz", "6 GHz", "60 GHz"],
    correct: 0,
    explanation: "2.4 GHz generally provides greater range and better wall penetration."
  },

  {
    category: "Troubleshooting",
    question: "A computer receives an IP address beginning with 169.254. What is the most likely cause?",
    answers: [
      "DNS failure",
      "DHCP server unavailable",
      "Bad monitor",
      "Failed GPU"
    ],
    correct: 1,
    explanation: "169.254.x.x is an APIPA address commonly assigned when DHCP cannot be reached."
  }
];
