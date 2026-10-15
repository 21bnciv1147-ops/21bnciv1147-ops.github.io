// ============================================================
//  EDIT THIS FILE to update your website. Save/commit, wait ~1 min.
//  Tips: keep the quotes "" and commas , exactly as they are.
//  To ADD an item: copy one { ... }, block, paste it below, edit text.
//  To REMOVE an item: delete its whole { ... }, block.
// ============================================================

const SITE = {
  name: "Shahbaz Khan",
  photo: "",   // e.g. "photo.jpg" after uploading a photo to the repo. Leave "" for none.
  eyebrow: "Civil Engineer · Hydrologist · Climate Risk Researcher",
  headline: "Modeling floods, climate extremes and water systems.",
  intro: "I work on hydrological and hydraulic modeling, CMIP6 climate impacts, remote sensing and explainable machine learning to assess flood and multi-hazard risk for communities and infrastructure. Based at UET Peshawar, Pakistan.",
  email: "21bnciv1147@uetpeshawar.edu.pk",
  location: "Peshawar, Pakistan",

  links: {
    linkedin: "https://www.linkedin.com/in/shahbaz-khan-73b8a62b9",
    researchgate: "https://www.researchgate.net/profile/Shahbaz-Khan-79",
    github: "https://github.com/21bnciv1147-ops",
    scholar: "",   // paste Google Scholar link when you have it
    orcid: "",     // paste ORCID link when you have it
    cv: ""         // e.g. "cv.pdf" after uploading your CV PDF to the repo
  },

  stats: [
    { n: "4",  label: "Papers (published, accepted, under review)" },
    { n: "11", label: "Gauging stations in Indus sub-basin study" },
    { n: "29", label: "Schools assessed for multi-hazard risk" },
    { n: "3",  label: "Collaborations with GIZ, UNICEF, ADB" }
  ],

  educationNote: "BSc Civil Engineering, UET Peshawar (2021–2025). Thesis: climate-driven flood hazard assessment in data-scarce mountainous basins using geospatial machine learning and hydrodynamic modeling under CMIP6 SSP scenarios.",

  interests: [
    { title: "Hydrological & River Basin Modeling", text: "Rainfall–runoff simulation, streamflow prediction, watershed analysis, physically based and data-driven models." },
    { title: "Climate Change & Hydroclimatic Extremes", text: "Impacts on streamflow, floods and droughts using observations and CMIP6 projections." },
    { title: "Hydraulic Modeling & Flood Risk", text: "1D/2D modeling, flood routing, inundation mapping and climate-informed hazard and risk assessment." },
    { title: "Machine Learning & Explainable AI", text: "ML, deep learning and XAI for hydrological prediction, climate-data correction, model selection and uncertainty." },
    { title: "Remote Sensing & GIS", text: "Satellite remote sensing, GIS and Google Earth Engine for hydrological and climate-risk applications." },
    { title: "Multi-Hazard & Compound Risk", text: "Floods, droughts, heatwaves, landslides and interacting hazards affecting communities and infrastructure." }
  ],

  // status must be one of: "published", "accepted", "review"
  publications: [
    {
      status: "published", statusLabel: "Published · 2025",
      title: "Climate-driven flood hazard assessment in data-scarce mountainous basins using a GIS-based machine learning and hydrodynamic modelling under CMIP6 SSP scenarios",
      summary: "",
      meta: "Khan, S., Khan, A. U., et al. · Scientific Reports",
      link: "https://www.researchgate.net/profile/Shahbaz-Khan-79",   // replace with DOI link
      linkText: "View paper"
    },
    {
      status: "accepted", statusLabel: "Accepted · 2026",
      title: "Future Changes in High-Flow Magnitude and Seasonality Across the Indus Sub-Basins Based on Conceptual and Deep Learning Models",
      summary: "Hybrid GR2M-SC/GR2M+ and LSTM framework across the Upper Indus, Kabul and Jhelum basins (11 stations) under SSP2-4.5 and SSP5-8.5, with variance-based uncertainty decomposition of GCM, model, scenario and interaction effects.",
      meta: "Earth Systems and Environment · With N. Ejaz (Tsinghua University)",
      link: "", linkText: ""
    },
    {
      status: "accepted", statusLabel: "Accepted · 2026",
      title: "Deep learning-based prediction and analysis of urban heat island dynamics using multispectral indices and precipitation data",
      summary: "",
      meta: "Ullah, B., Khan, A. U., Akbar, A., Khan, S., et al. · Journal of Water and Climate Change",
      link: "", linkText: ""
    },
    {
      status: "review", statusLabel: "Under review · 2026",
      title: "Climate-Driven Multi-Hazard Risk Assessment of Educational Infrastructure: Integrating CMIP6 Climate Projections and Spatially Explicit Vulnerability Analysis",
      summary: "Flood, heatwave, drought and wind hazards for 29 schools in Dadu using ERA5-Land and CMIP6 SSP5-8.5, Random Forest bias correction, XGBoost–SHAP model selection, IDF analysis and HEC-RAS 2D Rain-on-Mesh.",
      meta: "Khan, S., Ullah, B., Khan, A. U., et al. · Climate Risk Management",
      link: "", linkText: ""
    }
  ],

  projects: [
    {
      title: "Wabash River: Coupled Hydrologic–Hydraulic–Sediment Modeling",
      text: "Integrated HEC-HMS, HEC-SSP and HEC-RAS 2D with GPM-IMERG rainfall, observed streamflow, a 1 m DEM, LULC and soils. Calibrated and validated rainfall–runoff and MUSLE sediment models (2010–2024), ran flood frequency analysis and a 100-year flood with 2D sediment transport to locate erosion, deposition and flood hotspots.",
      tags: ["HEC-HMS", "HEC-RAS 2D", "HEC-SSP", "GPM-IMERG"],
      link: "", linkText: ""   // optional, e.g. GitHub repo link
    },
    {
      title: "ML & Deep Learning Framework for Hydrology and Climate-Data Correction",
      text: "Research collaboration with a professor at Indiana State University: preprocessing, bias correction, model ranking and multi-model ensembles with RF, XGBoost, CatBoost, AdaBoost and LightGBM; ANN, LSTM, Temporal Fusion Transformer and counterfactual XAI models.",
      tags: ["Python", "LSTM", "TFT", "XAI"],
      link: "", linkText: ""
    },
    {
      title: "Multi-Hazard Climate Risk & Resilient Design for 29 Schools, Dadu",
      text: "ADB-funded assessment of pluvial flood, drought, heatwave and wind hazards with exposure and vulnerability, using historical and projected precipitation, Tmax and Tmin trends.",
      tags: ["CMIP6", "ERA5-Land", "HEC-RAS", "Remote Sensing"],
      link: "", linkText: ""
    },
    {
      title: "Tributary De-Synchronization for Flood Peak Attenuation",
      text: "HEC-HMS framework for the Swat River Basin testing lag-time modification across tributaries. De-synchronized flows reduced peaks by about 11.4% (upper), 16.5% (middle) and 26.8% (lower) basin sections.",
      tags: ["HEC-HMS", "Swat River Basin", "Flood Mitigation"],
      link: "", linkText: ""
    }
  ],

  experience: [
    {
      role: "Junior Hydrologist · Creative Engineering Consultants, Peshawar",
      when: "Dec 2025 – Present",
      points: [
        "HEC-HMS and HEC-RAS (1D/2D) rainfall–runoff and hydrodynamic modeling.",
        "Multi-hazard climate risk assessment for buildings, bridges and roads: flood, drought, landslide susceptibility and wind.",
        "CMIP6, GIS, remote sensing and Google Earth Engine integrated with hazard–exposure–vulnerability frameworks."
      ]
    },
    {
      role: "Junior Engineer, Climate Change Adaptation · UET Peshawar (UNICEF-funded), Swat & Buner",
      when: "Sep – Dec 2025",
      points: [
        "Field surveys and watershed assessments for flood-affected water-supply schemes.",
        "Design-flow estimation, river hydraulics and flood inundation analysis.",
        "GIS flood risk maps supporting climate-resilient rehabilitation planning."
      ]
    },
    {
      role: "Junior Infrastructure Engineer · UET Peshawar (GIZ-funded)",
      when: "Jun – Sep 2025",
      points: [
        "Climate profiling and hydroclimatic assessment across 12 districts of Pakistan.",
        "Hydrologic modeling with ML and deep learning to assess historical and future conditions for adaptation planning."
      ]
    }
  ],

  skills: [
    { title: "Hydrology & Hydraulics", tags: ["HEC-HMS", "HEC-RAS 1D/2D", "Rain-on-Mesh", "HEC-SSP", "SWAT", "Calibration & Validation", "EasyFit"] },
    { title: "GIS & Remote Sensing", tags: ["Google Earth Engine", "QGIS", "ArcGIS", "AutoCAD", "Sentinel-1/2"] },
    { title: "Programming & AI", tags: ["Python", "Google Colab", "Machine Learning", "Deep Learning", "Explainable AI", "SHAP"] },
    { title: "Data Analysis", tags: ["Statistical Analysis", "Data Cleaning", "Data Visualization"] }
  ],

  certifications: [
    "WASH systems strengthening (IRC & UNICEF)",
    "Risk Assessment and Climate Proofing (GIZ)",
    "Application of AI/ML in Civil Engineering (Pakistan Engineers Forum, UET Peshawar)",
    "GIZ flood risk workshop (Aug 2025) · UNICEF geospatial workshop (Aug 2025)"
  ]
};
