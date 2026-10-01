```javascript
/* =====================================================
   AQUAAGRI.ID
   Product data + website functionality
   ===================================================== */


/* =====================================================
   DATA PRODUK
   =====================================================

   CARA MENAMBAH PRODUK:

   1. Copy salah satu object produk.
   2. Paste di bawahnya.
   3. Ganti:
      - nama
      - harga
      - gambar
      - deskripsi
      - kategori
      - linkAffiliate

   Kategori yang tersedia:

   "produk-olahan"
   "ikan-seafood"
   "pancing-umpan"
   "alat-budidaya"

   ===================================================== */


const products = [

    {
        nama: "Pelet Ikan Premium",
        harga: "Rp99.000",
        gambar: "assets/products/produk-1.jpg",
        deskripsi:
            "Pakan ikan untuk membantu memenuhi kebutuhan nutrisi selama pemeliharaan.",
        kategori: "alat-budidaya",
        linkAffiliate: "https://contoh-link-affiliate.com/produk-1"
    },


  {
    id: 1,
    nama: "Ikan Cakalang Suwir Rica Khas Manado",
    harga: "Rp48.000",
    gambar: "assets/products/Ikan-Cakalang-Suwir-Rica-Khas-Manado.jpg",
    deskripsi: "IKAN CAKALANG SUWIR RICA KHAS MANADO",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/BU9tio9xn"
  },

    {
    id: 1,
    nama: "Ikan Cakalang Suwir Rica Khas Manado",
    harga: "Rp48.000",
    gambar: "assets/products/Ikan-Cakalang-Suwir-Rica-Khas-Manado.jpg",
    deskripsi: "IKAN CAKALANG SUWIR RICA KHAS MANADO",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/BU9tio9xn"
  },


    {
        nama: "Ikan Bandeng Segar",
        harga: "Rp35.000",
        gambar: "assets/products/Ikan-bandeng.jpg",
        deskripsi:
            "Ikan bandeng segar untuk kebutuhan konsumsi sehari-hari.",
        kategori: "ikan-seafood",
        linkAffiliate: "https://s.shopee.co.id/8pm3thfTUL"
    },


    {
        nama: "Kerupuk Ikan",
        harga: "Rp20.000",
        gambar: "assets/products/produk-5.jpg",
        deskripsi:
            "Camilan olahan ikan dengan rasa gurih dan cocok untuk keluarga.",
        kategori: "produk-olahan",
        linkAffiliate: "https://contoh-link-affiliate.com/produk-5"
    },


    {
        nama: "Aerator Kolam Ikan",
        harga: "Rp125.000",
        gambar: "assets/products/produk-6.jpg",
        deskripsi:
            "Aerator untuk membantu menjaga suplai oksigen di dalam air.",
        kategori: "alat-budidaya",
        linkAffiliate: "https://contoh-link-affiliate.com/produk-6"
    }

];


/* =====================================================
   CATEGORY NAMES
   ===================================================== */

const categoryNames = {

    "all":
        "Semua Produk",

    "produk-olahan":
        "Produk Olahan Ikan",

    "ikan-seafood":
        "Ikan & Seafood Segar",

    "pancing-umpan":
        "Pancing & Umpan",

    "alat-budidaya":
        "Alat Budidaya"

};


/* =====================================================
   DOM ELEMENTS
   ===================================================== */

const homePage =
    document.getElementById("homePage");

const productPage =
    document.getElementById("productPage");

const productGrid =
    document.getElementById("productGrid");

const featuredProducts =
    document.getElementById("featuredProducts");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryLabel =
    document.getElementById("categoryLabel");

const productCount =
    document.getElementById("productCount");

const loading =
    document.getElementById("loading");

const emptyState =
    document.getElementById("emptyState");

const currentYear =
    document.getElementById("currentYear");


/* =====================================================
   CATEGORY LABEL
   ===================================================== */

function getCategoryName(category) {

    return categoryNames[category] || "Produk";

}


/* =====================================================
   PRODUCT IMAGE
   ===================================================== */

function createProductImage(product) {

    const imageHTML = `
        <img
            src="${product.gambar}"
            alt="${product.nama}"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
        >

        <div
            class="placeholder"
            style="display:none;"
            aria-label="Gambar produk tidak tersedia"
        >
            🐟
        </div>
    `;

    return imageHTML;

}


/* =====================================================
   PRODUCT CARD
   ===================================================== */

function createProductCard(product) {
    return `
        <article class="product-card">

            <div class="product-image">
                ${createProductImage(product)}
            </div>

            <div class="product-content">

                <span class="product-category">
                    ${getCategoryName(product.kategori)}
                </span>

                <h3 class="product-name">
                    ${product.nama}
                </h3>

                <p class="product-description">
                    ${product.deskripsi}
                </p>

                <div class="product-price">
                    ${product.harga}
                </div>

                <button
                    class="affiliate-btn"
                    onclick="openAffiliate('${escapeAttribute(product.linkAffiliate)}')"
                >
                    Lihat Produk →
                </button>

            </div>

        </article>
    `;
}


/* =====================================================
   SECURITY HELPER
   ===================================================== */

function escapeAttribute(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}


/* =====================================================
   OPEN AFFILIATE LINK
   ===================================================== */

function openAffiliate(url) {

    if (
        !url ||
        url.includes("contoh-link-affiliate.com")
    ) {
        alert(
            "Link affiliate produk ini belum diisi.\n\n" +
            "Silakan buka script.js lalu masukkan link affiliate marketplace."
        );

        return;
    }


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =====================================================
   SHOW HOME
   ===================================================== */

function showHome() {

    homePage.classList.remove("hidden");
    productPage.classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   SHOW CATEGORY
   ===================================================== */

function showCategory(category) {

    homePage.classList.add("hidden");
    productPage.classList.remove("hidden");


    categoryFilter.value = category;

    searchInput.value = "";


    categoryTitle.textContent =
        getCategoryName(category);

    categoryLabel.textContent =
        category === "all"
            ? "KATALOG PRODUK"
            : "KATEGORI";


    renderProducts();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   SHOW ALL PRODUCTS
   ===================================================== */

function showAllProducts() {

    showCategory("all");

}


/* =====================================================
   RENDER PRODUCTS
   ===================================================== */

function renderProducts() {

    loading.classList.remove("hidden");

    productGrid.innerHTML = "";

    emptyState.classList.add("hidden");


    /*
       Sedikit delay supaya loading state
       terasa smooth ketika katalog besar.
    */

    setTimeout(() => {

        const keyword =
            searchInput.value
                .toLowerCase()
                .trim();

        const selectedCategory =
            categoryFilter.value;


        const filteredProducts =
            products.filter(product => {

                const matchesSearch =
                    product.nama
                        .toLowerCase()
                        .includes(keyword) ||

                    product.deskripsi
                        .toLowerCase()
                        .includes(keyword);


                const matchesCategory =
                    selectedCategory === "all" ||

                    product.kategori ===
                    selectedCategory;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            });


        loading.classList.add("hidden");


        productCount.textContent =
            `${filteredProducts.length} produk`;


        if (filteredProducts.length === 0) {

            emptyState.classList.remove("hidden");

            return;

        }


        productGrid.innerHTML =
            filteredProducts
                .map(createProductCard)
                .join("");


    }, 250);

}


/* =====================================================
   RENDER FEATURED PRODUCTS
   ===================================================== */

function renderFeaturedProducts() {

    /*
       Menampilkan maksimal 4 produk
       di halaman utama.
    */

    const featured =
        products.slice(0, 4);


    featuredProducts.innerHTML =
        featured
            .map(createProductCard)
            .join("");

}


/* =====================================================
   SEARCH
   ===================================================== */

searchInput.addEventListener(
    "input",
    renderProducts
);


/* =====================================================
   CATEGORY FILTER
   ===================================================== */

categoryFilter.addEventListener(
    "change",
    function () {

        const category =
            this.value;


        categoryTitle.textContent =
            getCategoryName(category);


        categoryLabel.textContent =
            category === "all"
                ? "KATALOG PRODUK"
                : "KATEGORI";


        renderProducts();

    }
);


/* =====================================================
   SCROLL TO CATEGORY
   ===================================================== */

function scrollToCategories() {

    const section =
        document.getElementById("kategori");


    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.getElementById("navMenu");


mobileMenuBtn.addEventListener(
    "click",
    function () {

        const isOpen =
            navMenu.style.display === "flex";


        if (isOpen) {

            navMenu.style.display = "none";

        } else {

            navMenu.style.display = "flex";

            navMenu.style.position = "absolute";
            navMenu.style.top = "68px";
            navMenu.style.left = "0";
            navMenu.style.right = "0";

            navMenu.style.padding = "18px 24px";

            navMenu.style.background = "#ffffff";

            navMenu.style.borderBottom =
                "1px solid #e3ebe6";

            navMenu.style.flexDirection =
                "column";

        }

    }
);


/* =====================================================
   YEAR
   ===================================================== */

currentYear.textContent =
    new Date().getFullYear();


/* =====================================================
   INITIAL LOAD
   ===================================================== */

renderFeaturedProducts();


/*
   Tidak langsung membuka halaman katalog.
   User masuk dari halaman utama terlebih dahulu.
*/

productPage.classList.add("hidden");
```
