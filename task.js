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
    const index = this.items.findIndex((i) => i.name === name); //находим индекс объекта для удаления
    if (index > -1) {
      //если индекс найден он будет больше -1, если не найден, то будет -1
      this.items.splice(index, 1); //удаляем один объект начиная с индекса объекта
      this.calculateTotal();
    }
  },

  updateQuantity(name, quantity) {
    const item = this.items.find((i) => i.name === name); //нашли объект
    if (item) {
      //если он существует
      item.quantity = quantity; //увеличили его количество
      this.calculateTotal(); // и пересчитали общую стоимость
    }
  },

  calculateTotal() {
    this.total = this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ); //редюсим на каждой итерации считая стоимость одного типа товара и складывая с аккумулятором
  },

  clearCart() {
    //просто обнуляем все
    this.items = [];
    this.total = 0;
  },
};

shoppingCart.addItem({ name: "Apple", price: 1, quantity: 3 });
shoppingCart.addItem({ name: "Banana", price: 0.5, quantity: 4 });
console.log(shoppingCart.total);
shoppingCart.removeItem("Apple");
shoppingCart.updateQuantity("Banana", 2);
console.log(shoppingCart.items);
shoppingCart.clearCart();
console.log(shoppingCart.items);
