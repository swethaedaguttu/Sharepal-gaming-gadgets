import raw from '../data/product-list.json';
import { SIDEBAR_CATEGORIES } from '../data/config.js';

const TAG_RANK = { 'Vote to Launch': 0, New: 1, Trending: 2 };
const editionOf = (p) => Number((p.name.match(/FC(\d+)/i) || [])[1] || 0);

function compare(a, b) {
  const ra = TAG_RANK[a.tag] ?? 3;
  const rb = TAG_RANK[b.tag] ?? 3;
  if (ra !== rb) return ra - rb;
  if (a.tag === 'New') return editionOf(b) - editionOf(a) || a.id - b.id;
  if (a.out_of_stock !== b.out_of_stock) return a.out_of_stock ? 1 : -1;
  return b.booked_count - a.booked_count;
}

const isValid = (p) => p && p.id != null && p.name && p.image;

export const allProducts = (raw.products || []).filter(isValid).slice().sort(compare);

/** Categories are derived from the product name and its catalogue image path. */
export function productCategories(p) {
  const haystack = `${p.name} ${p.image}`;
  return SIDEBAR_CATEGORIES.filter((c) => c.pattern && new RegExp(c.pattern, 'i').test(haystack)).map(
    (c) => c.id
  );
}

export function categoryCount(id) {
  if (id === 'all') return allProducts.length;
  return allProducts.filter((p) => productCategories(p).includes(id)).length;
}

export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'new', label: 'New' },
  { id: 'trending', label: 'Trending' },
  { id: 'in-stock', label: 'In stock' },
];

export const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top rated' },
];

export function selectProducts({ category, filter, sort, query }) {
  const q = query.trim().toLowerCase();
  let list = allProducts.filter((p) => {
    if (category !== 'all' && !productCategories(p).includes(category)) return false;
    if (filter === 'new' && p.tag !== 'New') return false;
    if (filter === 'trending' && p.tag !== 'Trending') return false;
    if (filter === 'in-stock' && p.out_of_stock) return false;
    if (q && !p.name.toLowerCase().includes(q)) return false;
    return true;
  });
  if (sort === 'price-asc') list = list.slice().sort((a, b) => a.per_day_rent - b.per_day_rent);
  if (sort === 'price-desc') list = list.slice().sort((a, b) => b.per_day_rent - a.per_day_rent);
  if (sort === 'rating') list = list.slice().sort((a, b) => b.rating - a.rating);
  return list;
}
