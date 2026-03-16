export const PROFILE = {
  name: "Sai Manasa Alamuri",
  initials: "SM",
  tagline: "Verification & Design Engineer",
  subtitle: "RTL Design · UVM Verification · Analog/Mixed-Signal IC Design",
  email: "saimanasaalamuri@csus.edu",
  phone: "669-317-8640",
  linkedin: "https://linkedin.com/in/saimanasa",
  location: "Sacramento, CA, USA",
  award: "Research Assistantship Program (RAP) Award — CSUS College of Engineering, Spring 2026",
};

export const STATS = [
  { num: "640 Mbps", label: "AES-GCM Throughput" },
  { num: "98%", label: "Functional Coverage" },
  { num: "4.0", label: "GPA — MSEE" },
  { num: "5+", label: "Cadence Certifications" },
];

export const ABOUT = [
  "I am a Verification and Design specialist pursuing my Master of Science in Electrical and Electronic Engineering at California State University, Sacramento (GPA: 4.0). My expertise bridges digital and analog domains — from building UVM testbenches for multi-protocol storage ASICs to designing low-power analog front-ends for biomedical applications.",
  "During my internship at Western Digital, I owned the verification of critical transmit FIFO and packet filtering modules, achieving 98% functional coverage and identifying critical bugs in high-speed data paths. I bring a rigorous, methodical approach to both design and verification challenges.",
  "I am passionate about creating robust hardware solutions — whether that means writing synthesizable RTL for a cryptographic engine, building reusable UVM components, or optimizing op-amp performance across PVT corners.",
];

export const EDUCATION = [
  { school: "California State University, Sacramento", degree: "M.S. Electrical & Electronic Engineering", gpa: "4.0", year: "2024 – 2026" },
  { school: "RGUKT IIIT-Basar", degree: "B.Tech Electronics & Communications Engineering", gpa: "3.6", year: "2017 – 2021" },
];

export const EXPERIENCE = [
  { role: "ASIC Verification Intern", company: "Western Digital Corporation", period: "May 2025 – Aug 2025", location: "Roseville, CA" },
  { role: "Research Assistant", company: "CSUS — Biomedical SoC", period: "Jul 2025 – Aug 2025", location: "Sacramento, CA" },
  { role: "Lab Instructor", company: "CSUS — Digital Logic Design", period: "Aug 2025 – Dec 2025", location: "Sacramento, CA" },
  { role: "Systems Engineer", company: "Infosys Limited", period: "Oct 2021 – Jun 2023", location: "Hyderabad, India" },
];

export const PROJECTS = [
  {
    id: "aes-gcm",
    title: "Hardware-Accelerated AES-GCM Data Transmission Core",
    domain: "Design + Verification",
    tags: ["Verilog/SV", "UVM", "Cadence Xcelium", "GF(2^128)", "FSM Design"],
    icon: "🔐",
    summary: "A complete AES-GCM authenticated encryption engine in RTL — designed, integrated, and verified from scratch using professional UVM methodology.",
    story: "Western Digital was where my curiosity turned into a healthy obsession. I was learning how storage systems juggle different protocols and still deliver data on time, every time. The job taught me something you can't unsee: when systems get that fast and that layered, every detail matters—timing, correctness, and trust.\n\nThe more I learned, the more one question followed me around: how do you keep all that speed without gambling with security? I wanted to build something that lives in the same world—performance-critical, correctness-critical, and security-critical. That became my North Star and led me to building an AES-GCM hardware accelerator: a practical, widely used approach to authenticated encryption that sits right at the intersection of high-throughput data paths and correctness-critical security.",
    problem: "In today's threat landscape, you can't choose between fast or secure—you need both. Software encryption chokes at high data rates, leaving systems vulnerable or slow. This hardware AES-GCM accelerator eliminates that trade-off, offloading the entire cryptographic pipeline to dedicated silicon, achieving line-rate authenticated encryption while freeing the CPU to do what it does best: everything else.",
    solution: [
      "Designed a complete AES-GCM authenticated encryption engine in RTL using Verilog and SystemVerilog with modular architecture including GF(2^128) multiplier, GHASH core, CTR mode encryption, and 11-state control FSM",
      "Integrated industry-standard Secworks AES-128 core with custom GCM logic, implementing proper two-stage key expansion and zero-block hash key generation",
      "Architected streaming datapath with FIFO buffering and DMA interface to decouple cryptographic latency from system throughput",
      "Verified using directed testbenches and professional UVM methodology with transaction-level modeling, constrained-random stimulus, and NIST test vector validation",
      "Debugged through systematic FSM state monitoring and waveform analysis in Cadence Xcelium to resolve timing hazards and handshake protocols",
    ],
    impact: [
      "Implemented and verified 4-cycle GF(2^128) Galois field multiplier with 2 NIST test vectors passing",
      "Built GHASH authentication core passing 4 distinct test cases including zero input, single block, and multi-block scenarios",
      "Integrated real Secworks AES-128 core achieving successful encryption with key expansion completing in 40 cycles and block encryption in 10 cycles",
      "Designed 11-state FSM successfully managing IDLE, INIT_HASH_KEY, WAIT_KEY_READY, ENCRYPT_ZERO, WAIT_HASH_KEY, PROCESS_AAD, PROCESS_PT, SEND_LENGTH, WAIT_GHASH, COMPUTE_TAG, and DONE states",
      "Generated correct ciphertext output e180afa8d2600948551aef4609cf4f3d for test input 00112233445566778899AABBCCDDEEFF",
      "Developed complete UVM testbench with 11 components including interface, driver, monitor, sequencer, agent, scoreboard, and 3 test suites",
      "Achieved 20-25 cycle per block latency in simulation yielding 512-640 Mbps throughput at 100MHz clock",
      "Verified correct operation across 4 test scenarios: initialization, AAD processing, plaintext encryption, and tag finalization",
    ],
    quickStats: [
      { label: "Throughput", value: "640 Mbps" },
      { label: "FSM States", value: "11" },
      { label: "UVM Verified", value: "100%" },
      { label: "NIST Compliant", value: "Yes" },
    ],
    blockDiagram: "/images/block_diagram.png",
  },
  {
    id: "protocol-converter",
    title: "Storage Protocol Converter ASIC Verification",
    domain: "Design Verification",
    tags: ["SystemVerilog", "UVM", "Cadence Xcelium", "Cadence IMC"],
    icon: "🔍",
    summary: "Owned verification of transmit FIFO and packet filtering modules in a multi-protocol storage converter ASIC at Western Digital Corporation.",
    story: null,
    problem: "Storage protocol converter ASICs with high-speed data paths require rigorous verification of clock domain crossings, packet filtering, and data integrity across protocol boundaries.",
    solution: [
      "Built UVM testbench with predictors, checkers, and randomized sequences with error injection",
      "Developed directed tests for clock domain crossing and faulty frame detection",
      "Resolved timing and control logic bugs via regression analysis",
      "Created reusable verification components for future testbench development",
    ],
    impact: [
      "98% functional coverage achieved",
      "Critical bugs identified and resolved",
      "Reusable components reduced future development time by 30%",
    ],
    quickStats: [
      { label: "Coverage", value: "98%" },
      { label: "Bug Impact", value: "Critical" },
      { label: "Dev Time Saved", value: "30%" },
    ],
    blockDiagram: null,
  },
  {
    id: "digital-design",
    title: "Digital Design: FIFO, DMA & MAC-Learning Switch",
    domain: "RTL Design",
    tags: ["SystemVerilog", "Cadence Xcelium", "Quartus Prime", "DE10-Lite"],
    icon: "⚡",
    summary: "Designed synthesizable RTL for parameterizable FIFO, DMA controller with arbitration logic, and MAC-learning four-port switch using modular SystemVerilog.",
    story: null,
    problem: "Building fundamental digital building blocks with production-quality RTL requires parameterizable, synthesizable, and thoroughly verified designs.",
    solution: [
      "Designed parameterizable FIFO with configurable depth and width",
      "Implemented DMA controller with priority-based arbitration logic",
      "Built MAC-learning four-port Ethernet switch with address table management",
      "Developed OOP-based testbench with drivers, monitors, and directed tests",
    ],
    impact: [
      "Functional correctness verified via simulation and waveform analysis",
      "Successfully implemented on Intel DE10-Lite FPGA",
      "Modular architecture enables reuse across projects",
    ],
    quickStats: [
      { label: "FPGA Verified", value: "Yes" },
      { label: "Architecture", value: "Modular" },
      { label: "Testbench", value: "OOP-based" },
    ],
    blockDiagram: null,
  },
  {
    id: "analog-mixed-signal",
    title: "Analog & Mixed-Signal IC Design",
    domain: "Analog/Mixed-Signal",
    tags: ["Cadence Virtuoso"],
    icon: "📊",
    summary: "Designed and optimized DAC with thermometer-coded architecture and two-stage CMOS Op-Amp with Miller compensation.",
    story: null,
    problem: "High-resolution DACs suffer from glitches at major bit transitions, and op-amps require careful compensation to achieve stability across process, voltage, and temperature corners.",
    solution: [
      "Employed thermometer-coded architecture for MSBs to eliminate major transition glitches",
      "Used binary-scaled architecture for LSBs to reduce chip area",
      "Designed two-stage CMOS Op-Amp with Miller compensation for stability",
      "Validated across PVT corners for robust performance",
    ],
    impact: [
      ">40dB gain achieved in op-amp design",
      ">60° phase margin ensuring stability",
      "Transient response close to theoretical values",
      "Improved DAC accuracy and monotonicity",
    ],
    quickStats: [
      { label: "Gain", value: ">40dB" },
      { label: "Phase Margin", value: ">60°" },
      { label: "PVT Validated", value: "Yes" },
    ],
    blockDiagram: null,
  },
  {
    id: "biomedical-soc",
    title: "Implantable Biomedical SoC",
    domain: "Research — Analog Design",
    tags: ["Cadence Virtuoso", "Analog Front-End"],
    icon: "🧬",
    summary: "Contributed to implantable biomedical SoC design for gastrointestinal signal monitoring and diagnosis as a Research Assistant at CSUS.",
    story: null,
    problem: "Implantable biomedical devices for GI signal monitoring require ultra-low-power analog front-ends with high sensitivity and reliability across biological operating conditions.",
    solution: [
      "Designed analog front-end components including two-stage operational amplifier",
      "Implemented ADC for low-power signal acquisition",
      "Optimized for implantable form factor and power constraints",
      "Validated performance targets across PVT corners",
    ],
    impact: [
      ">40dB gain achieved",
      ">60° phase margin validated",
      "Met low-power targets for implantable use",
      "Performance validated across PVT corners",
    ],
    quickStats: [
      { label: "Gain", value: ">40dB" },
      { label: "Phase Margin", value: ">60°" },
      { label: "Low Power", value: "Yes" },
    ],
    blockDiagram: null,
  },
];

export const SKILLS = {
  "HDL & Verification": ["SystemVerilog", "Verilog", "UVM"],
  "EDA Tools": ["Cadence Xcelium", "Cadence IMC", "Cadence Virtuoso", "Quartus Prime", "QuestaSim", "Xilinx ISE"],
  "Protocols": ["NVMe", "NVMe-oF", "PCIe", "TCP", "RoCE", "I2C", "SPI", "UART"],
  "Programming": ["Python", "Java (OOP)", "C", "Assembly"],
  "Dev Tools": ["Vim", "GIT", "JIRA", "MATLAB", "Simulink", "STM32CubeIDE"],
};

export const CERTIFICATIONS = [
  "SystemVerilog Accelerated Verification with UVM — Cadence",
  "SystemVerilog for Design and Verification — Cadence",
  "Basic Static Timing Analysis — Cadence",
  "Design for Test Fundamentals — Cadence",
  "Beginner Workshop for Intel FPGAs — Intel",
  "Semiconductor Fabrication 101 — Purdue & Intel",
];