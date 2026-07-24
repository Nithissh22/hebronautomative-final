export interface SpecItem {
  icon: string;
  label: string;
  value: string;
}

export interface EquipmentItem {
  name: string;
  qty: string;
}

export interface CapabilityData {
  id: string;
  number: string;
  title: string;
  powerStatement: string;
  imageSrc: string;
  certBadge?: string;
  specs: SpecItem[];
  equipmentList: EquipmentItem[];
  processFlow: string[];
  trustPoints: string[];
  ctaText: string;
  drawerKey: string;
}

export const capabilitiesList: CapabilityData[] = [
  {
    id: "die-casting",
    number: "01",
    title: "DIE CASTING",
    powerStatement: "Cold chamber HPDC with zero-defect delivery to Tier-1 OEMs",
    imageSrc: "/images/die-casting-hq.png",
    certBadge: "IATF 16949:2016 Certified",
    specs: [
      { icon: "ti-weight", label: "Tonnage", value: "120 - 800" },
      { icon: "ti-building-factory", label: "Machines", value: "PDC Machines" },
      { icon: "ti-atom", label: "Alloys", value: "ADC12, AC2BF, Aluminium Alloys" }
    ],
    equipmentList: [
      { name: "120T Machine", qty: "" },
      { name: "180T Machine", qty: "" },
      { name: "250T Machine", qty: "" }
    ],
    processFlow: ["Melt", "Inject", "Cool", "Trim", "Inspect"],
    trustPoints: [
      "High volume repeatability",
      "Tight dimensional tolerances",
      "Lower per-unit cost at scale"
    ],
    ctaText: "Request Die Casting Quote →",
    drawerKey: "die-casting"
  },
  {
    id: "cnc-machining",
    number: "02",
    title: "VMC MACHINES-HAAS USA",
    powerStatement: "4th axis precision machining for complex automotive geometries",
    imageSrc: "/images/vmc_machine_uploaded.jpg",
    certBadge: "IATF 16949:2016 Certified",
    specs: [
      { icon: "ti-cpu", label: "Type", value: "4th Axis VMC" },
      { icon: "ti-building-factory", label: "Machines", value: "VMC Machines" },
      { icon: "ti-atom", label: "Material", value: "ADC12, AC2BF, Aluminium Alloys" }
    ],
    equipmentList: [
      { name: "VMC Machine", qty: "" },
      { name: "Tool Room Setup", qty: "" }
    ],
    processFlow: ["Raw Stock", "Setup", "Machine", "Deburr", "CMM"],
    trustPoints: [
      "Mirror-finish surface quality",
      "Sub-micron repeatability",
      "Fully automated tool change"
    ],
    ctaText: "Request Machining Quote →",
    drawerKey: "machining"
  },
  {
    id: "powder-coating",
    number: "03",
    title: "POWDER COATING",
    powerStatement: "Semi-automatic coating line for corrosion-resistant OEM finishes",
    imageSrc: "/images/powder_cap_uploaded.jpg",
    specs: [
      { icon: "ti-settings", label: "Type", value: "Semi-Automatic" },
      { icon: "ti-palette", label: "Finish", value: "all colours" },
      { icon: "ti-layers", label: "Thickness", value: "60–80 microns" },
      { icon: "ti-chart-bar", label: "Capacity", value: "High Volume" }
    ],
    equipmentList: [
      { name: "Spray Booth", qty: "" },
      { name: "Curing Oven", qty: "" },
      { name: "Pre-treatment Tank", qty: "" }
    ],
    processFlow: ["Pre-treat", "Dry", "Coat", "Cure", "QC"],
    trustPoints: [
      "Salt spray tested",
      "OEM color matching",
      "Zero adhesion failures"
    ],
    ctaText: "Request Coating Quote →",
    drawerKey: "powder-coating"
  },
  {
    id: "sub-assembly",
    number: "04",
    title: "SUB-ASSEMBLY",
    powerStatement: "",
    imageSrc: "/images/cap-sub-assembly.png",
    specs: [
      { icon: "ti-settings-2", label: "Method", value: "Torque Verified" }
    ],
    equipmentList: [
      { name: "Press Machine", qty: "" },
      { name: "Torque Station", qty: "" },
      { name: "Inspection Bench", qty: "" }
    ],
    processFlow: ["Receive", "Press", "Torque", "Check", "Pack"],
    trustPoints: [
      "100% torque verification",
      "Part-level traceability",
      "Delivery-ready assembly"
    ],
    ctaText: "Request Assembly Quote →",
    drawerKey: "assembly"
  },
  {
    id: "quality-systems",
    number: "05",
    title: "QUALITY & INSPECTION",
    powerStatement: "Standard room with full metrology suite — zero escapes policy",
    imageSrc: "/images/cap-quality-inspection.png",
    certBadge: "IATF 16949:2016 Certified",
    specs: [
      { icon: "ti-certificate", label: "Standard", value: "IATF 16949:2016" }
    ],
    equipmentList: [
      { name: "UTM", qty: "" },
      { name: "Spectrometer", qty: "" },
      { name: "VMM", qty: "" },
      { name: "2D Projector", qty: "" }
    ],
    processFlow: ["Receive", "Measure", "Report", "Release", "Archive"],
    trustPoints: [
      "100% dimensional reporting",
      "First-article inspection",
      "Customer PPAP ready"
    ],
    ctaText: "Request Quality Audit →",
    drawerKey: "quality"
  }
];
