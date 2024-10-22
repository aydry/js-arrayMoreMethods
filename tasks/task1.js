function getPopularCategories(products) {
  const filteredProducts = products.filter(product => product.sales > 5);
  const sortedProducts = filteredProducts.sort((a, b) => b.sales - a.sales);
  const categories = sortedProducts.map(product => product.category);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories;
}
const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];
console.log(getPopularCategories(products));
module.exports = getPopularCategories;
