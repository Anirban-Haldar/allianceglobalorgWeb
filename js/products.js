const products = {
  honey: [
    { name: "Multiflora Honey", img: "../assets/images/honey/Multiflora.jpg" },
    { name: "Jamun Honey", img: "../assets/images/honey/jamun honey.png" },
    { name: "Acacia Honey", img: "../assets/images/honey/ACACIA.jpg" },
    { name: "Sidr Honey", img: "../assets/images/honey/sidrhoney.jpg" },
    { name: "Eucalyptus Honey", img: "../assets/images/honey/EUCALYPTUS HONEY.jpg" }
  ],

  rice: [
    { name: "Sona Masoori Rice", img: "../assets/images/rice/Sona Masoori.jpg" },
    { name: "Ponni Rice", img: "../assets/images/rice/ponni.jpg" },
    { name: "Swarna Rice", img: "../assets/images/rice/swarna rice.jpg" },
    { name: "Sharbati Rice", img: "../assets/images/rice/sharbati.jpg" },
    { name: "Joha Rice", img: "../assets/images/rice/joharice.jpg" },
    { name: "Gobindobhog Rice", img: "../assets/images/rice/Gobindobhog.jpg" }
  ],

  tea: [
    { name: "Assam Tea", img: "../assets/images/tea/AssamTee.jpg" },
    { name: "Darjeeling Tea", img: "../assets/images/tea/DARJEELING TEA.jpg" },
    { name: "Nilgiri Tea", img: "../assets/images/tea/Nilgiritea.jpg" },
    { name: "Kangra Tea", img: "../assets/images/tea/kangratea.jpg" },
    { name: "Kashmiri Kahwa", img: "../assets/images/tea/kashmiri kahwa.jpg" }
  ],

  spices: [
    { name: "Turmeric", img: "../assets/images/spices/turmaric.jpg" },
    { name: "Cumin", img: "../assets/images/spices/cumin.jpg" },
    { name: "Coriander", img: "../assets/images/spices/Coriander.jpeg" },
    { name: "Cardamom", img: "../assets/images/spices/cardamom.png" },
    { name: "Red Chilli", img: "../assets/images/spices/redchili.jpeg" },
    { name: "Hing (Asafoetida)", img: "../assets/images/spices/asafoetida.jpg" },
    { name: "Cloves", img: "../assets/images/spices/Cloves_Whole.jpg" },
    { name: "Fenugreek", img: "../assets/images/spices/fenugreek.jpeg" }
  ],

  towels: [
    { name: "Bath Towels", img: "../assets/images/towels/bath towels.jpeg" },
    { name: "Hand Towels", img: "../assets/images/towels/Hand Towels.jpg" },
    { name: "Face Towels", img: "../assets/images/towels/Face Towels.jpg" },
    { name: "Microfiber Towels", img: "../assets/images/towels/Microfiber Towels.jpg" },
    { name: "Bathrobes", img: "../assets/images/towels/Bathrobes.jpg" },
    { name: "Hair Towels / Turbans", img: "../assets/images/towels/Hair Towels__Turbans.jpg" }
  ],

  bedsheets: [
    { name: "Cotton", img: "../assets/images/beadsheet/Cotton.jpg" },
    { name: "Egyptian Cotton", img: "../assets/images/beadsheet/Egyptian Cotton.jpg" },
    { name: "Linen", img: "../assets/images/beadsheet/Linen.jpg" },
    { name: "Polyester & Blend", img: "../assets/images/beadsheet/Polyester & Blend.jpg" },
    { name: "Falnnel", img: "../assets/images/beadsheet/Falnnel.jpg" },
    { name: "Satin & Silk", img: "../assets/images/beadsheet/Satin & Silk.jpg" },
    { name: "Microfiber", img: "../assets/images/beadsheet/Microfiber.jpg" },
    { name: "Handloom & Khadi", img: "../assets/images/beadsheet/Handloom & Khadi.jpg" }
  ],
};

const pdfMap = {
    honey: "../assets/doc/HONEY CATALOGUE.pdf",
    rice: "",
    tea: "../assets/doc/TEA CATALOGUE.pdf",
    spices: "../assets/doc/SPICES CATALOGUE.pdf",
    towels: "",
    bedsheets: ""
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
            <a class="btn-glow-sm" href="javascript:void(0)" onclick="openCatalogue('${type}')"><i class="fas fa-file-pdf me-2"></i>Product Catalogue</a>
            <button class="btn btn-danger btn-glow-danger-sm" onclick="closeProductSection()">Close ✖</button>
        </div>
        <div>
            <div id="customToast" class="custom-toast">No PDF available</div>
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

    // ✅ insert AFTER parent row of clicked card (not inside it)
    const parentRow = el.closest(".category-row");
    parentRow.after(section);

    section.scrollIntoView({ behavior: "smooth" });
}

function openCatalogue(type) {
    const pdf = pdfMap[type];

    if (pdf) {
        window.open(pdf, "_blank");
    } else {
        showToast("!! No catalogue available for this product.");
    }
}

function showToast(message) {
    const toast = document.getElementById("customToast");
    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
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