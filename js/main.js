fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then(products => {
    const productDiv = document.querySelector('.product-container')
    productDiv.className = "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 bg-gray-300 p-4"
    products.forEach(prod => {
        const newDiv = document.createElement('div')
        newDiv.className = "flex flex-col h-[400px] flex-between items-between relative rounded-md bg-white p-5 "
        console.log(prod)
        newDiv.innerHTML = `
        <div class="flex-1 overflow-hidden flex items-center justify-center">
        <img src="${prod.image}" alt="${prod.description}" class="h-full">
        </div>
        <div class="flex flex-col gap-2 flex-1">
        <h2 class="text-lg md:text-xl font-bold">${prod.title}</h2>
        <h3 class="bg-slate-100/50 rounded">Ksh ${prod.price}</h3>
        <div class="line-clamp-3"><p class="text-sm md:text-base">${prod.description}</p></div>
</div>
        `
        productDiv.appendChild(newDiv)
    });
})