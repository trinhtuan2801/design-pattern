interface Product {
  getInfo(): string;
}

class Product1 implements Product {
  public getInfo() {
    return 'This is product 1';
  }
}

class Product2 implements Product {
  public getInfo() {
    return 'This is product 2';
  }
}

abstract class Factory {
  public abstract createProduct(): Product;

  public getNewProduct() {
    const product = this.createProduct();
    return product;
  }
}

class Factory1 extends Factory {
  public createProduct() {
    return new Product1();
  }
}

class Factory2 extends Factory {
  public createProduct() {
    return new Product2();
  }
}

const factory1 = new Factory1();
const product1 = factory1.getNewProduct();
console.log(product1.getInfo()); // This is product 1

const factory2 = new Factory2();
const product2 = factory2.getNewProduct();
console.log(product2.getInfo()); // This is product 2
