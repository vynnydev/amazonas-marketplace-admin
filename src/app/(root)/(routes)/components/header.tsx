import Image from 'next/image'

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              className="mr-3 h-6 sm:h-9"
              alt="Amazonas Marketplace"
              src="/images/amazonas.png"
              width={37}
              height={40}
            />
          </a>
          <a className="text-sm font-semibold leading-6 text-slate-200 mt-1">
            Amazonas
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/market-sign-in"
            className="text-sm font-semibold leading-6 text-slate-200"
          >
            Admin Marketplace
          </a>
          <a
            href="/sign-in"
            className="text-sm font-semibold leading-6 text-slate-200"
          >
            Admin Store
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-slate-200"
          >
            Company
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/register-master-admin"
            className="text-sm font-semibold leading-6 text-slate-200"
          >
            Master <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
