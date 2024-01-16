/* eslint-disable @next/next/no-img-element */

import Button from './Button'

type Props = {
  children: any,
  feature: string,
  title: string,
  description: string,
}

export default function FeatureCard({ children, title, feature, description }: Readonly<Props>) {
  return (
    <li className="flex gap-8">
      <div className="w-1/2">
        <div className="flex gap-3 items-center">
          <div className="bg-primary/15 p-1 w-fit rounded-md">
            <img src={`/icon/${feature}.svg`} alt={feature} />
          </div>

          <p className="text-sm">{feature.charAt(0).toUpperCase() + feature.slice(1)}</p>
        </div>
        
        <div className="flex flex-col gap-6 mt-2">
          <h2 className="text-2xl font-medium">{title}</h2>
          <p className="text-zinc-600 text-justify">{description}</p>

          <div className="flex gap-3">
            <Button type="primary">Start a project</Button>
            <Button type="secondary">
              <img src="/icon/book.svg" alt="" /> See documentation
            </Button>
          </div>
        </div>
      </div>

      <div className="relative w-1/2">{children}</div>
    </li>
  )
}