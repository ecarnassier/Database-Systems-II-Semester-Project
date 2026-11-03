// ============================================================
// HW1 – MongoDB – Online Clothing Store
// Data creation
// ============================================================

// Clean start: remove the collection if it already exists
db.products.drop();

// Modeling decisions:
// - All products are stored in one collection "products".
//   The field "type" distinguishes three subtypes: "tshirt", "jeans", "shoes".
//   All subtypes share common fields (name, price, category, brand, variants)
//   and each subtype has its own specific fields.
// - "brand" is a nested object (name + country of origin).
// - "variants" is an embedded array of objects (size, color, stock).
//   It is embedded because the number of variants per product is small
//   and bounded, and variants are always read together with the product.

db.products.insertMany([

    // ---------- T-SHIRTS ----------
    {
        _id: "p01",
        type: "tshirt",
        name: "Basic Tee",
        category: "T-Shirts",
        price: 499,
        brand: { name: "Nordwear", country: "Sweden" },
        sleeveLength: "short",
        neckline: "crew",
        variants: [
            { size: "M", color: "black", stock: 5 },
            { size: "L", color: "white", stock: 2 }
        ]
    },
    {
        _id: "p02",
        type: "tshirt",
        name: "Oversized Tee",
        category: "T-Shirts",
        price: 699,
        brand: { name: "Urbanfox", country: "Czech Republic" },
        sleeveLength: "short",
        neckline: "crew",
        variants: [
            { size: "M", color: "white", stock: 3 },
            { size: "L", color: "black", stock: 4 }
        ]
    },
    {
        _id: "p03",
        type: "tshirt",
        name: "Linen Tee",
        category: "T-Shirts",
        price: 1190,
        brand: { name: "Denimo", country: "Italy" },
        sleeveLength: "short",
        neckline: "v-neck",
        variants: [
            { size: "M", color: "black", stock: 0 },
            { size: "S", color: "beige", stock: 6 }
        ]
    },
    {
        _id: "p04",
        type: "tshirt",
        name: "Longsleeve Tee",
        category: "T-Shirts",
        price: 899,
        brand: { name: "Nordwear", country: "Sweden" },
        sleeveLength: "long",
        neckline: "crew",
        variants: [
            { size: "M", color: "grey", stock: 2 },
            { size: "XL", color: "black", stock: 1 }
        ]
    },

    // ---------- JEANS ----------
    {
        _id: "p05",
        type: "jeans",
        name: "Slim Fit Jeans",
        category: "Jeans",
        price: 1490,
        brand: { name: "Denimo", country: "Italy" },
        fit: "slim",
        rise: "mid",
        variants: [
            { size: "30", color: "blue", stock: 4 },
            { size: "32", color: "black", stock: 0 }
        ]
    },
    {
        _id: "p06",
        type: "jeans",
        name: "Regular Jeans",
        category: "Jeans",
        price: 790,
        brand: { name: "Pacific Thread", country: "USA" },
        fit: "regular",
        rise: "mid",
        variants: [
            { size: "32", color: "blue", stock: 6 },
            { size: "34", color: "blue", stock: 2 }
        ]
    },
    {
        _id: "p07",
        type: "jeans",
        name: "Skinny Black Jeans",
        category: "Jeans",
        price: 1690,
        brand: { name: "Urbanfox", country: "Czech Republic" },
        fit: "slim",
        rise: "high",
        variants: [
            { size: "28", color: "black", stock: 3 }
        ]
    },
    {
        _id: "p08",
        type: "jeans",
        name: "Relaxed Jeans",
        category: "Jeans",
        price: 2390,
        brand: { name: "Denimo", country: "Italy" },
        fit: "relaxed",
        rise: "low",
        variants: [
            { size: "32", color: "light blue", stock: 5 }
        ]
    },

    // ---------- SHOES ----------
    {
        _id: "p09",
        type: "shoes",
        name: "Urban Sneaker",
        category: "Sneakers",
        price: 2490,
        brand: { name: "Stepline", country: "Italy" },
        soleMaterial: "rubber",
        heelHeightCm: 3,
        variants: [
            { size: "40", color: "white", stock: 4 },
            { size: "42", color: "black", stock: 0 }
        ]
    },
    {
        _id: "p10",
        type: "shoes",
        name: "Leather Boot",
        category: "Boots",
        price: 3990,
        brand: { name: "Stepline", country: "Italy" },
        soleMaterial: "leather",
        heelHeightCm: 5,
        variants: [
            { size: "39", color: "brown", stock: 2 },
            { size: "41", color: "black", stock: 1 }
        ]
    },
    {
        _id: "p11",
        type: "shoes",
        name: "Canvas Sneaker",
        category: "Sneakers",
        price: 1290,
        brand: { name: "Pacific Thread", country: "USA" },
        soleMaterial: "rubber",
        heelHeightCm: 2,
        variants: [
            { size: "38", color: "white", stock: 0 },
            { size: "41", color: "red", stock: 7 }
        ]
    },
    {
        _id: "p12",
        type: "shoes",
        name: "Running Shoe",
        category: "Sneakers",
        price: 2890,
        brand: { name: "Nordwear", country: "Sweden" },
        soleMaterial: "foam",
        heelHeightCm: 4,
        variants: [
            { size: "42", color: "blue", stock: 3 },
            { size: "43", color: "black", stock: 5 }
        ]
    },
    {
        _id: "p13",
        type: "tshirt",
        name: "Graphic Tee",
        category: "T-Shirts",
        price: 599,
        brand: { name: "Urbanfox", country: "Czech Republic" },
        sleeveLength: "short",
        neckline: "crew",
        variants: [
            { size: "M", color: "white", stock: 0 },
            { size: "L", color: "black", stock: 0 }
        ]
    },
    {
        _id: "p14",
        type: "jeans",
        name: "Wide Leg Jeans",
        category: "Jeans",
        price: 1890,
        brand: { name: "Pacific Thread", country: "USA" },
        fit: "wide",
        rise: "high",
        variants: [
            { size: "28", color: "blue", stock: 2 },
            { size: "30", color: "blue", stock: 4 },
            { size: "32", color: "black", stock: 1 }
        ]
    },
    {
        _id: "p15",
        type: "shoes",
        name: "Chelsea Boot",
        category: "Boots",
        price: 3490,
        brand: { name: "Nordwear", country: "Sweden" },
        soleMaterial: "rubber",
        heelHeightCm: 4,
        variants: [
            { size: "38", color: "black", stock: 2 },
            { size: "40", color: "black", stock: 3 },
            { size: "42", color: "brown", stock: 0 }
        ]
    }
]);

// ============================================================
// Q1 – Subtype-specific property
// Finds T-shirts (the only subtype that has neckline and sleeveLength)
// that have a crew neckline AND short sleeves.
// Returns full product documents.
// ============================================================
db.products.find({
    neckline: "crew",
    sleeveLength: "short"
});

// ============================================================
// Q2 – Nested field
// Finds products whose brand comes from Italy (nested field brand.country)
// AND whose price is lower than 2000 CZK.
// Returns full product documents sorted by price ascending.
// ============================================================
db.products.find({
    "brand.country": "Italy",
    price: { $lt: 2000 }
}).sort({ price: 1 });

// ============================================================
// Q3 – Embedded array, several conditions on the same element
// Finds products that have at least one variant which is black
// AND has more than 0 pieces in stock – both conditions must hold
// for the same variant. Products that have a black variant with zero
// stock and a different-colour variant in stock are NOT returned.
// Returns only product name, brand name and the variants array (no _id).
// ============================================================
db.products.find(
    { variants: { $elemMatch: { color: "black", stock: { $gt: 0 } } } },
    { _id: 0, name: 1, "brand.name": 1, variants: 1 }
);

// ============================================================
// Q4 – Projection, sorting and limit
// Finds products with a price between 1000 and 3000 CZK (inclusive),
// sorts them by price from the most expensive, and returns only
// the 3 most expensive ones. For each product returns only
// name, brand name and price (no _id).
// ============================================================
db.products.find(
    { price: { $gte: 1000, $lte: 3000 } },
    { _id: 0, name: 1, "brand.name": 1, price: 1 }
).sort({ price: -1 }).limit(3);

// ============================================================
// Q5 – Domain query: sold-out products
// Finds products in which NO variant has a stock greater than 0,
// i.e. products that are completely sold out in all sizes and colours.
// Returns product name, category and variants (no _id).
// ============================================================
db.products.find(
    { variants: { $not: { $elemMatch: { stock: { $gt: 0 } } } } },
    { _id: 0, name: 1, category: 1, variants: 1 }
);

// ============================================================
// Q6 – Domain query: products with a wide range of variants
// Finds products that are offered in at least 3 variants
// (size/colour combinations), regardless of stock.
// Returns product name, type and the number of variants
// as a calculated field variantCount (no _id).
// ============================================================
db.products.find(
    { $expr: { $gte: [{ $size: "$variants" }, 3] } },
    { _id: 0, name: 1, type: 1, variantCount: { $size: "$variants" } }
);

// ============================================================
// Q7 – Aggregation pipeline
// Considers only products that have at least one variant in stock.
// Groups them by the country of the brand and for each country calculates:
//   productCount – number of products,
//   avgPrice     – average product price rounded to whole CZK,
//   totalStock   – total number of pieces in stock over all variants.
// Results are sorted by avgPrice in descending order.
// ============================================================
db.products.aggregate([
    { $match: { "variants.stock": { $gt: 0 } } },
    { $group: {
            _id: "$brand.country",
            productCount: { $sum: 1 },
            avgPrice: { $avg: "$price" },
            totalStock: { $sum: { $sum: "$variants.stock" } }
        } },
    { $project: {
            _id: 0,
            country: "$_id",
            productCount: 1,
            avgPrice: { $round: ["$avgPrice", 0] },
            totalStock: 1
        } },
    { $sort: { avgPrice: -1 } }
]);

// ============================================================
// U1 – Update of a specific element inside an embedded array
// In product p06, sets the stock of the variant with size "32"
// and colour "blue" to 10. Only this one array element is changed;
// the rest of the document and the other variants stay untouched.
// ============================================================
db.products.updateOne(
    { _id: "p06" },
    { $set: { "variants.$[v].stock": NumberInt(10) } },
    { arrayFilters: [{ "v.size": "32", "v.color": "blue" }] }
);

// ============================================================
// Modelling decision – potentially growing relationship
// Variants are EMBEDDED in the product: their number is small and
// bounded (sizes x colours), they are always read together with the
// product and they are updated individually via arrayFilters.
// Customer reviews would be stored in a SEPARATE collection "reviews"
// with a reference productId: their number grows without limit over time,
// embedding them would make product documents grow unboundedly
// (16 MB document limit) and slow down every catalogue read.
// ============================================================