const features = [
  { title: "快速開發", desc: "使用 React + Tailwind，快速構建現代化網站" },
  { title: "高度擴充", desc: "未來可整合 AI 模型與更多互動功能" },
  { title: "RWD 響應式", desc: "完美支援手機、平板與桌機瀏覽" },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">網站特色</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">{f.title}</h3>
              <p className="mt-4 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
