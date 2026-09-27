export async function fetchProducts() {
  const endpoint = new URL('../data/products.json', import.meta.url);
  const response = await fetch(endpoint, {
    headers: { Accept: 'application/json' }
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }
  const payload = await response.json();
  if (!Array.isArray(payload)) {
    throw new Error('API response phải là một danh sách');
  }
  return payload;
}
