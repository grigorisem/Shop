export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json(); // [{..., imageUrl: "..."}]
}

export async function createProduct(formData: FormData) {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    body: formData, // multipart/form-data
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
}
