const blogs = [
  {
    id: 1,
    category: "Restaurant Technology",
    title: "How QR Ordering Is Transforming Modern Restaurants",
    description:
      "Discover how QR-based ordering systems are helping restaurants improve customer experience, reduce waiting time, and increase operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    date: "May 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Restaurant Management",
    title: "Top 7 Ways To Improve Restaurant Operations",
    description:
      "Learn practical strategies to optimize billing, kitchen workflow, customer handling, and inventory management in your restaurant.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    date: "May 2026",
    readTime: "7 min read",
  },
  {
    id: 3,
    category: "Business Growth",
    title: "Why Cloud Kitchens Need Smart Restaurant Software",
    description:
      "Cloud kitchens are growing rapidly. Here’s how smart restaurant platforms help manage orders, analytics, and customer experience efficiently.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    date: "May 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    category: "Payments",
    title: "UPI Payments & Digital Billing For Restaurants",
    description:
      "Explore how digital payments and automated billing systems are making restaurant transactions faster and more secure.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    date: "May 2026",
    readTime: "4 min read",
  },
  {
    id: 5,
    category: "Analytics",
    title: "How Data Analytics Helps Restaurants Increase Profit",
    description:
      "Restaurant analytics can help owners understand customer behavior, best-selling items, peak hours, and revenue trends.",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop",
    date: "May 2026",
    readTime: "8 min read",
  },
  {
    id: 6,
    category: "Restaurant Automation",
    title: "The Future Of AI In Restaurant Industry",
    description:
      "Artificial intelligence is changing restaurant management with smart recommendations, automation, predictive analytics, and customer personalization.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    date: "May 2026",
    readTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
              RestaurantOS Blog
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Insights For
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Modern Restaurants
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              Explore articles about restaurant technology, QR ordering,
              automation, digital payments, customer experience, and restaurant
              business growth.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED BLOG */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[40px] border border-orange-100 bg-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-full min-h-[350px] overflow-hidden">
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="mb-4 inline-flex w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                  Featured Article
                </div>

                <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                  {blogs[0].category}
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight text-gray-900">
                  {blogs[0].title}
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  {blogs[0].description}
                </p>

                <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                  <span>{blogs[0].date}</span>
                  <span>•</span>
                  <span>{blogs[0].readTime}</span>
                </div>

                <button className="mt-10 w-fit rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                Latest Articles
              </div>

              <h2 className="text-4xl font-black text-gray-900">
                Explore Our Blog
              </h2>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white px-5 py-3 text-sm font-medium text-gray-600 shadow-sm">
              New articles every week 🚀
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group overflow-hidden rounded-[32px] border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-orange-600 backdrop-blur-md">
                    {blog.category}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black leading-tight text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
                    {blog.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {blog.description}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition-all duration-300 group-hover:gap-3">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="pb-24 pt-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-16 text-center text-white shadow-2xl sm:px-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-4xl font-black sm:text-5xl">
                Stay Updated With Restaurant Trends
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-orange-50">
                Get the latest insights, restaurant growth strategies, and
                technology updates directly in your inbox.
              </p>

              <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-14 flex-1 rounded-2xl border border-white/20 bg-white px-5 text-gray-900 outline-none"
                />

                <button className="h-14 rounded-2xl bg-gray-900 px-8 text-lg font-bold text-white transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
