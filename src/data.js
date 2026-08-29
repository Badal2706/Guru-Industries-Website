export const products = [
  {
    symbol: 'O₂', name: 'Oxygen', cat: 'Pure Gases',
    desc: 'High-purity O₂ for steel, welding & healthcare',
    details: 'Oxygen, a colorless and odorless gas, constitutes 21% of the air and is the most common element on Earth. It is crucial for processes requiring high temperatures and enhances the combustion of flammable materials. Key applications include melting, welding & cutting in steel industries, as well as ship breaking and building.',
    specs: [
      { label: 'Colour', value: 'Black' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'O₂' },
      { label: 'Contents', value: '7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 309' },
      { label: 'Req. Pressure', value: '140-150 kg./cm²' },
    ],
  },
  {
    symbol: 'N₂', name: 'Nitrogen', cat: 'Pure Gases',
    desc: 'Inerting, blanketing & purging grade N₂',
    details: 'Comprising 78% of the air, nitrogen is utilized in applications where oxygen is undesirable due to its ability to displace it. In its cryogenic liquid form, nitrogen serves as an efficient coolant. Common uses include protecting production processes (e.g. printed board assemblies), cooling & freezing food, inerting pipelines or tanks, and various cryogenic industrial applications. It is also integral to the manufacture of products based on small-molecule active pharmaceutical ingredients (API).',
    specs: [
      { label: 'Colour', value: 'Grey with Black Neck (Shoulder)' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'N₂' },
      { label: 'Contents', value: '7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 1747' },
      { label: 'Req. Pressure', value: '140-150 kg./cm²' },
    ],
  },
  {
    symbol: 'CO₂', name: 'Carbon Dioxide', cat: 'Pure Gases',
    desc: 'Food-grade & industrial carbon dioxide',
    details: 'High-purity carbon dioxide, typically obtained as a chemical industry by-product or from underground sources, is used in industrial applications as a liquid, gas or solid (dry ice). Its diverse properties lend it to carbonated beverage manufacturing, food processing for cooling, preservation or pH control, chemical blanketing, pH control in water treatment, metal welding shielding, stimulating biological growth, and as a fire-extinguishing agent.',
    specs: [
      { label: 'Colour', value: 'Black Color with White Neck' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'CO₂' },
      { label: 'Contents', value: 'KG.' },
      { label: 'Indian Standard', value: 'IS : 307' },
    ],
  },
  {
    symbol: 'H₂', name: 'Hydrogen & Hydrogen Filling', cat: 'Pure Gases',
    desc: 'Ultra-pure H₂ supply and hydrogen cylinder filling',
    details: 'Hydrogen, the lightest and most abundant chemical element in the Universe, is present in all living organisms. Industrially it is produced from natural gas or through water electrolysis. It is extensively used as a carrier gas in gas chromatography and as an ambient gas for annealing furnaces in special steel production and sintering furnaces in powder metallurgy. Additionally, it plays a role in glass engineering and optical fiber processing.',
    specs: [
      { label: 'Colour', value: 'Signal Red' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'H₂' },
      { label: 'Contents', value: '7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 1090' },
      { label: 'Req. Pressure', value: '140-150 kg./cm²' },
    ],
    list: ['Hydrogen cylinder filling to 150 kg/cm²', 'Cylinder and cascade filling for process, laboratory and fuel use'],
  },
  {
    symbol: 'C₂H₂', name: 'Dissolved Acetylene', cat: 'Pure Gases',
    desc: 'Stable DA for cutting & welding',
    details: 'Acetylene is a colorless, combustible gas with a distinctive odor, requiring special precautions during production and handling. It is commonly used in oxy-acetylene welding and metal cutting, and as a raw material for producing various organic chemicals essential for polyurethane and polyester plastics.',
    specs: [
      { label: 'Colour', value: 'Maroon' },
      { label: 'Water Capacity', value: '41 Liter' },
      { label: 'Chemical Name', value: 'C₂H₂' },
      { label: 'Contents', value: '5 to 7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 308' },
      { label: 'Req. Pressure', value: '12-17 kg./cm²' },
    ],
  },
  {
    symbol: 'Ar', name: 'Argon', cat: 'Pure Gases',
    desc: 'Shielding gas for TIG / MIG welding',
    details: 'Argon is produced through the fractional distillation of liquid air and is primarily used as an inert shielding gas in welding and other high-temperature industrial processes where typically non-reactive substances become reactive. It is combined with other gases for welding automotive components like auto parts, frames & mufflers. Argon also provides an oxygen and nitrogen-free environment for annealing processes and is a vital component in airbags.',
    specs: [
      { label: 'Colour', value: 'Peacock Blue' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'Ar' },
      { label: 'Contents', value: '7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 5760' },
      { label: 'Req. Pressure', value: '140-150 kg./cm²' },
    ],
  },
  {
    symbol: '✚', name: 'Medical Gases', cat: 'Medical',
    desc: 'Life-support grade gases for hospitals',
    details: 'Medical gases, including oxygen, nitrogen & nitrous oxide, are essential for healthcare, particularly in clinical treatment and emergency medicine. Medical oxygen supports respiration, while liquid nitrogen is used for cryotherapy, cryosurgery & biological material storage. Nitrous oxide is indispensable for analgesia, anesthetic induction and combined anesthesia.',
  },
  {
    symbol: 'He', name: 'Helium', cat: 'Specialty',
    desc: 'Leak-testing, cryogenic & lifting helium',
    details: 'Helium is an inert gas, the second lightest element, characterized by being colorless, odorless & tasteless. It liquefies at an extremely low temperature of −268.9 °C. It is employed as an inert-gas atmosphere for welding metals like aluminum, in rocket propulsion for pressurizing fuel tanks, in meteorology as a lifting gas for balloons, in cryogenics as a coolant, and in high-pressure breathing operations when mixed with oxygen.',
  },
  {
    symbol: 'NH₃', name: 'Ammonia', cat: 'Specialty',
    desc: 'Anhydrous NH₃ for refrigeration & industry',
    details: 'Ammonia is a colorless, pungent gas composed of nitrogen & hydrogen, serving as the simplest stable compound of these elements and a precursor for many commercially significant nitrogen compounds. Its primary use is as a fertilizer, often applied directly to soil as liquefied gas or as ammonium salts. It is also used in manufacturing commercial explosives, in the textile industry for synthetic fibers, dyeing & scouring, as a catalyst in synthetic resins, for neutralizing acidic by-products in petroleum refining, and in the rubber industry to prevent latex coagulation. Ammonia is integral to the ammonia-soda (Solvay) process, the Ostwald process, and metallurgical processes like nitriding. Its ability to absorb substantial heat makes it useful as a coolant in refrigeration & air-conditioning.',
  },
  {
    symbol: 'HCl', name: 'Anhydrous HCl / Dry HCL Gas', cat: 'Specialty',
    desc: 'Dry HCl for pharma & semiconductor',
    details: 'Anhydrous hydrogen chloride (AHCl) is a colorless gas that readily dissolves in water to form hydrochloric acid. Its hygroscopic nature causes it to form white fumes — a mist of hydrochloric acid — in moist air. AHCl is used to mediate the growth of epitaxial films of silicon, germanium & III-V materials, and to remove surface oxides and etch metallic thin films.',
  },
  {
    symbol: 'R', name: 'Refrigerant Gases', cat: 'Specialty',
    desc: 'Complete range of refrigerant gases',
  },
  {
    symbol: 'Mx', name: 'Calibration Gas Mixture', cat: 'Specialty',
    desc: 'Certified multi-component mixtures',
    details: 'A calibration gas is a blend of two or more gases with a carrier gas, serving as a reference for calibrating analytical instruments, gas analyzers & detectors in laboratories and research centers. The accuracy of calibration gas is paramount and must be traceable to national or international standards. Key factors like Preparation Tolerance Level (PTL) and Certification Accuracy (CA) are critical for ensuring precise calibration. These mixtures are supplied in carbon alloy steel or aluminum cylinders.',
  },
  {
    symbol: 'FE', name: 'Fire Extinguisher', cat: 'Equipment',
    desc: 'CO₂ & clean-agent fire safety systems',
    details: 'Guru Industries supplies a range of fire extinguishers in various models, sizes & types. All extinguishers meet stringent national (ISI, BIS) and international (CE) standards.',
    list: ['ABC Type', 'BC Type', 'Clean Agent', 'Carbon Dioxide Type', 'Water Type', 'Foam Type'],
  },
  {
    symbol: 'Xe', name: 'Xenon', cat: 'Specialty',
    desc: 'Rare noble gas for lighting & imaging',
    details: 'Xenon (Xe), a chemical element with atomic number 54, is a colorless, dense, odorless noble gas found in trace amounts in Earth’s atmosphere. Though generally unreactive, it can form compounds like xenon hexafluoroplatinate. Xenon is used in flash lamps, arc lamps, and as a general anesthetic. Early excimer laser designs utilized a xenon dimer molecule (Xe₂) as the lasing medium, and it is also employed as a propellant for ion thrusters in spacecraft.',
  },
  {
    symbol: 'Kr', name: 'Krypton', cat: 'Specialty',
    desc: 'Noble gas for insulation & lasers',
    details: 'Krypton (Kr), a chemical element with atomic number 36, is a colorless, odorless, tasteless noble gas present in trace amounts in the atmosphere and chemically inert with rare exceptions. It is used in lighting & photography, producing many spectral lines. Krypton plasma is effective in bright, high-powered gas lasers (krypton ion & excimer lasers), and krypton fluoride is also a useful laser medium.',
  },
  {
    symbol: 'Eq', name: 'Equipments', cat: 'Equipment',
    desc: 'Regulators, manifolds & flow devices',
    list: ['Gas Cylinder Regulator', 'Gas Sampling Cylinder', 'Connecting Hoses', 'Interconnecting Fitting & Ferrules', 'Gas Manifold'],
  },
  {
    symbol: 'HP', name: 'Highly Pure Gas Mixtures', cat: 'Specialty',
    desc: 'Lab-grade high-purity blends',
    details: 'Guru Industries provides highly pure gas mixtures for welding, process, research and laser applications — including P10 Gas (10% Methane in Argon), P5 Gas (5% Methane in Argon), and 10% Ethane balance Argon.',
    specTable: {
      caption: 'Welding Gas Mixtures',
      columns: ['Gas Mixture', 'Type of Weld', 'Metal'],
      rows: [
        ['Argon + Nitrogen', 'Auto Bulbs', 'Copper & Alloys'],
        ['Argon + Oxygen', 'MIG', 'Stainless Steel'],
        ['Argon + Carbon Dioxide', 'MIG Welding Mild Steel', 'Carbon Steel'],
        ['Argon + Hydrogen', 'TIG Welding Stainless Steel', 'Stainless Steel'],
      ],
    },
    list: [
      'Process & Research mixtures — Ammonia, Carbon Monoxide, Chlorine, Hydrogen Sulfide, Sulfur Dioxide, Deuterium/Oxygen/Nitrogen blends, custom concentrations to specification',
      'Laser gas mixtures — Xenon/Helium, Helium-Neon, CO₂/N₂/He surgical & research blends',
      'Excimer laser mixtures — Hydrogen Chloride with Xenon, Argon, Helium or Neon',
    ],
  },
  {
    symbol: 'PSA', name: 'PSA Plant O₂ / N₂', cat: 'Equipment',
    desc: 'On-site oxygen / nitrogen generation',
  },
  {
    symbol: 'GC', name: 'Gas Cylinder Bank (Cascade)', cat: 'Equipment',
    desc: 'High-capacity cylinder banks & cascades, for sale or on rent',
    details: 'A gas cylinder bank — also called a cascade — manifolds multiple cylinders into a single high-pressure supply point, so a plant draws continuously without swapping individual cylinders. Guru Industries supplies nitrogen, oxygen, hydrogen and mixed-gas cascades for sale or on rent, with pressure reducing skids and vaporisers to match. Full specification available on request.',
  },
  {
    symbol: 'HC', name: 'Hydrocarbon & Rare Gases', cat: 'Specialty',
    desc: 'CH₄, C₃H₈ & specialty hydrocarbons',
  },
  {
    symbol: 'IG', name: 'Industrial Grade Chemicals', cat: 'Chemicals',
    desc: 'Solvents, glycols & acids supplied in bulk',
    details: 'Guru Industries supplies industrial-grade solvents, glycols and acids in bulk quantities, delivered to plant specification across the Indian subcontinent.',
    chipList: [
      'Mono Ethylene Glycol', 'Di Ethylene Glycol', 'Tri Ethylene Glycol', 'Iso Propyl Alcohol',
      'Toluene', 'N Butyle Acetate', 'Acetone', 'Acetonitrile', 'Ethyle Acetate',
      'Hydro Chloric Acid', 'Sulphuric Acid', 'N Butanol', 'Benzene', 'Methanol',
      'Ortho Xylene', 'Ethylene Di Chloride', 'Tri Chloro Benzene', 'Mix Solvent',
    ],
  },
  {
    symbol: 'LG', name: 'Laboratory Grade Chemicals', cat: 'Chemicals',
    desc: 'Reagents, indicators & analytical standards',
    details: 'A full range of laboratory-grade reagents, indicators and analytical standards for quality-control and testing laboratories.',
    chipList: [
      'Standard Silver Nitrate (0.02N)', 'Erichrome Black T Indicator', 'Cal Ed Indicator',
      'Murexide Indicator', 'Phenolphthalein Indicator', 'Methyl Orange Indicator',
      'Molybdate 3 Reagent Solution', 'Sodium Tartrate', 'Methanol', 'Citric Acid Powder',
      'Acid Reagent Powder Pillow', 'Amino Acid F Reagent Powder Pillow', 'Sulfaver 4 Powder Pillow',
      'Nitraver 5 Reagent Powder Pillow', 'Magnesium Chloride', 'Sodium Chloride', 'Potassium Chloride',
      'Xylene', 'Sodium Sulphate Anhydrous', 'Potassium Hydroxide', 'Sodium Hydroxide',
      'Chlorotex Reagent Indicator', 'Ammonium Hydroxide', 'DI Sodium Hydrogen Phosphate',
      'Potassium DI Chromate', 'Acetone',
    ],
  },
]

export const productCategories = ['All', 'Pure Gases', 'Specialty', 'Medical', 'Equipment', 'Chemicals']

export const services = [
  {
    num: '01', icon: 'flask', title: 'Industrial Gases',
    desc: 'End-to-end supply of industrial-grade gases tailored to plant & process requirements.',
    details: 'Industrial gases are specially manufactured for diverse applications across sectors such as oil & gas, petrochemicals, chemicals, power, mining, steelmaking, metals, environmental protection, medicine, pharmaceuticals, biotechnology, food, water, fertilizers, nuclear power, electronics & aerospace. Primary gases supplied include nitrogen, oxygen, carbon dioxide, argon, hydrogen, helium & acetylene, with a wide array of other gases & mixtures available in cylinders.',
  },
  {
    num: '02', icon: 'wind', title: 'Nitrogen Purging & Blanketing',
    desc: 'Nitrogen purging, blanketing and inerting for pipelines, vessels and pressure systems.',
    details: 'Nitrogen purging and nitrogen blanketing are highly effective in the oil and gas, onshore and offshore pipeline industries, creating a safe working environment for maintenance during shutdown and start-up operations. Guru Industries specializes in nitrogen services, offering a large and versatile fleet of mobile, self-contained nitrogen pumping and vaporization equipment.',
    methods: [
      { title: 'Vacuum Purging', desc: 'For vessels designed to withstand vacuum pressure — repeatedly drawing a vacuum then filling with inert gas.' },
      { title: 'Pressure Purging', desc: 'For vessels designed for elevated pressure — repeatedly pressurizing with inert gas, mixing, then relieving pressure.' },
      { title: 'Siphon Purging', desc: 'A two-step process: displacing gas by filling the vessel with liquid, then displacing the liquid with purge gas.' },
      { title: 'Sweep-Through Purging', desc: 'Purge gas flows continuously through the vessel, displacing and mixing with residual gas, avoiding dead volumes.' },
      { title: 'Nitrogen Blanketing', desc: 'A maintained inert nitrogen headspace over stored product, holding oxygen and moisture out of tanks and reactors through the storage cycle.' },
    ],
  },
  {
    num: '03', icon: 'droplet', title: 'HCl Acidizing Services',
    desc: 'Hydrochloric acid stimulation & descaling for wells, pipelines and process equipment.',
    details: 'Guru Industries carries out hydrochloric acid (HCl) acidizing for well stimulation, pipeline descaling and the chemical cleaning of process equipment. Inhibited HCl is circulated at controlled concentration and rate to dissolve carbonate scale, mill scale and formation damage, restoring flow capacity and heat-transfer efficiency without mechanical intervention. Every job is executed with corrosion inhibitors, neutralization of spent acid and full record-keeping.',
    list: [
      'Matrix acidizing & well stimulation',
      'Pipeline and flowline descaling',
      'Heat exchanger & boiler chemical cleaning',
      'Inhibited acid blends to prevent tubular corrosion',
      'Controlled neutralization & safe spent-acid disposal',
      'Trained crews with full PPE and site safety documentation',
    ],
  },
  {
    num: '04', icon: 'wrench', title: 'Equipment Rental',
    desc: 'Hiring of gas cylinder cascades, vaporisers, pumping and pressure reducing skids on rent.',
    details: 'Guru Industries offers gas handling and testing equipment on rent across Gujarat for short and long-term projects — from a single gas cylinder bank (cascade) to a full cryogenic transport tanker with a nitrogen pumping skid and vaporiser. Equipment is supplied tested, certified and ready to commission, with operator support where the scope requires it.',
    list: [
      'Industrial Gas Cylinders', 'Gas Cylinder Manifold', 'Nitrogen & Gas Vaporiser',
      'PortaCryo Tank – 1KL', 'Cryogenic Transport Tanker', 'Nitrogen Pumping Skid',
      'Gas Cylinder Bank (Cascade)', 'Pressure Reducing Skid', 'Cryogenic ISO Storage Tank',
    ],
  },
  {
    num: '05', icon: 'gauge', title: 'High Pressure Pneumatic & Leak Testing',
    desc: 'High pressure leak testing and pneumatic testing for safety & code compliance.',
    details: 'Pneumatic testing is a strength testing technique used in the oil and gas industry to verify the mechanical strength and integrity of pressure-containing components. It ensures a system can safely operate at its maximum pressure by testing it at 110% of its designed limit using air or an inert gas like nitrogen. Particularly useful when hydrostatic testing is impractical — e.g. when water weight is too high or water introduction would be detrimental to the process.',
    list: [
      'High pressure leak testing to 110% of design pressure',
      'Accurate, repeatable test results',
      'No post-testing drying or cleaning',
      'No contamination of pipelines',
      'Certified test records issued for every job',
    ],
  },
  {
    num: '06', icon: 'sun', title: 'Drying',
    desc: 'Air, nitrogen & vacuum drying to remove moisture before system start-up.',
    details: 'Guru Industries offers air, nitrogen & vacuum drying techniques to thoroughly remove moisture and water from systems before start-up. This process aims to achieve optimal dew point levels, maintaining product purity, minimizing corrosion, and optimizing efficiency and safety. Drying is a necessary procedure following pressure or leak/tightness tests during pre-commissioning. Our personnel assess each situation to recommend the safest, most reliable & cost-effective drying solution.',
  },
]

export const clients = [
  { name: 'Reliance Industries', logo: '/logos/reliance.png' },
  { name: 'Cairn Oil & Gas', logo: '/logos/cairn.png' },
  { name: 'Linde', logo: '/logos/linde.png' },
  { name: 'Schlumberger', logo: '/logos/schlumberger.png' },
  { name: 'Halliburton', logo: '/logos/halliburton.png' },
  { name: 'ISRO', logo: '/logos/isro.png' },
  { name: 'BHEL', logo: '/logos/bhel.png' },
  { name: 'Vedanta', logo: '/logos/vedanta.png' },
  { name: 'Oil India Limited', logo: '/logos/oil-india.png' },
  { name: 'Tata Projects', logo: '/logos/tata-projects.png' },
  { name: 'L&T Hydrocarbon', logo: '/logos/lt-hydrocarbon.png' },
  { name: 'McDermott', logo: '/logos/mcdermott.png' },
  { name: 'Petrofac', logo: '/logos/petrofac.png' },
  { name: 'Technip Energies', logo: '/logos/technip-energies.png' },
  { name: 'HMEL', logo: '/logos/hmel.png' },
  { name: 'Sterling & Wilson', logo: '/logos/sterling-wilson.png' },
  { name: 'Shapoorji Pallonji Energy', logo: '/logos/shapoorji-pallonji.png' },
  { name: 'Praj Industries', logo: '/logos/praj-industries.png' },
  { name: 'Aarti Industries', logo: '/logos/aarti-industries.png' },
  { name: 'Aegis Vopak Terminals', logo: '/logos/aegis-vopak.png' },
  { name: 'Atlas Copco', logo: '/logos/atlas-copco.png' },
  { name: 'Balaji Amines', logo: '/logos/balaji-amines.png' },
  { name: 'Deepak Chemtech', logo: '/logos/deepak-chemtech.png' },
  { name: 'Zydus', logo: '/logos/zydus.png' },
  { name: 'Symbiotec Pharmalab', logo: '/logos/symbiotec.png' },
  { name: 'MEIL', logo: '/logos/meil.png' },
  { name: 'JK Lakshmi Cement', logo: '/logos/jk-lakshmi.png' },
  { name: 'Binani Braj Group', logo: '/logos/binani-braj.png' },
  { name: 'Banas Dairy', logo: '/logos/banas-dairy.png' },
  { name: 'Oswal Infrastructure', logo: '/logos/oswal-infrastructure.png' },
  { name: 'Lakshya Powertech', logo: '/logos/lakshya-powertech.png' },
  { name: 'Vijay Tanks & Vessels', logo: '/logos/vijay-tanks.png' },
  { name: 'Dhaval Engineering', logo: '/logos/dhaval-engineering.png' },
  { name: 'Modern Industrial', logo: '/logos/modern-industrial.png' },
  { name: 'Duke Plasto Technique', logo: '/logos/duke.png' },
  { name: 'Howe Benchmarking Infrastructure', logo: '/logos/howe.png' },
  { name: 'Jyotindra', logo: '/logos/jyotindra.png' },
  { name: 'S Mark', logo: '/logos/s-mark.png' },
  { name: 'Sopan', logo: '/logos/sopan.png' },
  { name: 'OCS', logo: '/logos/ocs.png' },
  { name: 'S.D. Agricultural University', logo: '/logos/sdau.png' },
]

export const plantGallery = [
  { src: '/plant/plant-guru-tanker-filling.jpg', caption: 'Loading a Guru Industries LIN/LOX tanker on site' },
  { src: '/plant/plant-refinery-delivery.jpg', caption: 'On-site delivery at a client refinery complex' },
  { src: '/plant/plant-hydrogen-shed-truck.jpg', caption: 'Hydrogen cylinder consignment ready for dispatch' },
  { src: '/plant/plant-warehouse-loading.jpg', caption: 'Cryogenic tanker discharging into an ambient vaporiser bank' },
  { src: '/plant/plant-cylinder-yard.jpg', caption: 'Cylinder filling manifold and cylinder yard at a client plant' },
  { src: '/plant/plant-manifold-racks.jpg', caption: 'Gas cylinder cascade banks racked and manifolded for dispatch' },
]

export const values = [
  { icon: 'target', title: 'Customer Orientation', desc: 'Focused on individual customer requirements to improve their competitiveness and performance.' },
  { icon: 'users', title: 'Employee Orientation', desc: 'We train, develop & promote motivated, efficient employees who act as responsible team players.' },
  { icon: 'globe', title: 'Responsible Behavior', desc: 'We take our social responsibility towards our employees and society very seriously.' },
]

export const missionVision = [
  {
    icon: 'shield',
    title: 'Mission',
    desc: 'As part of the earth & nature, we take responsibility for the safety of the environment — applying a well-rounded environment policy across our infrastructure to minimize pollutants and industrial waste released, keeping the environment purer and less polluted.',
  },
  {
    icon: 'bolt',
    title: 'Vision',
    desc: 'To perform the best role as manufacturer, trader & supplier in our field of business, delivering innovative and sustainable solutions for our clients in a connected world — helping them be more productive.',
  },
]

export const principles = [
  'Quality assurance', 'Constant research undertakings', 'Advanced infrastructure',
  'Adept team of professionals', 'Rich vendor base', 'Prompt delivery & fair prices',
]

/* year the company was established — every "years of service" figure on the
   site is derived from this, so nothing goes stale in January */
export const ESTABLISHED = 2011
export const yearsInService = () => new Date().getFullYear() - ESTABLISHED

export const inquiryPurposes = [
  'Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen', 'Dissolved Acetylene', 'Argon',
  'Medical Gases', 'Helium', 'Ammonia', 'Anhydrous HCl', 'Industrial Chemicals',
  'Laboratory Chemicals', 'Equipment Rental', 'Nitrogen Purging', 'HCl Acidizing Services',
  'Pneumatic Testing', 'Drying', 'Import & Export', 'Others',
]

export const contact = {
  phones: [
    { label: '(+91) 76000 76253 / 54', tel: '+917600076253' },
    { label: '(+91) 98799 46619', tel: '+919879946619' },
    { label: '(+91) 98256 53474', tel: '+919825653474' },
  ],
  emails: ['info@guruindustries.co.in', 'gurugases@yahoo.com'],
  address: [
    'Plot No.: 114/47,',
    'Chandisar G.I.D.C., Palanpur-385001.',
    '(Banaskantha) Gujarat',
  ],
  addressLine: 'Plot No. 114/47, Chandisar G.I.D.C., Palanpur-385001, Banaskantha, Gujarat, India',
  mapUrl: 'https://maps.app.goo.gl/JDUKEgsyhXZyDcrF9',
  /* place-anchored embed: a text-query embed pins an approximate point, so the
     "Maps" button inside the iframe opened the wrong place */
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1677.1824985491176!2d72.3005945!3d24.2196222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c950020c30191%3A0xda61a8a9784e6cbf!2sGuru%20Industries!5e1!3m2!1sen!2sin!4v1787945243443!5m2!1sen!2sin',
  geo: { lat: 24.21962, lng: 72.30059 },
  placeId: '0x395c950020c30191:0xda61a8a9784e6cbf',
  whatsappNumber: '919879946619',
}

/* Every enquiry that starts on the site says so, in its own words — that is the
   only way the team can tell a website lead from a cold call, and neither
   WhatsApp nor a mail client passes a referrer. */
export const websiteNote =
  'Hello Guru Industries — I visited your website (guruindustries.co.in) and would like to know more about your products and services.'

export const waLink = (message = websiteNote) =>
  `https://api.whatsapp.com/send?phone=${contact.whatsappNumber}&text=${encodeURIComponent(message)}`

export const mailLink = (
  email = contact.emails[0],
  subject = 'Enquiry from your website',
  body = websiteNote,
) => `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

/* kept as a plain string for the components that just need a href */
contact.whatsapp = waLink()

/* counts are derived so the headline figures can never drift from the data */
export const stats = [
  { value: ESTABLISHED, label: 'Established', suffix: '' },
  { value: products.length, label: 'Product Lines', suffix: '+' },
  { value: clients.length, label: 'Marquee Clients', suffix: '+' },
  { value: 24, label: 'Hour Supply', suffix: '×7' },
]
