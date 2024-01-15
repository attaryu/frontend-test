import Image from 'next/image';
import dynamic from 'next/dynamic';

import Button from '@/components/Button';
import CompanyCard from '@/components/CompanyCard';
import FeatureCard from '@/components/FeatureCard';

const Table = dynamic(() => import('@/components/Table'), { ssr: false });

export default function Home() {
  return (
    <main>
      <section className="px-24 pt-36 h-[120lvh] overflow-hidden relative">
        <Image src="/hero/bg.png" alt="" fill className="opacity-30 -z-10" />

        <div className="flex justify-between gap-36">
          <div>
            <p className="text-primary font-medium text-xs">Announcing asyncbase premium {'-->'}</p>
            <h1 className="text-5xl text-nowrap font-semibold leading-[1.3] mt-3">
              F*🤬K YOUR BACKEND<br/>
              LET US DO <span className="text-primary">THE WORK.</span>
            </h1>
          </div>

          <div>
            <p className="text-justify text-zinc-600">
              asyncbase&apos;s open-source platform lets you add Auth, DBs, Functions and Storage to your product and build any application at any scale, own your data, and use your preferred coding languages and tools
            </p>

            <div className="mt-5 flex gap-4">
              <Button type="primary">Get started</Button>
              <Button type="secondary">Sign In</Button>
            </div>
          </div>
        </div>

        <div className="w-[85%] h-[500px] m-auto relative mt-16 shadow-2xl">
          <Image src="/hero/preview.png" quality={80} alt="" fill className="object-top" />
        </div>
      </section>

      <section className="p-24">
        <h1 className="text-center text-3xl font-semibold mb-12">
          Trusted by{' '}
          <span className="text-primary">tech giants</span>{' '}
          no cap 🔥
        </h1>
        <CompanyCard />
      </section>

      <section className="p-24">
        <h1 className="text-center text-3xl font-semibold mb-12">
          asyncbase offers a <span className="text-primary">range of features</span> 😎
        </h1>

        <div className="flex mt-10">
          {/* pointer */}
          <div className="w-fit">
            <div>
              <div></div>
            </div>

            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div></div>
          </div>

          <ul className="flex flex-col gap-28">
            <FeatureCard
              feature="database"
              title="Open Source Cloud SQL Database (without the hassle)"
              description="Every asyncbase project is a dedicated PostgreSQL database, trusted by millions of world leading engineers. PostgreSQL is one of the worlds most scalable and reliable databases."
            >
              <Table />

              <div className="w-3/4 h-36 absolute -top-6 -right-24">
                <Image src="/code/1.png" alt="" fill />
              </div>
            </FeatureCard>

            <FeatureCard
              feature="authentication"
              title="Open Source Authentication (with tons of integrations)"
              description="Every asyncbase project comes with a complete user management system that works without any additional tools. Including PostgreSQL's policy engine, for fine-grained access rules."
            >
              <div>
                <div>
                  <div className="size-5">
                    <Image src="/logo/himit.png" fill alt="" className="object-contain" />
                  </div>

                  <p>MIS Dynamic</p>
                </div>

                <button>
                  <div className="size-5">
                    <Image src="/logo/google.svg" fill alt="" className="object-contain" />
                  </div>

                  Login with Google
                </button>

                <div />

                <div>
                  <div>
                    <label>
                      Email
                      <input type="email" />
                    </label>

                    <label>
                      Password
                      <input type="password" />
                    </label>
                  </div>

                  <div>
                    <button></button>
                    <button></button>
                  </div>
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              feature="functions"
              title="Customize and Extend Just Like Building Your Organic Backend"
              description="Deploy and scale serverless functions in secure, isolated runtime. Execute your code closest to your users with lightspeed deployment times and low latency."
            >
              <div>test</div>
            </FeatureCard>
          </ul>
        </div>
      </section>
    </main>
  )
}
