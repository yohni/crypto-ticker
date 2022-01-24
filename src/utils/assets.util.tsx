export const marketCap = (price: number, vol: number): number => price * vol;

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
});

export const numberFormater = new Intl.NumberFormat('dec', {
  notation: 'compact',
});

export const handleSearch = (text: string, key: string): boolean =>
  text.toLowerCase().search(key.toLowerCase()) !== -1;
