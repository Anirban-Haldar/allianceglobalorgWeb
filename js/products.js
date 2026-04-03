const products = {
  honey: [
    { name: "Multiflora Honey", img: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg" },
    { name: "Jamun Honey", img: "https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg" },
    { name: "Acacia Honey", img: "https://images.pexels.com/photos/3026807/pexels-photo-3026807.jpeg" },
    { name: "Sidr Honey", img: "https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg" },
    { name: "Eucalyptus Honey", img: "https://images.pexels.com/photos/3735206/pexels-photo-3735206.jpeg" }
  ],

  rice: [
    { name: "Sona Masoori Rice", img: "https://images.pexels.com/photos/4110253/pexels-photo-4110253.jpeg" },
    { name: "Ponni Rice", img: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg" },
    { name: "Swarna Rice", img: "https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg" },
    { name: "Sharbati Rice", img: "https://images.pexels.com/photos/4110260/pexels-photo-4110260.jpeg" },
    { name: "Joha Rice", img: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg" },
    { name: "Gobindobhog Rice", img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" }
  ],

  tea: [
    { name: "Assam Tea", img: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg" },
    { name: "Darjeeling Tea", img: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg" },
    { name: "Nilgiri Tea", img: "https://images.pexels.com/photos/5946970/pexels-photo-5946970.jpeg" },
    { name: "Kangra Tea", img: "https://images.pexels.com/photos/1493080/pexels-photo-1493080.jpeg" },
    { name: "Kashmiri Kahwa", img: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg" }
  ],

  spices: [
    { name: "Turmeric", img: "https://images.pexels.com/photos/4198714/pexels-photo-4198714.jpeg" },
    { name: "Cumin", img: "https://images.pexels.com/photos/4198709/pexels-photo-4198709.jpeg" },
    { name: "Coriander", img: "https://images.pexels.com/photos/4198707/pexels-photo-4198707.jpeg" },
    { name: "Cardamom", img: "https://images.pexels.com/photos/5946974/pexels-photo-5946974.jpeg" },
    { name: "Red Chilli", img: "https://images.pexels.com/photos/4198711/pexels-photo-4198711.jpeg" },
    { name: "Hing (Asafoetida)", img: "https://images.pexels.com/photos/161556/spice-condiment-food-nutrition-161556.jpeg" },
    { name: "Cloves", img: "https://images.pexels.com/photos/4198708/pexels-photo-4198708.jpeg" },
    { name: "Fenugreek", img: "https://images.pexels.com/photos/5946973/pexels-photo-5946973.jpeg" }
  ]
};

function openProductSection(type, el) {
    let section = document.getElementById("productDetails");
    
    // remove old section
    if (section) section.remove();

    // create new section
    section = document.createElement("div");
    section.id = "productDetails";
    section.className = "product-details-section show";

    section.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2>${type.toUpperCase()} PRODUCTS</h2>
            <button class="btn btn-danger" onclick="closeProductSection()">Close ✖</button>
        </div>
        <div class="row g-4" id="productGrid"></div>
    `;

    const grid = section.querySelector("#productGrid");

    products[type].forEach(p => {
        grid.innerHTML += `
            <div class="col-md-4">
                <div class="product-item" onclick="openImage('${p.img}')">
                    <img src="${p.img}" />
                    <div class="p-3 text-center ">
                        <h6>${p.name}</h6>
                    </div>
                </div>
            </div>
        `;
    });

    // ✅ FIX: insert AFTER entire category row (not inside it)
    document.getElementById("categoryRow").after(section);

    section.scrollIntoView({ behavior: "smooth" });
}


function closeProductSection() {
    document.getElementById("productDetails").classList.remove("show");
}

function openImage(src) {
    document.getElementById("modalImg").src = src;
    document.getElementById("imageModal").classList.add("show");
}

function closeImage() {
    document.getElementById("imageModal").classList.remove("show");
}