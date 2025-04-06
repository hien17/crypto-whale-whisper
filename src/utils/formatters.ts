
/**
 * Truncates an Ethereum address to show only the first and last few characters
 */
export function truncateAddress(address: string, length = 4): string {
  if (!address) return '';
  if (address.length <= length * 2) return address;
  return `${address.slice(0, length)}...${address.slice(-length)}`;
}

/**
 * Formats a number as currency
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Formats a percentage
 */
export function formatPercentage(value: number): string {
  return `${value}%`;
}
