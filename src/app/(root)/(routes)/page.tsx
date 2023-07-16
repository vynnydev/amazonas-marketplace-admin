import Link from 'next/link'
import Header from './components/header'

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="relative isolate h-full overflow-hidden pt-14">
        <video
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
          className="fixed inset-0 -z-10 h-full w-full object-cover"
        >
          <source src="/videos/future-store.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-black/70 bg-blend-multiply"
        />

        <Header />

        <div className="mx-auto max-w-2xl py-32 px-4 sm:py-48 md:px-6 lg:py-56 xl:px-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-stone-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{' '}
              <Link href="#" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Amazonas Market Administrator
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              At Amazonas, you sell and buy in an easy and pleasant way.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                Create Store
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
