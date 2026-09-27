export function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';
  const title = document.createElement('h3');
  title.textContent = product.name;
  const category = document.createElement('p');
  category.textContent = product.category;
  const description = document.createElement('p');
  description.textContent = product.description;
  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = `${product.price.toLocaleString('vi-VN')} ₫`;
  card.append(title, category, description, price);
  return card;
}

export function renderProductList(root, products) {
  if (products.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = 'Không tìm thấy sản phẩm phù hợp.';
    root.replaceChildren(empty);
    return;
  }
  root.replaceChildren(...products.map(createProductCard));
}

export function setStatus(root, message, kind = 'success') {
  root.textContent = message;
  root.dataset.kind = kind;
}
