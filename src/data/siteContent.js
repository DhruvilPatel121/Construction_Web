import heroImage from '../assets/images/hero-adani.png'
import aboutImage from '../assets/images/award-gujarat.jpg'
import serviceBackground from '../assets/images/service-background.webp'
import impactBackground from '../assets/images/impact-background.webp'
import contactBackground from '../assets/images/contact-background.webp'
import prashantImage from '../assets/images/leader-prashant.png'
import sagarImage from '../assets/images/leader-sagar.png'
import awardGujarat from '../assets/images/award-gujarat.jpg'
import awardCongress from '../assets/images/award-congress.jpg'
import awardIgBC from '../assets/images/award-igbc.jpg'
import awardAmitShah from '../assets/images/award-amitshah.jpg'
import projectApmc from '../assets/images/project-apmc.jpg'
import projectApmcElevated from '../assets/images/project-apmc-elevated.jpeg'
import projectJ9 from '../assets/images/project-j9.jpg'
import projectTorrent from '../assets/images/project-torrent.png'
import projectAmul from '../assets/images/project-amul.png'
import projectVitthal from '../assets/images/project-vitthal.png'
import projectFiona from '../assets/images/project-fiona.png'
import projectDumbhal from '../assets/images/project-dumbhal.jpg'
import projectAavishkar from '../assets/images/project-aavishkar.webp'
import projectWaaree from '../assets/images/project-waaree-ongoing.png'
import projectHtc from '../assets/images/project-htc.jpg'

import clientHiraare from '../assets/images/client-hiraare.png'
import clientTata from '../assets/images/client-tata.webp'
import clientAdaniSolar from '../assets/images/client-adani-solar.webp'
import clientRajhans from '../assets/images/client-rajhans.webp'
import clientAdani from '../assets/images/client-adani.webp'
import clientReliance from '../assets/images/client-reliance.webp'
import clientUtopia from '../assets/images/client-utopia.webp'
import clientEssar from '../assets/images/client-essar.webp'
import clientAmul from '../assets/images/client-amul.png'
import clientLt from '../assets/images/client-lt.webp'
import clientGspc from '../assets/images/client-gspc.webp'
import clientSmimer from '../assets/images/client-smimer.webp'
import clientKamrej from '../assets/images/client-kamrej.webp'
import clientSmc from '../assets/images/client-smc.webp'
import clientBlackink from '../assets/images/client-blackink.webp'
import clientDorf from '../assets/images/client-dorf.webp'
import clientBhilosa from '../assets/images/client-bhilosa.webp'

export const images = {
  hero: heroImage,
  about: aboutImage,
  serviceBackground,
  impactBackground,
  contactBackground,
}

export const serviceItems = [
  {
    icon: 'plan',
    title: 'Civil Engineering & Project Management (PMC)',
    description:
      'Civil Engineering & Project Management (PMC) involves the planning, design, execution, and supervision of construction projects to ensure quality, safety, and efficiency at every stage.',
  },
  {
    icon: 'factory',
    title: 'EPC Services',
    description:
      'EPC Services (Engineering, Procurement, and Construction) provide end-to-end project delivery, covering design, material procurement, and construction to ensure efficient, cost-effective, and timely completion.',
  },
  {
    icon: 'buildings',
    title: 'Construction & Infrastructure Contracting',
    description:
      'Construction & Infrastructure Contracting involves executing residential, commercial, and infrastructure projects—covering planning, resource management and timely delivery to required standards.',
  },
  {
    icon: 'land',
    title: 'Real Estate & Organizing',
    description:
      'Real Estate & Organizing involves property development, management, and transaction services along with efficient planning and coordination of real estate projects to ensure smooth execution and optimal value.',
  },
]

export const projectCategories = [
  'Commercial & Institutional',
  'Industrial Construction',
  'Residential',
  'Developer',
  'Ongoing',
]

export const projects = [
  {
    title: 'APMC Elevated Vegetable Market',
    client: 'Agricultural Produce Market Committee (APMC)',
    location: 'Gujarat',
    type: 'Commercial Infrastructure / Elevated Vegetable Market',
    image: projectApmcElevated,
    href: 'https://www.siddhiconstructions.com/projects/apmc-elevated-vegetable-market',
    categories: ['Commercial & Institutional'],
  },
  {
    title: 'APMC Auction Ring',
    client: 'Agricultural Produce Market Committee (APMC)',
    location: 'Gujarat',
    type: 'Commercial Infrastructure / Agricultural Market Facility',
    image: projectApmc,
    href: 'https://www.siddhiconstructions.com/projects/apmc-auction-ring',
    categories: ['Commercial & Institutional'],
  },
  {
    title: 'J9 Commercial Building – Vesu',
    client: 'Private Developer',
    location: 'Vesu, Surat, Gujarat',
    type: 'Commercial Infrastructure',
    image: projectJ9,
    href: 'https://www.siddhiconstructions.com/projects/j9-commercial-building-vesu',
    categories: ['Commercial & Institutional', 'Developer'],
  },
  {
    title: 'Torrent Power – Althan',
    client: 'Althan Electricity Co. Ltd',
    location: 'Surat, Gujarat',
    type: 'Utility Infrastructure',
    image: projectTorrent,
    href: 'https://www.siddhiconstructions.com/projects/torrent-power-surat-electricity-co-ltd-althan',
    categories: ['Industrial Construction'],
  },
  {
    title: 'Amul Dairy Chiller Plant',
    client: 'Panchmahal District Co-operative Milk Producers’ Union',
    location: 'Gujarat',
    type: 'Industrial Construction',
    image: projectAmul,
    href: 'https://www.siddhiconstructions.com/projects/amul-dairy-panchamrut-dairy-chiller-plant-1-3-mld',
    categories: ['Industrial Construction'],
  },
  {
    title: 'Vitthal Bungalows – Bardoli',
    client: 'Private Developer',
    location: 'Bardoli, Gujarat',
    type: 'Residential Bungalows Development',
    image: projectVitthal,
    href: 'https://www.siddhiconstructions.com/projects/vitthal-bungalows-bardoli',
    categories: ['Residential'],
  },
  {
    title: 'Fiona – High Rise Residential Apartment',
    client: 'Private Developer',
    location: 'Vesu, Surat, Gujarat',
    type: 'High Rise Residential Apartment',
    image: projectFiona,
    href: 'https://www.siddhiconstructions.com/projects/fiona-high-rise-residential-apartment',
    categories: ['Residential'],
  },
  {
    title: 'Dumbhal Redevelopment Project',
    client: 'Surat Municipal Corporation',
    location: 'Dumbhal, Surat',
    type: 'Residential & Commercial Redevelopment',
    image: projectDumbhal,
    href: 'https://www.siddhiconstructions.com/projects/dumbhal-redevelopment-project-under-ppp-dumbhal-surat-area',
    categories: ['Developer'],
  },
  {
    title: 'Aavishkar Corporation',
    client: 'Aavishkar Corporation',
    location: 'Surat, Gujarat',
    type: 'Residential Development',
    image: projectAavishkar,
    href: 'https://www.siddhiconstructions.com/projects/aavishkar-corporation',
    categories: ['Developer'],
  },
  {
    title: 'Waaree Influent Water Tank',
    client: 'Waaree Group',
    location: 'Gujarat',
    type: 'Industrial Water Infrastructure',
    image: projectWaaree,
    href: 'https://www.siddhiconstructions.com/projects/waaree-influent-water-tank',
    categories: ['Ongoing'],
  },
  {
    title: 'HTC – 3 The Business Park',
    client: 'Private Developer',
    location: 'Surat, Gujarat',
    type: 'Commercial Development',
    image: projectHtc,
    href: 'https://www.siddhiconstructions.com/projects/htc-3-the-business-park',
    categories: ['Ongoing'],
  },
]

export const leaders = [
  {
    name: 'Mr. Prashant R. Dandavate',
    experience: '44 Years of Experience',
    image: prashantImage,
  },
  {
    name: 'Mr. Sagar R. Dandavate',
    experience: '40 Years of Experience',
    image: sagarImage,
  },
]

export const awards = [
  { title: 'Shri Amitbhai Shah 2016', image: awardAmitShah },
  { title: 'Green Building Award - Gold', image: awardIgBC },
  { title: 'The Guardian Of City 2022', image: awardGujarat },
  { title: 'Legends Of Surat 2018–19', image: awardCongress },
]

export const clients = [
  { name: 'Waaree', image: clientHiraare },
  { name: 'Tata', image: clientTata },
  { name: 'Adani Solar', image: clientAdaniSolar },
  { name: 'Rajhans', image: clientRajhans },
  { name: 'Adani', image: clientAdani },
  { name: 'Reliance Energy', image: clientReliance },
  { name: 'Utopia', image: clientUtopia },
  { name: 'Essar', image: clientEssar },
  { name: 'Amul', image: clientAmul },
  { name: 'Larsen & Toubro', image: clientLt },
  { name: 'GSPC', image: clientGspc },
  { name: 'SMIMER', image: clientSmimer },
  { name: 'Surat Municipal Corporation', image: clientSmc },
  { name: 'Kamrej', image: clientKamrej },
  { name: 'Black Ink Surat', image: clientBlackink },
  { name: 'Dorf Ketal', image: clientDorf },
  { name: 'Essar', image: clientEssar },
  { name: 'Bhilosa Industries', image: clientBhilosa },
]

export const impactStats = [
  { value: 150, label: 'Professional Technocrats', suffix: '+' },
  { value: 350, label: 'Landmark Projects', suffix: '+' },
  { value: 150, label: 'Prestigious Clients', suffix: '+' },
  { value: 2500, label: 'Construction Human Resource', suffix: '+' },
]
