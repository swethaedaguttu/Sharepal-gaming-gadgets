export const SITE_URL = 'https://sharepal.in';
export const CITY = 'Bangalore';
export const PAGE_SIZE = 12;
export const WAITLIST_TARGET = 1000;
export const WAITLIST_JOINED = 24;

export const TOP_TABS = ['Photography', 'Gaming', 'Outdoor', 'Entertainment'];

/** `pattern` is matched against product name + catalogue image path. */
export const SIDEBAR_CATEGORIES = [
  { id: 'all', label: 'All', icon: 'all' },
  { id: 'gta-vi', label: 'GTA VI', icon: 'game', pattern: 'gta|grand-theft' },
  { id: 'ps5', label: 'PS5 Console', icon: 'ps5', pattern: 'ps5|playstation' },
  { id: 'xbox', label: 'Xbox Console', icon: 'xbox', pattern: 'xbox' },
  { id: 'vr', label: 'VR', icon: 'vr', pattern: 'oculus|quest|\\bvr\\b' },
  { id: 'racing-wheel', label: 'Racing Wheel', icon: 'wheel', pattern: 'racing[ -]wheel' },
  { id: 'big-screen', label: 'Big Screen Gaming', icon: 'screen', pattern: 'projector|big[ -]screen' },
];

export const FAQS = [
  { q: 'How can I rent from SharePal?', a: 'Select your delivery and pickup dates to see prices, add the gear you need to your cart and check out. The full step-by-step guide is on our How it works page.' },
  { q: 'If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?', a: 'The complete answer is available in our FAQs.' },
  { q: 'When does the rental start?', a: 'The complete answer is available in our FAQs.' },
  { q: 'What will be the condition of the products at the time of delivery?', a: 'The complete answer is available in our FAQs.' },
  { q: 'Why is verification required?', a: 'The complete answer is available in our Verification and FAQs pages.' },
];

export const REVIEWS = [
  { name: 'Rakesh', initials: 'RS', place: 'Mumbai', category: 'Trekking Gear', stars: 2, text: 'Ordered 2 pair of shoes & 3 trekking poles. Shoes were in mint condition, very well cleaned and sanitized and so does the trekking poles. Delivery and pick-u…' },
  { name: 'Shruti', initials: 'SJ', place: 'Mumbai', category: 'Winter Wear', stars: 5, text: 'Right from the time I saw their website, till I got my refund the entire experience with SharePal was brilliant. The product listing, prices, delivery, communication…' },
  { name: 'Amit', initials: 'AK', place: 'Delhi', category: 'Riding Gear', stars: 5, text: 'Awesome experience. Please be the way you are. Received excellent clothes and shoes in washed and clean state. They looked like new ones. Received…' },
  { name: 'Satyaki', initials: 'SB', place: 'Kolkata', category: 'Trekking Gear', stars: 5, text: 'I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super…' },
];

export const STATS = [
  { value: '250Cr+', label: 'Saved Together' },
  { value: '4.5M Kg', label: 'CO₂E Emissions Saved' },
  { value: '100K+', label: 'Products In Circulation' },
];

export const FOOTER_CATEGORIES = [
  { title: 'Action Cameras', links: ['Action Cameras', 'Pocket Cameras', 'GoPro Cameras', 'DJI Cameras', '360 Cameras'] },
  { title: 'Cameras', links: ['DSLR Cameras', 'Cameras', 'iPhones', 'DSLR Gimbal Combos', 'Wildlife Photography', 'Tripod and camera accessories'] },
  { title: 'Trekking Gear', links: ['Trekking Gear', 'Trekking Jackets', 'Trek/Snow Pants', 'Trekking Shoes', 'Trek Accessories'] },
  { title: 'Riding Gear', links: ['Riding Gear', 'Riding Luggage', 'Riding Jackets', 'Riding Essentials', 'Riding Boots', 'Binoculars'] },
  { title: 'Creator Gear', links: ['Wireless & Collar Mics', 'Professional Cameras', 'Mirrorless Cameras', 'UNLMTD Vlogging', 'Mobile Gimbals', 'Vlogging'] },
  { title: 'Gaming Console', links: ['PS5 Console', 'VR', 'Racing Wheel', 'Big Screen Gaming', 'Xbox Console'], current: true },
  { title: 'Winter Wear', links: ['Snow Boots', 'Winter Jackets', 'Backpacks'] },
  { title: 'Camping Gear', links: ['Camping Gear', 'Camping Stools & Tables', 'Camping Tents', 'Sleeping Bags & Mats'] },
  { title: 'Audio Visual Equipment', links: ['Projectors', 'VR', 'Mics', 'Speakers'] },
];

export const FOOTER_COLUMNS = [
  { title: 'Sharepal', links: [{ label: 'About' }, { label: 'Why SharePal' }, { label: 'Sitemap' }, { label: 'CarePal' }] },
  { title: 'Become a Pal', links: [{ label: 'Sharepal for Creators' }, { label: 'Careers' }, { label: 'Sharepal for Brands' }, { label: 'Asset Funding Program', badge: 'New' }, { label: 'Rent Your Gear', badge: 'New' }] },
  { title: 'Information', links: [{ label: 'How it works?' }, { label: 'FAQs' }, { label: 'Verification' }, { label: 'Cancellation Policy' }, { label: 'Life at Sharepal' }] },
  { title: 'Policies', links: [{ label: 'Terms & Condition' }, { label: 'Shipping policy' }, { label: 'Damage Policy' }, { label: 'Terms of Use' }, { label: 'Privacy Policy' }] },
];

export const SUPPORT_EMAIL = 'care@sharepal.in';
