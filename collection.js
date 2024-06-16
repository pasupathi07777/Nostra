// handburger

let hand_burger_icon = document.querySelector(".hand-burger-icon")
let slider_nav = document.querySelector(".slider-nav")
hand_burger_icon.addEventListener("click", () => {
  
    slider_nav.style.left = "0"



})
// add top px max screen

function updateClassBasedOnScreenWidth() {
    let add_c = document.querySelector(".section-3__s1")


    if (window.matchMedia("(min-width: 640px)").matches) {
        add_c.style.top = "80px"




    }
    if (window.matchMedia("(max-width: 640px)").matches) {

        ffdd.style.top = "-520px";




    }


}
window.addEventListener("resize", updateClassBasedOnScreenWidth);//


// filter animation

let ff = document.querySelector(".box");    //filter box
let ffdd = document.querySelector(".pasu");  //check-box 
let ffddss = document.querySelector(".down"); //arrow
// all 

// ff.addEventListener("mouseover", () => {
//     console.log("mouseover")
//     if (window.matchMedia("(min-width: 639px)").matches){
//         ffdd.style.top = "117px";

//     }
//     if (ffddss.style.transform === "rotate(180deg)") {
//         ffddss.style.transform = "";
//     } else {
//         ffddss.style.transform = "rotate(180deg)";
//     }

// });

// ff.addEventListener("mouseout", () => {
//     console.log("mouseout")
//     if (window.matchMedia("(min-width: 639px)").matches){
//         ffdd.style.top = "-569px";

//     }
//     if (ffddss.style.transform === "rotate(180deg)") {
//         ffddss.style.transform = "";
        
//     } else {
//         ffddss.style.transform = "rotate(180deg)";
//     }
//      // This will revert the style to its original value
// });

let filter_text=document.querySelector(".filter")
let close__text=document.querySelector(".close")

ff.addEventListener("click", () => {
    filter_text.classList.toggle("clo")
    close__text.classList.toggle("gone")
    console.log("click")
    
    ffdd.classList.toggle("toppp");


    if (ffddss.style.transform === "rotate(180deg)") {
       
        ffddss.style.transform = "rotate(0deg)";
    } else {
        ffddss.style.transform = "rotate(180deg)";
    }








});




// function updateClassBasedOnScreenWidth() {
//     // ffdd.classList.toggle("top-[117px]");



//     let element = document.querySelector(".pasu");
//     let element_2 = document.querySelector(".down");

//     if (window.matchMedia("(min-width: 640px)").matches) {
//         element.classList.remove("pasu");
//         ff.classList.remove("box")
//         // if (ffdd.classList.contains("toppp")) {
//         //     ffdd.classList.remove("toppp");
//         //     console.log("Class 'toppp' was removed.");
//         // }


//         // Uncomment this line if you want to update element_2 as well
//         // element_2.classList.remove("pasu");
//     } else {
//         element.classList.add("pasu");
//         ff.classList.add("box")
//     }
// }

// // Initial check
// updateClassBasedOnScreenWidth();

// // Add event listener for screen resize
// window.addEventListener("resize", updateClassBasedOnScreenWidth);





// slider nav 
let close_nav = document.querySelector(".close-nav")
let close_icon = document.querySelector(".close-icon")


close_nav.addEventListener("click", () => {

    slider_nav.style.left = "-50%"
    console.log("hii")

})



// let filter process 
let products__main = document.querySelector(".products")

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

let arr = []

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
        occasion: "summer",
        color: "green",


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

function renderProducts(productsToRender) {
    products__main.innerHTML = '';
    productsToRender.forEach((e) => {
        let d = document.createElement("div");
        d.innerHTML = `
            <div class="section-3__s2__products__product capitalize bg-white w-fit justify-center items-center flex flex-col flex-grow-1 max-w-[160px] p-[5px]">
                <img src="${e.img}" alt="${e.name}" class="w-full h-[160px] max-w-[150px] rounded">
                <div class="mt-1">
                    <p class="name text-[#8B8B8B] font-medium">${e.brand}</p>
                    <p class="details overflow-x-auto text-[14px] w-full">${e.name}</p>
                </div>
                <div class="price flex flex-col w-full">
                    <div class="flex items-center gap-1">
                        <p class="text-[16px] font-semibold">₹${e.rs}</p>
                        <p class="text-[#8B8B8B]"><del>${e.mrp}</del></p>
                    </div>
                    <p class="text-[#409243]">${e.offer}% off</p>
                </div>
            </div>`;
        products__main.appendChild(d);
    });
}

// Initial render
renderProducts(products);









// Combined filter function code sponcer by chatgpt
function combinedFilter(input) {
    let filteredProducts = products;

    // Text input filtering
    if (input) {
        filteredProducts = filteredProducts.filter((e) => {
            return (e.name && e.name.toLowerCase().includes(input)) ||
                (e.occasion && e.occasion.toLowerCase().includes(input)) ||
                (e.brand && e.brand.toLowerCase().includes(input)) ||
                (e.type && e.type.toLowerCase().includes(input)) ||
                (e.color && e.color.toLowerCase().includes(input));
        });
    }

    // Array filtering (color, occasion, price range)
    if (arr.length) {
        filteredProducts = filteredProducts.filter((pro) => {
            return arr.some((a) => {
                if (typeof a === 'string') {
                    return pro.color === a || pro.occasion === a;
                } else if (typeof a === 'number') {
                    // Price range filters
                    if (a === 500) {
                        return pro.rs >= 250 && pro.rs <= 500;
                    } else if (a === 1000) {
                        return pro.rs > 500 && pro.rs <= 1000;
                    } else if (a === 1500) {
                        return pro.rs > 1000 && pro.rs <= 1500;
                    }
                }
            });
        });
    }

    renderProducts(filteredProducts);
    console.log(filteredProducts);
}

// Event listener for search input
search.addEventListener("keyup", (event) => {
    let input = event.target.value.toLowerCase(); // Convert input to lowercase
    combinedFilter(input); // Call combined filter function with input
});

// Initial call to render all products
combinedFilter("");



// first checkout filter 

arrivals__div.forEach((e) => {


})
// rs filter 
arrivals__div.forEach((e) => {
    e.addEventListener("change", () => {
        // console.log(e)
        if (e.querySelector("input").checked) {
            arr.push(Number(event.target.value))
            console.log(arr)
            // checkoutfilter()
            combinedFilter()
            if (window.matchMedia("(max-width: 639px)").matches) {
                // ffdd.classList.toggle("toppp")


            }


            // if (ffddss.style.transform === "rotate(180deg)") {
            //     ffddss.style.transform = "";
            // } else {
            //     ffddss.style.transform = "rotate(180deg)";
            // }






        } else {
            arr = arr.filter((e) => e !== Number(event.target.value))
            console.log(arr)
            // checkoutfilter()
            console.log(arr)
            combinedFilter()
            if (window.matchMedia("(max-width: 639px)").matches) {
                // ffdd.classList.toggle("toppp")


            }
            // if (ffddss.style.transform === "rotate(180deg)") {
            //     ffddss.style.transform = "";
            // } else {
            //     ffddss.style.transform = "rotate(180deg)";
            // }

        }

    })

})
colors__div.forEach((e) => {
    e.addEventListener("change", () => {
        if (e.querySelector("input").checked) {
            arr.push(event.target.value)
            // checkoutfilter()
            console.log(arr)
            combinedFilter()
            if (window.matchMedia("(max-width: 639px)").matches) {
                // ffdd.classList.toggle("toppp")


            }
            // if (ffddss.style.transform === "rotate(180deg)") {
            //     ffddss.style.transform = "";
            // } else {
            //     ffddss.style.transform = "rotate(180deg)";
            // }


        } else {
            arr = arr.filter((e) => e != event.target.value)
            // checkoutfilter()
            console.log(arr)
            combinedFilter()
            if (window.matchMedia("(max-width: 639px)").matches) {
                // ffdd.classList.toggle("toppp")


            }
            // if (ffddss.style.transform === "rotate(180deg)") {
            //     ffddss.style.transform = "";
            // } else {
            //     ffddss.style.transform = "rotate(180deg)";
            // }

        }

    })

})
occasion__div.forEach((e) => {
    e.addEventListener("change", () => {
        if (e.querySelector("input").checked) {
            arr.push(event.target.value)
            console.log(arr)
            // checkoutfilter()
            combinedFilter()
            // ffdd.style.top = "0px";
            if (window.matchMedia("(max-width: 639px)").matches) {
                // ffdd.style.top = "-520px";
                // ffdd.classList.toggle("toppp")


            }
         
            // if (ffddss.style.transform === "rotate(180deg)") {
            //     ffddss.style.transform = "";
            // } else {
            //     ffddss.style.transform = "rotate(180deg)";
            // }



        } else {
            arr = arr.filter((e) => e != event.target.value)
            // checkoutfilter()
            combinedFilter()
            // ffdd.style.top = "0px";
            if (window.matchMedia("(max-width: 639px)").matches) {
                
                // ffdd.classList.toggle("toppp")


            }
            // ffdd.style.top = "-520px";
            // if (ffddss.style.transform === "rotate(180deg)") {
            //     ffddss.style.transform = "";
            // } else {
            //     ffddss.style.transform = "rotate(180deg)";
            // }

        }

    })

})













