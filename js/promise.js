// chaining promises

let jewel = [];
fetch("https://fakestoreapi.com/products/category/jewelery")
  .then(({ data }) => {
    jewel = data;

    return fetch("https://fakestoreapi.com/products");
  })
  .then(({ data }) => {
    let jewelery = data.map((j) => {
      return {
        ...j,
        product: jewel.find((d) => d.id === j.productsId).description,
      };
    });
    showOrderList("#order-list", jewelery);
  });
