/* eslint-disable @next/next/no-img-element */

type Props = {
  id: string,
  username: string,
  content: string,
}

export default function ReviewerCard({ id, username, content}: Readonly<Props>) {
  return (
    <li className="border-[1px] border-zinc-300 rounded-md p-4 bg-white">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="size-10 p-[2px] border-[1px] border-primary rounded-full relative after:content-[''] after:size-10 after:absolute after:top-0 after:left-0 after:bg-gradient-to-br after:from-transparent after:to-white after:to-80% after:-z-10 z-0">
            <img src={`/review/${id}.jpeg`} alt="" className="w-full h-full object-cover rounded-full" />
          </div>

          <h2 className="text-sm font-medium">{username}</h2>
        </div>

        <img src="/logo/twitter.svg" alt="" />
      </div>

      <p className="text-justify text-xs text-zinc-600 mt-4">{content}</p>
    </li>
  );
}