/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-24 pt-16 pb-8">
      <div className="flex justify-between">
        <div className="w-1/2">
          <figure className="flex gap-4">
            <div className="bg-white rounded-md size-9">
              <img src="/tech/asyncbase.svg" alt="" className="w-full h-full" />
            </div>

            <figcaption className="text-3xl font-medium">asyncbase</figcaption>
          </figure>

          <div className="flex gap-5 mt-6 items-center">
            <a href="#">
              <img src="/logo/twitter_white.svg" alt="" />
            </a>
            <a href="#">
              <img src="/logo/github.svg" alt="" />
            </a>
            <a href="#">
              <img src="/logo/discord.svg" alt="" />
            </a>
            <a href="#">
              <img src="/logo/youtube.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div>
            <p className="font-medium">Products</p>

            <ul className="mt-6 flex flex-col gap-3">
              <Link>Database</Link>
              <Link>Authentication</Link>
              <Link>Function</Link>
              <Link>Dashboard</Link>
              <Link>Realtime</Link>
              <Link>Storage</Link>
              <Link>Pricing</Link>
            </ul>
          </div>

          <div>
            <p className="font-medium">Resources</p>

            <ul className="mt-6 flex flex-col gap-3">
              <Link>Support</Link>
              <Link>System Status</Link>
              <Link>Become a Patron</Link>
              <Link>Integrations</Link>
              <Link>Experts</Link>
              <Link>Infrastructures</Link>
              <Link>Security</Link>
              <Link>Brand</Link>
            </ul>
          </div>

          <div>
            <p className="font-medium">Developers</p>

            <ul className="mt-6 flex flex-col gap-3">
              <Link>Documentation</Link>
              <Link>Changelog</Link>
              <Link>Contribute</Link>
              <Link>Open Source</Link>
              <Link>#asyncomrades</Link>
              <Link>DevTo</Link>
              <Link>RSS</Link>
            </ul>
          </div>

          <div>
            <p className="font-medium">Company</p>

            <ul className="mt-6 flex flex-col gap-3">
              <Link>Blog</Link>
              <Link>Customer Service</Link>
              <Link>Careers</Link>
              <Link>Company Profile</Link>
              <Link>Headquarter</Link>
              <Link>Term of Service</Link>
              <Link>Privacy Policy</Link>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="text-center text-xs mt-20 font-light">&#169; asyncbase by E-Code HIMIT PENS</p>
    </footer>
  )
}

function Link({ children }: { children: any }) {
  return <li className="font-light"><a href="#">{children}</a></li>;
}
