// let filter process 
let products__main = document.querySelector(".products")

let products = [
    {
        name: "Men Solid Black T-Shirt",
        img: "./img/summer/black-t.webp",
        brand: "Adidas",
        rs: "458",
        mrp: "₹999",
        offer: 67,
        occasion: "summer",
        color: "black",
        type:"tshirt"

    },
    {
        name: "Men Solid Blue T-Shirt",
        img: "./img/summer/blue-t.webp",
        brand: "Adidas",
        rs: "508",
        mrp: "₹999",
        offer: 67,
        occasion: "summer",
        color: "blue",
        type:"tshirt"



    },

    {
        name: "Men Solid green T-Shirt",
        img: "./img/summer/green-t.webp",
        brand: "puma",
        rs: "₹438",
        mrp: "₹600",
        offer: 67
        ,
        occasion: "summer",
        color:"green",
        type:"tshirt"



    },

    {
        name: "Men Solid white T-Shirt",
        img: "./img/summer/white-t.webp",
        brand: "puma",
        rs: "₹458",
        mrp: "₹700",
        offer: 67,
        occasion: "summer"


    },
    {
        name: "Men Solid pink Shirt",
        img: "./img/summer/pink-shirt.webp",
        brand: "adidas",
        rs: "₹408",
        mrp: "₹700",
        offer: 53,
        occasion: "summer"
        ,color:"pink",
        type:"shirt"


    },
    {
        name: "Men Solid blue T-Shirt",
        img: "./img/summer/blue-shirts.webp",
        brand: "puma",
        rs: "₹308",
        mrp: "₹700",
        offer: 77,
        occasion: "summer"
        ,color:"blue"
        ,type:"tshirt"


    },
    {
        name: "Men Solid green T-Shirt",
        img: "./img/summer/green-shirt.webp",
        brand: "nike",
        rs: "₹698",
        mrp: "₹900",
        offer: 80,
        occasion: "summer",
        color:"green",
        type:"tshirt"


    },
    {
        name: "Men Solid black Shirt",
        img: "./img/summer/black-shirt.webp",
        brand: "puma",
        rs: "₹458",
        mrp: "₹700",
        offer: 67,
        occasion: "summer",
        color:"black",
        type:"shirt"


    },
    {
        name: "Men Solid white T-Shirt",
        img: "./img/summer/whirt-shirt.webp",
        brand: "puma",
        rs: "458",
        mrp: "₹700",
        offer: 67,
        occasion: "summer",
        color:"white",
        type:"tshirt"


    },
    // party wear
    {
        name: "Men Solid Straight Kurta (Black)",
        img: "./img/party/party-wears-kurtha-black.webp",
        brand: "zara",
        rs: "800",
        mrp: "₹1100",
        offer: 60,
        occasion: "party",
        color:"black",
        type:"kurtha"

    },
    {
        name: "Men Solid  Straight Kurta (blue)",
        img: "./img/party/party-wears-kurtha-blue.webp",
        brand: "Jompers ",
        rs: "1000",
        mrp: "₹1100",
        offer: 30,
        occasion: "party",
        color:"blue",
        type:"kurtha"

    },
    {
        name: "Men Solid Straight Kurta (green)",
        img: "./img/party/party-wears-kurtha-green.webp",
        brand: "Jompers ",
        rs: "1300",
        mrp: "₹1400",
        offer: 20,
        occasion: "party",
        color:"green",
        type:"kurtha"

    },
    {
        name: "Men Solid Straight Kurta (white)",
        img: "./img/party/party-wears-kurtha-white.webp",
        brand: "Jompers ",
        rs: "1000",
        mrp: "₹1400",
        offer: 20,
        occasion: "party",
        color:"white",
        type:"kurtha"

    },
    // winter
    {
        name: "Men Colorblock Padded Jacket (black)",
        img: "./img/winter/winter-black-shirt.webp",
        brand: "Roster  ",
        rs: "800",
        mrp: "₹1400",
        offer: 90,
        occasion: "winter",
        color:"black",
        type:"shirt "

    },
    {
        name: "Men Colorblock Padded Jacket (white)",
        img: "./img/winter/winter-white-shirt.webp",
        brand: "WROGN  ",
        rs: "500",
        mrp: "₹1400",
        offer: 70,
        occasion: "winter",
        color:"white",
        type:"shirt "

    },
    {
        name: "Men Colorblock Padded Jacket (blue)",
        img: "./img/winter/winter-blue-shirt.webp",
        brand: "WROGN  ",
        rs: "600",
        mrp: "₹1000",
        offer: 70,
        occasion: "winter",
        color:"blue",
        type:"shirt "

    },
    {
        name: "Men Colorblock Padded Jacket (blue)",
        img: "./img/winter/winter-blue-shirt2.webp",
        brand: "WROGN  ",
        rs: "900",
        mrp: "₹1000",
        offer: 10,
        occasion: "winter",
        color:"blue",
        type:"shirt "

    },
    {
        name: "Men Colorblock Padded Jacket (green)",
        img: "./img/winter/winter-green-shirt.webp",
        brand: "WROGN  ",
        rs: "1000",
        mrp: "₹1400",
        offer: 70,
        occasion: "winter",
        color:"green",
        type:"shirt "

    },
    // beach
    {
        name: "Men Slim Fit Shirt (black)",
        img: "./img/beach/beach-black-shirt.webp",
        brand: "certizo   ",
        rs: "300",
        mrp: "₹400",
        offer: 20,
        occasion: "beach",
        color:"black",
        type:"shirt "

    },
   
    {
        name: "Men Slim Fit Shirt (white)",
        img: "./img/beach/beach-white-shirt.webp",
        brand: "certizo   ",
        rs: "350",
        mrp: "₹400",
        offer: 15,
        occasion: "beach",
        color:"white",
        type:"shirt "

    },
   
    {
        name: "Men Slim Fit Shirt (green)",
        img: "./img/beach/beach-green-shirt.webp",
        brand: "certizo   ",
        rs: "350",
        mrp: "₹450",
        offer: 25,
        occasion: "beach",
        color:"green",
        type:"shirt "

    },
    {
        name: "Men Slim Fit Shirt (blue)",
        img: "./img/beach/beach-blue-shirt.webp",
        brand: "certizo   ",
        rs: "350",
        mrp: "₹400",
        offer: 5,
        occasion: "beach",
        color:"blue",
        type:"shirt "

    },
   
   
]


function pro() {
    products.forEach((e) => {
        let d = document.createElement("div")
        d.innerHTML = ` <div
        class="section-3__s2__products__product  bg-white w-fit justify-center items-center flex flex-col flex-grow-1  max-w-[160px] p-[5px]     ">
        <img src="${e.img}" alt="Black t shirt"
            class="w-full h-full  max-h-[180px] max-w-[150px] rounded">
            <div class="mt-1">
                <p class="name text-[#8B8B8B] font-medium">${e.brand}</p>
                <p class="details overflow-x-auto w-full">${e.name}</p>
            </div>
            <div class="price flex flex-col   w-full">
                <div class="flex items-center gap-1 ">
                    <p class="text-2xl font-semibold    ">${e.rs}</p>
                    <p class="text-[#8B8B8B]"><del>${e.mrp}</del></p>
                </div>
                <p class="text-[#409243]">${e.offer}</p>
            </div>
    </div>`
        console.log(d)
        products__main.prepend(d)


    })
}

pro()











let search = document.querySelector(".section-3__s2__input")
// Arrivals
let arrivals = document.querySelector(".Arrivals")
let arrivals__div = arrivals.querySelectorAll("div")

// Colors
let colors = document.querySelector(".Colors")
let colors__div = colors.querySelectorAll("div")

// Occasion
let occasion = document.querySelector(".Occasion")
let occasion__div = occasion.querySelectorAll("div")

search.addEventListener("keyup", () => {
    let arr = []
    arrivals__div.forEach((e) => {
        if (e.querySelector("input").checked) {
            arr.push(e.querySelector("input").value)
        }

    })
    colors__div.forEach((e) => {
        if (e.querySelector("input").checked) {
            arr.push(e.querySelector("input").value)
        }

    })
    occasion__div.forEach((e) => {
        if (e.querySelector("input").checked) {
            arr.push(e.querySelector("input").value)
        }

    })
    console.log(arr)




    console.log(arrivals)
    console.log(colors)
    console.log(occasion)

})