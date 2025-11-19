import { Cpu, Smartphone, Bot, Code, Terminal, Layers } from 'lucide-react';
import { Project, ProjectCategory, SkillGroup, Achievement } from './types';

export const CONTACT_INFO = {
  email: "navendu6002@gmail.com",
  phone: "7306589241",
  linkedin: "https://linkedin.com/in/navendu",
  github: "https://github.com/navendu",
  youtube: "https://youtube.com/@navendu"
};

export const HERO_CONTENT = {
  headline: "Hi, I’m Navendu Flutter Developer building smart, connected experiences that seamlessly integrate mobile apps with embedded hardware.",
  subtext: "I build mobile apps in Flutter and integrate them with embedded hardware and Linux-based systems to deliver end-to-end solutions enhanced by AI and automation."
};

export const ABOUT_CONTENT = "I’m Navendu - a Flutter developer who integrates mobile apps with embedded hardware and Linux workflows to build dependable, real-world systems. I focus on practical connectivity: apps communicating with devices, devices sending data back, and AI making everything smarter.";

export const SKILLS: SkillGroup[] = [
  {
    title: "Turning Coffee into Apps",
    icon: Smartphone,
    skills: [
      "Dart & Flutter",
      "REST APIs",
      "Provider, Bloc, GetX",
      "DSA & Problem Solving",
      "App Architecture & UI/UX"
    ],

  },
  {
    title: "Systems That Talk to Devices",
    icon: Cpu,
    skills: [
      "Embedded Hardware Dev",
      "Linux Dev & Deployment",
      "Serial, BLE, WiFi Integration",
      "IoT Protocols",
      "Prototyping"
    ]
  },
  {
    title: "AI,Automation & Intelligence",
    icon: Bot,
    skills: [
      "n8n Automation Flows",
      "Gemini API Integrations",
      "Home Assistant",
      "Offline Voice/Edge Inference",
      "Emotion Recognition"
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Inspire Award – MANAK",
    organization: "Govt. of India",
    description: "Awarded ₹10,000 for a smart home automation prototype innovation.",
    image: "/src/INSPIRE.jpg"
  },
  {
    title: "AI Workshop Leader",
    organization: "PPTM College, Vengara",
    description: "From consuming knowledge to sharing it. Taught BBA students effective AI prompting and practical automation techniques.",
    image: "/src/PPTMS.jpg"
  }
];

export const PROJECTS: Project[] = [
  // Software
  {
    id: 's1',
    title: 'E-Stocker',
    description: 'Inventory Management System featuring barcode/QR scanning, invoice generation, and real-time stock tracking.',
    longDescription: "E-Stocker is a comprehensive inventory management solution built with Flutter. It bridges the gap between physical stock and digital records using the device camera for rapid barcode scanning. The app handles complex invoicing logic, generates PDF reports on the fly, and syncs data in real-time across multiple devices using Hive.",
    features: [
      "Real-time Hive Database Sync",
      "PDF Invoice Generation & Sharing",
      "Barcode & QR Code Scanner Integration",
      "Role-based User Authentication",
      "View Your monthly Daily Stock Report"
    ],
    techStack: ['Flutter', 'Hive', 'PDF Generation', 'Scanner'],
    category: ProjectCategory.SOFTWARE,
    imageUrl: "/src/estocker.png",
    status: "Deployed",
    githubUrl: 'https://github.com/Navendu-cyber/E_Stocker',
    demoUrl: 'https://www.linkedin.com/posts/navendu-mp-flutter_inventorymanagement-digitaltransformation-activity-7312508074269761536-zcnf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFKq-g8BGnzTgLAhXCEVU-k53kAW5-tJYZkm'
  },
  {
    id: 's3',
    title: 'Wake-Ease',
    description: 'Local network utility to wake machines via LAN magic packets from a mobile interface.',
    longDescription: "A utility tool for network administrators and power users. This Flutter app scans the local network to discover devices and allows sending Wake-on-LAN (WoL) magic packets to boot up machines remotely. It includes a history of managed devices and status checking via ping.",
    features: [
      "Network Device Discovery",
      "Magic Packet Broadcasting",
      "Device Status Monitoring",
      "Saved Device Profiles"
    ],
    techStack: ['Flutter', 'UDP', 'Networking'],
    category: ProjectCategory.SOFTWARE,
    imageUrl: "/src/wakeease.png",
    status: "v1.0.0"
  },
  // Hardware
  {
    id: 'h1',
    title: 'Wi-Fi Deauth & Signal Tool',
    description: 'A completed hardware device for wireless signal experiments with an on-device display and physical controls.',
    longDescription: "This custom-built hardware tool is designed for network security research. Built around the ESP 32, it features a custom PCB, an OLED display for real-time packet visualization, and a rotary encoder for standalone menu navigation. It can perform deauthentication attacks (for testing purposes) and analyze signal strength distributions.",
    features: [
      "Packet Injection & Monitoring",
      "Standalone OLED Interface",
      "Physical Rotary Encoder Control",
      "Portable Battery Power"
    ],
    techStack: ['ESP32', 'C++', 'OLED', 'Encoder'],
    category: ProjectCategory.HARDWARE,
    imageUrl: "/src/wifi.png",
    status: "System Active",
    demoUrl: 'https://www.linkedin.com/posts/navendu-mp-flutter_cybersecurity-esp32-iotdevelopment-activity-7324477262014070785-FAKn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFKq-g8BGnzTgLAhXCEVU-k53kAW5-tJYZk'
  },
  {
    id: 'h2',
    title: 'Hexa Offline AI Voice Assistant',
    description: 'A privacy-first, local voice assistant running on Linux devices for smart device control without cloud dependency.',
    longDescription: "Hexa is a voice assistant that prioritizes privacy by running entirely offline. It utilizes VOSK for speech-to-text and a custom Python engine for intent recognition. Running on a Raspberry Pi, it interfaces with Home Assistant via MQTT to control IoT devices without sending voice data to external cloud servers.",
    features: [
      "Offline Speech Recognition (VOSK)",
      "MQTT Integration for IoT Control",
      "Custom Wake Word Detection",
      "Low Latency Local Processing"
    ],
    techStack: ['Python', 'Linux', 'Speech Recognition', 'NLP'],
    category: ProjectCategory.HARDWARE,
    imageUrl: "src/hexa.png",
    status: "Online",
    demoUrl: 'https://www.linkedin.com/posts/navendu-mp-flutter_edgecomputing-privacyfirst-offlineai-activity-7321825308951678976-cpsb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFKq-g8BGnzTgLAhXCEVU-k53kAW5-tJYZk',
    githubUrl: 'https://github.com/Navendu-cyber/lixi_voice_typer'
  },
  {
    id: 'h3',
    title: 'AI Emotion-Based Music Player',
    description: 'Uses computer vision to detect user emotion and matches music playback accordingly.',
    longDescription: "This system uses a camera to capture facial expressions and a lightweight CNN model to classify emotions (happy, sad, neutral, etc.) in real-time. Based on the detected mood, it communicates with a Flutter-based media player to curate and play appropriate playlists automatically.",
    features: [
      "Real-time Facial Expression Recognition",
      "Emotion-mapped Playlist Generation",
      "Flutter Mobile Remote Control",
      "Computer Vision Integration"
    ],
    techStack: ['OpenCV', 'Python', 'Flutter Interface'],
    category: ProjectCategory.HARDWARE,
    imageUrl: "src/music.png",
    status: "Processing",
    demoUrl: 'https://www.linkedin.com/posts/navendu-mp-flutter_ai-musictech-computervision-activity-7316805708098789376-RMeH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFKq-g8BGnzTgLAhXCEVU-k53kAW5-tJYZk'
  },
  {
    id: 'h4',
    title: 'Aura-Sync',
    description: 'Hybrid project combining mobile UI and embedded hardware to sync LED effects and device controls.',
    longDescription: "Aura-Sync creates a seamless bridge between mobile apps and physical lighting. The Flutter app communicates via BLE (Bluetooth Low Energy) to an Arduino controller, allowing users to design custom lighting patterns, sync lights to music, and schedule on/off times.",
    features: [
      "Bluetooth Low Energy (BLE) Comms",
      "Custom Color Pattern Editor",
      "Music Visualization Mode",
      "Hardware-Software Sync"
    ],
    techStack: ['Flutter', 'BLE', 'Arduino', 'C++'],
    category: ProjectCategory.HARDWARE,
    imageUrl: "src/aura.png",
    status: "Enabled"
  },
  {
    id: 'h5',
    title: 'PC Hardware Monitor',
    description: 'Live hardware monitor displaying system metrics on a dedicated physical external display.',
    longDescription: "A dedicated hardware monitor built to display CPU, GPU, and RAM usage in real-time. It uses a Python script on the host PC to fetch telemetry data and sends it via Serial/USB to an external microcontroller driving a high-refresh-rate TFT display.",
    features: [
      "Real-time Telemetry Fetching",
      "Serial Data Transmission",
      "Custom GUI on Embedded Display",
      "Low System Overhead"
    ],
    techStack: ['Serial Comm', 'Python', 'Hardware Interface'],
    category: ProjectCategory.HARDWARE,
    imageUrl: "src/monitor.jpg",
    status: "Monitoring",
    githubUrl: 'https://github.com/Navendu-cyber/cpu_monitor_ESP_32_usb_serail',
  }

];