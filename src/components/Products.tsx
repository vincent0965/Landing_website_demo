const products = [
  { name: "商品 A", price: "¥1,000", img: "https://via.placeholder.com/200" },
  { name: "商品 B", price: "¥2,000", img: "https://via.placeholder.com/200" },
  { name: "商品 C", price: "¥3,000", img: "https://via.placeholder.com/200" },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">熱門商品</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="border rounded-xl shadow hover:shadow-lg transition p-4">
              <img src={p.img} alt={p.name} className="mx-auto rounded-lg" />
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="text-blue-600 font-bold mt-2">{p.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                加入購物車
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
