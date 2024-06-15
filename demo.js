// Selecting DOM elements
let products__main = document.querySelector(".products");
let search = document.querySelector(".section-3__s2__input");
let arrivals__div = document.querySelectorAll(".Arrivals div");
let colors__div = document.querySelectorAll(".Colors div");
let occasion__div = document.querySelectorAll(".Occasion div");

// Initial products data
let products = [
    {
        name: "Men Solid Black T-Shirt",
        img: "./img/summer/black-t.webp",
        brand: "Adidas",
        rs: 455,
        mrp: "₹999",
        offer: 67,
        occasion: "summer",
        color: "black",
        type: "tshirt"

    },
    {
        name: "Men Solid Blue T-Shirt",
        img: "./img/summer/blue-t.webp",
        brand: "Adidas",
        rs: 508,
        mrp: "₹999",
        offer: 67,
        occasion: "summer",
        color: "blue",
        type: "tshirt"



    },

    {
        name: "Men Solid green T-Shirt",
        img: "./img/summer/green-t.webp",
        brand: "puma",
        rs: 438,
        mrp: "₹600",
        offer: 67
        ,
        occasion: "summer",
        color: "green",
        type: "tshirt"



    },

    {
        name: "Men Solid white T-Shirt",
        img: "./img/summer/white-t.webp",
        brand: "puma",
        rs: 458,
        mrp: "₹700",
        offer: 67,
        occasion: "summer"


    },
    {
        name: "Men Solid pink Shirt",
        img: "./img/summer/pink-shirt.webp",
        brand: "adidas",
        rs: 408,
        mrp: "₹700",
        offer: 53,
        occasion: "summer"
        , color: "pink",
        type: "shirt"


    },
    {
        name: "Men Solid blue T-Shirt",
        img: "./img/summer/blue-shirts.webp",
        brand: "puma",
        rs: 308,
        mrp: "₹700",
        offer: 77,
        occasion: "summer"
        , color: "blue"
        , type: "tshirt"


    },
    {
        name: "Men Solid green T-Shirt",
        img: "./img/summer/green-shirt.webp",
        brand: "nike",
        rs: 698,
        mrp: "₹900",
        offer: 80,
        occasion: "summer",
        color: "green",
        type: "tshirt"


    },
    {
        name: "Men Solid black Shirt",
        img: "./img/summer/black-shirt.webp",
        brand: "puma",
        rs: 458,
        mrp: "₹700",
        offer: 67,
        occasion: "summer",
        color: "black",
        type: "shirt"


    },
    {
        name: "Men Solid white T-Shirt",
        img: "./img/summer/whirt-shirt.webp",
        brand: "puma",
        rs: 458,
        mrp: "₹700",
        offer: 67,
        occasion: "summer",
        color: "white",
        type: "tshirt"


    },
    // party wear
    {
        name: "Men Solid Straight Kurta (Black)",
        img: "./img/party/party-wears-kurtha-black.webp",
        brand: "zara",
        rs: 800,
        mrp: "₹1100",
        offer: 60,
        occasion: "party",
        color: "black",
        type: "kurtha"

    },
    {
        name: "Men Solid  Straight Kurta (blue)",
        img: "./img/party/party-wears-kurtha-blue.webp",
        brand: "Jompers ",
        rs: 1000,
        mrp: "₹1100",
        offer: 30,
        occasion: "party",
        color: "blue",
        type: "kurtha"

    },
    {
        name: "Men Solid Straight Kurta (green)",
        img: "./img/party/party-wears-kurtha-green.webp",
        brand: "Jompers ",
        rs: 1300,
        mrp: "₹1400",
        offer: 20,
        occasion: "party",
        color: "green",
        type: "kurtha"

    },
    {
        name: "Men Solid Straight Kurta (white)",
        img: "./img/party/party-wears-kurtha-white.webp",
        brand: "Jompers ",
        rs: 1000,
        mrp: "₹1400",
        offer: 20,
        occasion: "party",
        color: "white",
        type: "kurtha"

    },
    // winter
    {
        name: "Men Colorblock Padded Jacket (black)",
        img: "./img/winter/winter-black-shirt.webp",
        brand: "Roster  ",
        rs: 800,
        mrp: "₹1400",
        offer: 90,
        occasion: "winter",
        color: "black",
        type: "shirt "

    },
    {
        name: "Men Colorblock Padded Jacket (white)",
        img: "./img/winter/winter-white-shirt.webp",
        brand: "WROGN  ",
        rs: 500,
        mrp: "₹1400",
        offer: 70,
        occasion: "winter",
        color: "white",
        type: "shirt "

    },
    {
        name: "Men Colorblock Padded Jacket (blue)",
        img: "./img/winter/winter-blue-shirt.webp",
        brand: "WROGN  ",
        rs: 600,
        mrp: "₹1000",
        offer: 70,
        occasion: "winter",
        color: "blue",
        type: "shirt "

    },
    {
        name: "Men Colorblock Padded Jacket (blue)",
        img: "./img/winter/winter-blue-shirt2.webp",
        brand: "WROGN  ",
        rs: 900,
        mrp: "₹1000",
        offer: 10,
        occasion: "winter",
        color: "blue",
        type: "shirt "

    },
    {
        name: "Men Colorblock Padded Jacket (green)",
        img: "./img/winter/winter-green-shirt.webp",
        brand: "WROGN  ",
        rs: 1000,
        mrp: "₹1400",
        offer: 70,
        occasion: "winter",
        color: "green",
        type: "shirt "

    },
    // beach
    {
        name: "Men Slim Fit Shirt (black)",
        img: "./img/beach/beach-black-shirt.webp",
        brand: "certizo   ",
        rs: 300,
        mrp: "₹400",
        offer: 20,
        occasion: "beach",
        color: "black",
        type: "shirt "

    },

    {
        name: "Men Slim Fit Shirt (white)",
        img: "./img/beach/beach-white-shirt.webp",
        brand: "certizo   ",
        rs: 350,
        mrp: "₹400",
        offer: 15,
        occasion: "beach",
        color: "white",
        type: "shirt "

    },

    {
        name: "Men Slim Fit Shirt (green)",
        img: "./img/beach/beach-green-shirt.webp",
        brand: "certizo   ",
        rs: 350,
        mrp: "₹450",
        offer: 25,
        occasion: "beach",
        color: "green",
        type: "shirt "

    },
    {
        name: "Men Slim Fit Shirt (blue)",
        img: "./img/beach/beach-blue-shirt.webp",
        brand: "certizo   ",
        rs: 350,
        mrp: "₹400",
        offer: 5,
        occasion: "beach",
        color: "blue",
        type: "shirt "

    },


]

// Initial filter array
let arr = [];

// Function to render products based on given array
function renderProducts(productsToRender) {
    products__main.innerHTML = ''; // Clear the current products displayed
    productsToRender.forEach((product) => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("section-3__s2__products__product", "capitalize", "bg-white", "w-fit", "justify-center", "items-center", "flex", "flex-col", "flex-grow-1", "max-w-[160px]", "p-[5px]");
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="w-full h-full max-h-[180px] max-w-[150px] rounded">
            <div class="mt-1">
                <p class="name text-[#8B8B8B] font-medium">${product.brand}</p>
                <p class="details overflow-x-auto w-full">${product.name}</p>
            </div>
            <div class="price flex flex-col w-full">
                <div class="flex items-center gap-1">
                    <p class="text-2xl font-semibold">₹${product.rs}</p>
                    <p class="text-[#8B8B8B]"><del>${product.mrp}</del></p>
                </div>
                <p class="text-[#409243]">${product.offer}% off</p>
            </div>`;
        products__main.appendChild(productDiv);
    });
}

// Initial render of all products
renderProducts(products);

// Function to apply filters and render products accordingly
function applyFilters() {
    let filteredProducts = products;

    // Apply search filter
    let input = search.value.trim().toLowerCase();
    if (input !== "") {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(input) || product.type.toLowerCase().includes(input)
        );
    }

    // Apply checkbox filters
    if (arr.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
            arr.includes(product.color) || arr.includes(product.occasion) || arr.includes(product.rs.toString())
        );
    }

    // Render filtered products
    renderProducts(filteredProducts);
}

// Event listeners for checkbox changes
arrivals__div.forEach((e) => {
    e.addEventListener("change", () => {
        let value = e.querySelector("input").value;
        if (e.querySelector("input").checked) {
            arr.push(value);
        } else {
            arr = arr.filter((item) => item !== value);
        }
        applyFilters();
    });
});

colors__div.forEach((e) => {
    e.addEventListener("change", () => {
        let value = e.querySelector("input").value;
        if (e.querySelector("input").checked) {
            arr.push(value);
        } else {
            arr = arr.filter((item) => item !== value);
        }
        applyFilters();
    });
});

occasion__div.forEach((e) => {
    e.addEventListener("change", () => {
        let value = e.querySelector("input").value;
        if (e.querySelector("input").checked) {
            arr.push(value);
        } else {
            arr = arr.filter((item) => item !== value);
        }
        applyFilters();
    });
});

// Event listener for search input keyup event
search.addEventListener("keyup", applyFilters);
