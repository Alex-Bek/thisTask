const shoppingCart = {
  items: [],
  total: 0,

  addItem(item) {
    const { name, price, quantity } = item; //деструктуризируем объект из аргумента
    const existingItem = this.items.find(
      (i) => i.name === name
    ); /*находим уже существующий товар в корзине 
    и получаем его объект или не находим и получаем undefined; */
    if (existingItem) {
      //тут проверка
      existingItem.quantity += quantity; //если нашли, то просто увеличиваем количество этого товара
    } else {
      this.items.push({ name, price, quantity }); //есди не нашли добавляем новый
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
    //просто обнуляем все
    this.items = [];
    this.total = 0;
  },
};
