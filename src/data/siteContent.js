import skylineIcon from '../assets/images/skyline.png'
import constructionIcon from '../assets/images/construction-site.png'
import residentialIcon from '../assets/images/residential.png'
import landIcon from '../assets/images/land.png'
import megaphoneIcon from '../assets/images/megaphone.png'

export const siteUrl = 'https://www.siddhiconstructions.com'
const assetBase = `${siteUrl}/assets/images`

export const pageBanners = {
  aboutUs: {
    title: 'About Us',
    watermark: 'ABOUT US',
    backgroundImage: `${assetBase}/bread/bread3.jpg`,
    breadcrumbs: [{ label: 'Home', href: '/home' }, { label: 'About Us' }],
  },
  achievements: {
    title: 'Achievements',
    watermark: 'ACHIEVEMENTS',
    backgroundImage: `${assetBase}/bread/bread3.jpg`,
    breadcrumbs: [{ label: 'Home', href: '/home' }, { label: 'Achievements', href: '/achievements', current: true }],
    variant: 'achievements',
  },
  awards: {
    title: 'Awards',
    watermark: 'AWARDS',
    backgroundImage: `${assetBase}/bread/bread3.jpg`,
    breadcrumbs: [{ label: 'Home', href: '/home' }, { label: 'Awards', current: true }],
  },
  certificates: {
    title: 'Certificates',
    watermark: 'CERTIFICATES',
    backgroundImage: `${assetBase}/bread/bread3.jpg`,
    breadcrumbs: [{ label: 'Home', href: '/home' }, { label: 'Certificates', current: true }],
  },
  technology: {
    title: 'Technology',
    watermark: 'TECHNOLOGY',
    backgroundImage: `${assetBase}/bread/bread3.jpg`,
    breadcrumbs: [{ label: 'Home', href: '/home' }, { label: 'Technology', href: '/technology', current: true }],
  },
  quality: {
    title: 'Quality',
    watermark: 'QUALITY',
    backgroundImage: `${assetBase}/bread/bread1.jpg`,
    breadcrumbs: [{ label: 'Home', href: '/home' }, { label: 'Quality', current: true }],
  },
  equipped: {
    title: 'Equipped',
    watermark: 'EQUIPPED',
    backgroundImage: `${assetBase}/bread/bread1.jpg`,
    breadcrumbs: [{ label: 'Home', href: '/home' }, { label: 'Equipped', href: '/equipped', current: true }],
  },
  management: {
    title: 'Management',
    watermark: 'MANAGEMENT',
    backgroundImage: `${assetBase}/bread/bread3.jpg`,
    breadcrumbs: [{ label: 'Home', href: '/home' }, { label: 'Management', href: '/management', current: true }],
  },
  organizationChart: {
    title: 'Our Structure',
    watermark: 'CHART',
    backgroundImage: `${assetBase}/bread/bread3.jpg`,
    breadcrumbs: [{ label: 'Home', href: '/home' }, { label: 'Organizational Chart', href: '/organization-chart', current: true }],
  },
}

export const headerMegaMenuProjects = [
  {
    title: 'Commercial & Institutional',
    desc: 'Our commercial and institutional projects combine modern architectural aesthetics with functional integrity, providing state-of-the-art office spaces.',
    icon: skylineIcon,
    href: `${siteUrl}/commercial-institutional`,
  },
  {
    title: 'Industrial Construction',
    desc: 'We specialize in high-stakes industrial infrastructure, delivering robust distillery units and specialized manufacturing facilities designed.',
    icon: constructionIcon,
    href: `${siteUrl}/industrial-construction`,
  },
  {
    title: 'Residential',
    desc: 'We craft premium living environments that prioritize superior craftsmanship for generations to come in the heart of Surat.',
    icon: residentialIcon,
    href: `${siteUrl}/residential`,
  },
  {
    title: 'Developer',
    desc: 'As a visionary developer established in 1986, we handle everything from raw land transformation to the delivery of commercial hubs.',
    icon: landIcon,
    href: `${siteUrl}/developer`,
  },
  {
    title: 'Ongoing',
    desc: 'Explore our upcoming landmark developments that will define the future of Gujaratâ€™s skyline through innovative civil engineering.',
    icon: megaphoneIcon,
    href: `${siteUrl}/ongoing`,
  },
]

export const drawerNavigation = [
  { id: 'home', label: 'Home', href: '/home' },
  {
    id: 'about', label: 'About Us', children: [
      { label: 'About Company', href: '/about-us' },
      { label: 'Achievements', href: '/achievements' },
      { label: 'Awards', href: '/awards' },
      { label: 'Certificates', href: '/certificates' },
      { label: 'Technology', href: '/technology' },
      { label: 'Quality Assurance', href: '/quality-assurance' },
      { label: 'Equipped', href: '/equipped' },
    ],
  },
  {
    id: 'management', label: 'Management', children: [
      { label: 'Management', href: '/home#leadership' },
      { label: 'Organization Chart', href: `${siteUrl}/organization-chart`, external: true },
    ],
  },
  {
    id: 'projects', label: 'Projects', children: [
      { label: 'Industrial Construction', href: `${siteUrl}/industrial-construction`, external: true },
      { label: 'Commercial & Institutional', href: `${siteUrl}/commercial-institutional`, external: true },
      { label: 'Residential', href: `${siteUrl}/residential`, external: true },
      { label: 'Ongoing', href: `${siteUrl}/ongoing`, external: true },
      { label: 'Developer', href: `${siteUrl}/developer`, external: true },
    ],
  },
  { id: 'career', label: 'Career', href: `${siteUrl}/careers`, external: true },
  { id: 'video', label: 'Video', href: `${siteUrl}/video`, external: true },
  { id: 'contact', label: 'Contact Us', href: '/home#contact' },
]

export const footerNavigation = {
  usefulLinks: [
    { label: 'Achievements', href: '/achievements' },
    { label: 'Awards', href: '/awards' },
    { label: 'Technology', href: '/technology' },
    { label: 'Quality Assurance', href: '/quality-assurance' },
    { label: 'Equipped', href: '/equipped' },
    { label: 'Apply for Career', href: `${siteUrl}/apply-for-career` },
  ],
  projects: [
    { label: 'Industrial Construction', href: `${siteUrl}/industrial-construction` },
    { label: 'Commercial & Institutional', href: `${siteUrl}/commercial-institutional` },
    { label: 'Residential', href: `${siteUrl}/residential` },
    { label: 'Ongoing', href: `${siteUrl}/ongoing` },
    { label: 'Developer', href: `${siteUrl}/developer` },
  ],
  top: [
    { label: 'ABOUT US', href: '/about-us' },
    { label: 'MANAGEMENT', href: '/management' },
    { label: 'CLIENTS', href: '/home#clients' },
    { label: 'CAREER', href: `${siteUrl}/careers` },
    { label: 'CONTACT', href: '/home#contact' },
    { label: 'VIDEO', href: '/home' },
  ],
}
