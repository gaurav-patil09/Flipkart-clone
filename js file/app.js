document.addEventListener("DOMContentLoaded",()=>{

  const products = document.querySelectorAll(".products");
  if(products.length > 0) {
    products.forEach(p => {
      p.addEventListener("click", ()=>{
        const id = p.dataset.id;
        console.log("clicked:",id);
        window.location.href = "product.html?id=" + id;
      });
    });
  }
 
  const title = document.getElementById("title");
  if(title) {
    const id = new URLSearchParams(window.location.search).get("id");
    if(!id){
        title.innerText = "Product not found";
        return;
    }
    console.log("product id:" , id);
    fetch("https://dummyjson.com/products/" + id)
    .then(res =>{
       if(!res.ok) throw new Error("Invalid product");
       return res.json();
    })
    .then(data =>{
        title.innerText = data.title;
        document.getElementById("title").innerText = data.title;
        document.getElementById("img").src = data.thumbnail;
        document.getElementById("price").innerText = "₹ " + data.price;
        document.getElementById("category").innerText = data.category;
        document.getElementById("rate").innerText = data.rating;
        document.getElementById("count").innerText = data.stock;
        document.getElementById("type").innerText = data.brand;
        document.getElementById("discountPercentage").innerText = data.discountPercentage;
        // document.getElementById("description").innerText = data.description;
        document.getElementById("warranty").innerText = data.warrantyInformation;
        document.getElementById("shipping").innerText = data.shippingInformation;
        document.getElementById("ratt").innerText = data.reviews[0].rating;
        document.getElementById("comm").innerText = data.reviews[0].comment;
        document.getElementById("ratt2").innerText = data.reviews[1].rating;
        document.getElementById("comm2").innerText = data.reviews[1].comment;
        document.getElementById("ratt3").innerText = data.reviews[2].rating;
        document.getElementById("comm3").innerText = data.reviews[2].comment;
    })
    .catch(() =>{
        title.innerText = "Error loading product"
    });
     
  }

});
const images = [
  "/svg's & img's/img banner4.webp",
 "/svg's & img's/img banner 5.webp",
  "/svg's & img's/img banner 6.webp",
  "/svg's & img's/img banner7.webp" 
];

let currentIndex=0;
const banner = document.getElementById("banner");
const dots = document.querySelectorAll(".dot");


function showSlide(index) {
  currentIndex = index;
  banner.src = images[currentIndex];

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}
function goToSlide(index) {
  showSlide(index);
}
setInterval(nextSlide, 3000);










