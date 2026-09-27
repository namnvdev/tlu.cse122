import { fetchProducts } from './api.js';
import { renderProductList, setStatus } from './components.js';

const state = { products: [], query: '', loading: false };
const status = document.querySelector('#status');
const productRoot = document.querySelector('#products');
const search = document.querySelector('#search');
const reload = document.querySelector('#reload');

function updateView() {
  const query = state.query.trim().toLocaleLowerCase();
  const visible = state.products.filter(product =>
    `${product.name} ${product.category}`.toLocaleLowerCase().includes(query)
  );
  renderProductList(productRoot, visible);
  if (!state.loading) {
    const message = query
      ? `${visible.length} / ${state.products.length} sản phẩm phù hợp.`
      : `${state.products.length} sản phẩm đã tải.`;
    setStatus(status, message, 'success');
  }
}

async function loadCatalog() {
  state.loading = true;
  reload.disabled = true;
  setStatus(status, 'Đang tải dữ liệu sản phẩm…', 'loading');
  try {
    state.products = await fetchProducts();
    state.loading = false;
    updateView();
  } catch (error) {
    state.products = [];
    state.loading = false;
    productRoot.replaceChildren();
    setStatus(status, `Không tải được dữ liệu: ${error.message}`, 'error');
  } finally {
    state.loading = false;
    reload.disabled = false;
  }
}

search.addEventListener('input', event => {
  state.query = event.target.value;
  if (!state.loading) updateView();
});
reload.addEventListener('click', loadCatalog);
loadCatalog();
