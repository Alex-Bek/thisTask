const shoppingCart = {
  items: [],
  total: 0,

  addItem(item) {
    const { name, price, quantity } = item;
    const existingItem = this.items.find((i) => i.name === name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name, price, quantity });
    }
    this.calculateTotal();
  },

  removeItem(name) {
    this.calculateTotal();
  },

  updateQuantity(name, quantity) {
    this.calculateTotal();
  },

  calculateTotal() {},

  clearCart() {
    this.items = [];
    this.total = 0;
  },
};
