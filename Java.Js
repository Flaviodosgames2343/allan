// Product Database
const products = [
  // Capas
  {
    id: 1,
    name: "Capa Silicone Premium",
    category: "capas",
    model: "15",
    color: "preto",
    price: 49.9,
    oldPrice: 89.9,
    freeShipping: true,
    popular: 100,
    promo: true,
  },
  {
    id: 2,
    name: "Capa Transparente Anti-Queda",
    category: "capas",
    model: "15",
    color: "transparente",
    price: 39.9,
    oldPrice: 69.9,
    freeShipping: true,
    popular: 95,
  },
  {
    id: 3,
    name: "Capa Leather Elegante",
    category: "capas",
    model: "14",
    color: "preto",
    price: 79.9,
    oldPrice: 129.9,
    freeShipping: true,
    popular: 85,
  },
  {
    id: 4,
    name: "Capa Fashion Rosa",
    category: "capas",
    model: "14",
    color: "rosa",
    price: 44.9,
    oldPrice: 79.9,
    freeShipping: true,
    popular: 80,
    promo: true,
  },
  {
    id: 5,
    name: "Capa Ultra Slim",
    category: "capas",
    model: "13",
    color: "branco",
    price: 34.9,
    oldPrice: 59.9,
    freeShipping: false,
    popular: 75,
  },
  {
    id: 6,
    name: "Capa Roxo Vibrante",
    category: "capas",
    model: "13",
    color: "roxo",
    price: 49.9,
    oldPrice: 84.9,
    freeShipping: true,
    popular: 70,
  },
  {
    id: 7,
    name: "Capa Minimalista",
    category: "capas",
    model: "12",
    color: "branco",
    price: 29.9,
    oldPrice: 54.9,
    freeShipping: false,
    popular: 65,
  },
  {
    id: 8,
    name: "Capa Cristal Clear",
    category: "capas",
    model: "12",
    color: "transparente",
    price: 34.9,
    oldPrice: 59.9,
    freeShipping: true,
    popular: 60,
  },
  {
    id: 9,
    name: "Capa Night Black",
    category: "capas",
    model: "11",
    color: "preto",
    price: 24.9,
    oldPrice: 49.9,
    freeShipping: false,
    popular: 55,
  },
  {
    id: 10,
    name: "Capa Soft Touch",
    category: "capas",
    model: "11",
    color: "rosa",
    price: 29.9,
    oldPrice: 54.9,
    freeShipping: true,
    popular: 50,
  },

  // Fones
  {
    id: 11,
    name: "AirPods Pro Style",
    category: "fones",
    model: "universal",
    color: "branco",
    price: 149.9,
    oldPrice: 249.9,
    freeShipping: true,
    popular: 98,
    promo: true,
  },
  {
    id: 12,
    name: "Fone Bluetooth Premium",
    category: "fones",
    model: "universal",
    color: "preto",
    price: 129.9,
    oldPrice: 199.9,
    freeShipping: true,
    popular: 92,
  },
  {
    id: 13,
    name: "Fone Esportivo Resistente",
    category: "fones",
    model: "universal",
    color: "preto",
    price: 89.9,
    oldPrice: 149.9,
    freeShipping: true,
    popular: 88,
  },
  {
    id: 14,
    name: "Fone In-Ear Roxo",
    category: "fones",
    model: "universal",
    color: "roxo",
    price: 79.9,
    oldPrice: 129.9,
    freeShipping: true,
    popular: 83,
    promo: true,
  },
  {
    id: 15,
    name: "Fone TWS Básico",
    category: "fones",
    model: "universal",
    color: "branco",
    price: 59.9,
    oldPrice: 99.9,
    freeShipping: false,
    popular: 77,
  },
  {
    id: 16,
    name: "Fone Premium Rosa",
    category: "fones",
    model: "universal",
    color: "rosa",
    price: 119.9,
    oldPrice: 189.9,
    freeShipping: true,
    popular: 72,
  },
]

let filteredProducts = [...products]
let cartCount = 0

// DOM Elements
const productsGrid = document.getElementById("productsGrid")
const searchInput = document.getElementById("searchInput")
const categoryFilters = document.querySelectorAll('input[name="category"]')
const modelFilters = document.querySelectorAll(".model-filter")
const colorFilters = document.querySelectorAll(".color-filter")
const priceRange = document.getElementById("priceRange")
const maxPriceDisplay = document.getElementById("maxPrice")
const freeShippingFilter = document.getElementById("freeShipping")
const sortSelect = document.getElementById("sortSelect")
const cartBtn = document.querySelector(".cart-btn")

// Generate Product SVG based on category and color
function generateProductSVG(product) {
  const colorMap = {
    preto: "#1f2937",
    branco: "#ffffff",
    rosa: "#ec4899",
    roxo: "#9147ff",
    transparente: "#f3f4f6",
  }

  const fillColor = colorMap[product.color] || "#1f6feb"
  const strokeColor = product.color === "transparente" ? "#1f6feb" : fillColor

  if (product.category === "capas") {
    return `
            <svg viewBox="0 0 200 280" fill="none">
                <rect x="20" y="10" width="160" height="260" rx="30" fill="${fillColor}" stroke="${strokeColor}" stroke-width="3"/>
                <rect x="30" y="20" width="140" height="240" rx="25" fill="${product.color === "transparente" ? "rgba(255,255,255,0.5)" : "white"}" opacity="0.2"/>
                <rect x="70" y="35" width="60" height="6" rx="3" fill="white" opacity="0.4"/>
                <circle cx="100" cy="255" r="15" fill="white" opacity="0.3"/>
            </svg>
        `
  } else {
    return `
            <svg viewBox="0 0 200 200" fill="none">
                <ellipse cx="60" cy="100" rx="35" ry="45" fill="${fillColor}" stroke="${strokeColor}" stroke-width="3"/>
                <ellipse cx="140" cy="100" rx="35" ry="45" fill="${fillColor}" stroke="${strokeColor}" stroke-width="3"/>
                <path d="M 95 100 Q 100 80 105 100" stroke="${strokeColor}" stroke-width="3" fill="none"/>
                <circle cx="60" cy="100" r="15" fill="white" opacity="0.3"/>
                <circle cx="140" cy="100" r="15" fill="white" opacity="0.3"/>
            </svg>
        `
  }
}

// Render Products
function renderProducts() {
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 64px 0; color: #6b7280;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 16px;">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <h3 style="font-size: 20px; margin-bottom: 8px;">Nenhum produto encontrado</h3>
                <p>Tente ajustar os filtros ou buscar por outro termo</p>
            </div>
        `
    return
  }

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                ${generateProductSVG(product)}
                ${product.freeShipping ? '<span class="free-shipping-badge">Frete grátis</span>' : ""}
                ${product.promo ? '<span class="promo-badge">Promoção</span>' : ""}
            </div>
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                <p class="product-specs">${product.category === "capas" ? `iPhone ${product.model}` : "Bluetooth"} • ${product.color.charAt(0).toUpperCase() + product.color.slice(1)}</p>
                <div class="product-price">
                    <span class="current-price">R$ ${product.price.toFixed(2)}</span>
                    <span class="old-price">R$ ${product.oldPrice.toFixed(2)}</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">Adicionar</button>
                    <button class="btn btn-secondary view-details" data-id="${product.id}">Detalhes</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  // Add event listeners
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      addToCart(Number.parseInt(btn.dataset.id))
    })
  })

  document.querySelectorAll(".view-details").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      viewDetails(Number.parseInt(btn.dataset.id))
    })
  })
}

// Filter Products
function applyFilters() {
  filteredProducts = [...products]

  // Category filter
  const selectedCategory = document.querySelector('input[name="category"]:checked').value
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory)
  }

  // Model filter
  const selectedModels = Array.from(modelFilters)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value)
  if (selectedModels.length > 0) {
    filteredProducts = filteredProducts.filter((p) => selectedModels.includes(p.model) || p.model === "universal")
  }

  // Color filter
  const selectedColors = Array.from(colorFilters)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value)
  if (selectedColors.length > 0) {
    filteredProducts = filteredProducts.filter((p) => selectedColors.includes(p.color))
  }

  // Price filter
  const maxPrice = Number.parseInt(priceRange.value)
  filteredProducts = filteredProducts.filter((p) => p.price <= maxPrice)

  // Free shipping filter
  if (freeShippingFilter.checked) {
    filteredProducts = filteredProducts.filter((p) => p.freeShipping)
  }

  // Search filter
  const searchTerm = searchInput.value.toLowerCase()
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.color.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm),
    )
  }

  // Sort
  const sortValue = sortSelect.value
  if (sortValue === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortValue === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else {
    filteredProducts.sort((a, b) => b.popular - a.popular)
  }

  renderProducts()
}

// Add to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  cartCount++
  document.querySelector(".cart-count").textContent = cartCount

  alert(
    `✅ ${product.name} adicionado ao carrinho!\n\nPreço: R$ ${product.price.toFixed(2)}\n\nContinue comprando ou finalize sua compra.`,
  )
}

// View Details
function viewDetails(productId) {
  const product = products.find((p) => p.id === productId)
  const installments = (product.price / 10).toFixed(2)

  alert(`
🛍️ ${product.name}

📱 Especificações:
• Categoria: ${product.category === "capas" ? "Capa de iPhone" : "Fone Bluetooth"}
• ${product.category === "capas" ? `Modelo: iPhone ${product.model}` : "Compatibilidade: Universal"}
• Cor: ${product.color.charAt(0).toUpperCase() + product.color.slice(1)}
• ${product.freeShipping ? "✅ Frete grátis" : "📦 Frete calculado no checkout"}

💰 Preço: R$ ${product.price.toFixed(2)}
De: R$ ${product.oldPrice.toFixed(2)}

💳 Parcelamento:
Até 10x de R$ ${installments} sem juros

🛡️ Garantia: 6 meses
📦 Entrega: 5-10 dias úteis
    `)
}

// Event Listeners
categoryFilters.forEach((filter) => {
  filter.addEventListener("change", applyFilters)
})

modelFilters.forEach((filter) => {
  filter.addEventListener("change", applyFilters)
})

colorFilters.forEach((filter) => {
  filter.addEventListener("change", applyFilters)
})

priceRange.addEventListener("input", (e) => {
  maxPriceDisplay.textContent = `R$ ${e.target.value}`
  applyFilters()
})

freeShippingFilter.addEventListener("change", applyFilters)

searchInput.addEventListener("input", applyFilters)

sortSelect.addEventListener("change", applyFilters)

// Initialize
renderProducts()
