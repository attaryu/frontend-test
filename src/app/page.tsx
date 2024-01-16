  /* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import dynamic from 'next/dynamic';

import Button from '@/components/Button';
import CompanyCard from '@/components/CompanyCard';
import FeatureCard from '@/components/FeatureCard';
import ReviewerCard from '@/components/ReviewerCard';

const Table = dynamic(() => import('@/components/Table'), { ssr: false });

export default function Home() {
  const reviewer = [
    {
      id: 'user-1',
      username: '@DevProBella23',
      content: 'Thanks to AsyncBase, our development team has experienced a significant boost in productivity! Highly recommend this backend as a service platform. #AsyncBase #DeveloperTools',
    },
    {
      id: 'user-2',
      username: '@AppBuilderMax',
      content: 'Switching to AsyncBase was a game-changer for our app\'s performance. Seamless integration, robust features, and excellent support! #BackendAsAService',
    },
    {
      id: 'user-3',
      username: '@CodeWizardLena',
      content: 'AsyncBase simplified our backend operations, allowing us to focus more on our app\'s core functionalities. Amazing service and easy-to-use interface! #AsyncBase #TechSolutions',
    },
    {
      id: 'user-4',
      username: '@TechGuruDave87',
      content: 'Impressed by the scalability of AsyncBase! As our user base grew, AsyncBase effortlessly handled increased data load without compromising speed. #ScalableTech #BackendSolutions',
    },
    {
      id: 'user-5',
      username: '@BackendExpertKim',
      content: 'Kudos to AsyncBase for their reliability! Our app\'s uptime has been exceptional since migrating to this platform. No more downtime worries! #ReliableBackend',
    },
    {
      id: 'user-6',
      username: '@DayaSyncSara',
      content: 'The flexibility and customization options offered by AsyncBase are unparalleled. Tailoring our backend to fit our unique needs has never been easier! #Customization #BackendDevelopment',
    },
    {
      id: 'user-7',
      username: '@AppDevGenius123',
      content: 'AsyncBase\'s security measures are top-notch. Our data is well-protected, giving us peace of mind as we focus on creating a stellar user experience. #DataSecurity #AsyncBase',
    },
    {
      id: 'user-8',
      username: '@CloudDevEliot',
      content: 'From API integration to database management, AsyncBase has simplified our backend tasks. Seamless and efficient—our team couldn\'t be happier! #EfficientBackend #AsyncBase',
    },
  ]

  return (
    <main>
      <section className="px-24 pt-36 h-[120lvh] overflow-hidden relative">
        <Image src="/hero/bg.png" alt="" fill className="opacity-30 -z-10" />

        <div className="flex justify-between gap-36">
          <div>
            <p className="text-primary font-medium text-xs">Announcing asyncbase premium {'-->'}</p>
            <h1 className="text-5xl text-nowrap font-medium leading-[1.3] mt-3">
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
        <h1 className="text-center text-3xl font-medium mb-12">
          Trusted by{' '}
          <span className="text-primary">tech giants</span>{' '}
          no cap 🔥
        </h1>
        <CompanyCard />
      </section>

      <section className="p-24">
        <h1 className="text-center text-3xl font-medium mb-12">
          asyncbase offers a <span className="text-primary">range of features</span> 😎
        </h1>

        <div className="flex gap-10 mt-10">
          {/* pointer */}
          <div className="w-fit py-1">
            <div className="h-[76.8%] relative flex flex-col items-center w-fit">
              <div className="w-5 h-full flex flex-col items-center justify-between relative after:content-[''] after:absolute after:w-1 after:h-full after:bg-zinc-300">
                <div className="size-5 bg-zinc-300 rounded-full" />
                <div className="size-5 bg-zinc-300 rounded-full" />
                <div className="size-5 bg-zinc-300 rounded-full" />              
              </div>

              <div className="absolute top-0 left-0 h-full w-5 flex">
                <div className="size-5 bg-primary rounded-full sticky top-1/2 justify-center after:content-[''] after:absolute after:w-full after:h-full after:bg-primary/25 after:animate-ping after:rounded-full after:scale-150" />
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-28">
            <FeatureCard
              feature="database"
              title="Open Source Cloud SQL Database (without the hassle)"
              description="Every asyncbase project is a dedicated PostgreSQL database, trusted by millions of world leading engineers. PostgreSQL is one of the worlds most scalable and reliable databases."
            >
              <Table />

              <img src="/code/1.png" alt="" className="absolute -top-6 -right-8"/>
            </FeatureCard>

            <FeatureCard
              feature="authentication"
              title="Open Source Authentication (with tons of integrations)"
              description="Every asyncbase project comes with a complete user management system that works without any additional tools. Including PostgreSQL's policy engine, for fine-grained access rules."
            >
                {/* example form authentication */}
                <div className="bg-white border-[1px] border-zinc-300 p-5 w-[35%] flex flex-col items-center gap-4">
                  <div className="flex gap-3 items-center">
                    <img src="/logo/himit.png" alt="" className="size-7" />
                    <p>MIS Dynamic</p>
                  </div>

                  <button className="text-xs flex items-center gap-2 border-[1px] border-zinc-300 justify-center w-full py-1.5 rounded-lg">
                    <img src="/logo/google.svg" alt="" className="size-6" />
                    Login with Google
                  </button>

                  <div className="h-[1px] w-full bg-zinc-200" />

                  <div className="text-xs">
                    <div className="flex flex-col w-full gap-3">
                      <label>
                        Email
                        <input type="email" placeholder="Email" className="p-1 border-[1px] border-zinc-300 rounded-md px-2 py-1.5 w-full mt-1" />
                      </label>

                      <label>
                        Password
                        <input type="password" placeholder="Password" className="p-1 border-[1px] border-zinc-300 rounded-md px-2 py-1.5 w-full mt-1" />
                      </label>
                    </div>

                    <div className="mt-14">
                      <button className="py-2 w-full grid place-items-center h-fit rounded-md font-medium bg-primary text-white">
                        Login
                      </button>

                      <button className="w-full grid place-content-center py-1.5 mt-1">
                        Register
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 aspect-video border-zinc-300 absolute top-10 right-4 border-t-[1px] border-l-[1px]" />
                <div className="w-1/2 aspect-video border-zinc-300 absolute bottom-24 right-6 border-b-[1px] border-r-[1px]" />

                <img src="/code/2.png" alt="" className="absolute top-0 -right-10" />
                <img src="/code/3.png" alt="" className="absolute top-32 -right-4" />
                <img src="/code/4.png" alt="" className="absolute top-60 right-14" />
            </FeatureCard>

            <FeatureCard
              feature="functions"
              title="Customize and Extend Just Like Building Your Organic Backend"
              description="Deploy and scale serverless functions in secure, isolated runtime. Execute your code closest to your users with lightspeed deployment times and low latency."
            >
              <div className="flex w-[110%]">
                <div>
                  <img src="/code/5.png" alt="" />
                  <img src="/code/6.png" alt="" className="mt-7" />
                  <img src="/code/7.png" alt="" className="mt-7" />
                </div>
                <ol className="flex flex-col items-center justify-between py-6">
                  <li className="bg-white border-[1px] border-zinc-300 p-4 text-lg rounded-full">Write your function</li>
                  <div className="w-[2px] h-full bg-zinc-500" />
                  <li className="bg-white border-[1px] border-zinc-300 p-4 text-lg rounded-lg">Deploy</li>
                  <div className="w-[2px] h-full bg-zinc-500" />
                  <li className="bg-white border-[1px] border-zinc-300 p-4 text-lg rounded-full">Invoke!</li>
                </ol>
              </div>
            </FeatureCard>
          </ul>
        </div>
      </section>

      <section className="p-24 flex gap-10">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-3xl font-medium text-justify">
            Works seamlessly with <span className="text-primary">20+</span> wellknown frameworks 😱
          </h1>

          <p className="text-zinc-600 text-justify">
            Code the way you want, and be yourself. We support many SDKs making asyncbase flexible to your needs and ensuring you can code with the language you fancy the most.
          </p>

          <div className="flex gap-3">
            <Button type="primary">Explore all SDKs</Button>
            <Button type="secondary">
              <img src="/icon/book.svg" alt="" /> See documentation
            </Button>
          </div>
        </div>

        <div className="w-full grid grid-rows-3 grid-cols-1 gap-y-6 relative">
          <div className="bg-white border-[1px] border-zinc-300 flex gap-16 py-4 px-5 w-fit rounded-md justify-self-center">
            <img src="/tech/flutter.svg" alt="" />
            <img src="/tech/kotlin.svg" alt="" />
            <img src="/tech/swift.svg" alt="" />
            <img src="/tech/xamarin.svg" alt="" />
          </div>

          <div className="bg-white border-[1px] border-zinc-300 flex gap-16 py-4 px-5 w-fit rounded-md justify-self-end">
            <img src="/tech/next.svg" alt="" />
            <img src="/tech/angular.svg" alt="" />
            <img src="/tech/nuxt.svg" alt="" />
            <img src="/tech/svelte.svg" alt="" />
          </div>

          <div className="bg-white border-[1px] border-zinc-300 flex gap-16 py-4 px-5 w-fit rounded-md">
            <img src="/tech/electron.svg" alt="" />
            <img src="/tech/dotnet.svg" alt="" />
            <img src="/tech/haskell.svg" alt="" />
            <img src="/tech/python.svg" alt="" />
          </div>
          
          <img src="/rock.svg" alt="" className="absolute top-1/2 left-28 size-24 -z-10" />
          <img src="/torus_half.svg" alt="" className="absolute top-6 right-5 size-24 -z-10" />
        </div>
      </section>

      <section className="px-24 py-16">
        <div className="relative">
          <div className="w-full h-full top-0 left-0 bg-gradient-to-r from-transparent via-[#F6F6F6] to-transparent from-0% via-50% to-100% flex flex-col items-center gap-6 px-48 py-32 relative">
            <h1 className="text-3xl font-medium text-center">
              Start building in <span className="text-primary">seconds</span> ⚡
            </h1>

            <p className="text-zinc-600 text-center">
              Kickstart your next project with templates built by us and our community. <br />
              See your products grow and keep track of your projects progress on the asyncbase console and see them grow into products users love and use every day.
            </p>

            <div className="flex gap-3">
              <Button type="primary">View all examples</Button>
              <Button type="secondary">
                <img src="/icon/book.svg" alt="" /> Official Github Repository
              </Button>
            </div>

            <img src="/simulation/request.png" alt="" className="absolute w-44 border-[1px] border-zinc-300 rounded-md top-12 left-28" />
            <img src="/simulation/database.png" alt="" className="absolute w-44 border-[1px] border-zinc-300 rounded-md top-6 right-52" />
            <div className="bg-white border-[1px] border-zinc-300 flex items-center gap-4 py-4 px-5 w-fit rounded-md absolute left-0 bottom-32">
              <img src="/tech/next.svg" alt="" className="size-10" />
              <span className="text-xl font-bold">+</span>
              <img src="/tech/socketio.svg" alt="" className="size-10" />
              <span className="text-xl font-bold">+</span>
              <img src="/tech/asyncbase.svg" alt="" className="size-10" />
            </div>
            <img src="/simulation/auth.png" alt="" className="absolute w-44 border-[1px] border-zinc-300 rounded-md right-0 top-44" />
            <img src="/simulation/bandwith.png" alt="" className="absolute w-44 border-[1px] border-zinc-300 rounded-md left-64 bottom-0" />
            <div className="bg-white border-[1px] border-zinc-300 flex items-center gap-4 py-4 px-5 w-fit rounded-md absolute right-48 bottom-0">
              <img src="/tech/flutter.svg" alt="" className="size-10" />
              <span className="text-xl font-bold">+</span>
              <img src="/tech/asyncbase.svg" alt="" className="size-10" />
            </div>
          </div>

          {/* outer boder */}
          <div className="border-[1px] border-zinc-300 absolute top-0 left-0 w-full h-full rounded-full -z-10 py-12 px-24">
            {/* inner boder */}
            <div className="border-[1px] border-zinc-300 h-full rounded-full" />
          </div>
        </div>
      </section>

      <section className="p-24">
        <h1 className="text-3xl font-medium text-center">
          Let&apos;s read from our satisfied{' '}
          <span className="text-primary">#asyncomrades</span>{' '}
          🤝
        </h1>

        <ul className="grid grid-cols-4 gap-4 auto-rows-auto mt-10">
          {reviewer.map(({ id, username, content }) => (
            <ReviewerCard
              key={id}
              id={id}
              username={username}
              content={content}
            />
          ))}
        </ul>
      </section>

      <section className="p-24">
        <h1 className="text-center font-medium text-5xl">
          Develop like a whole{' '}
          <span className="text-primary">IT Department</span>{''}
          🤙
        </h1>

        <Button type="primary" className="m-auto mt-10">Start Your Project Now</Button>
      </section>
    </main>
  );
}
