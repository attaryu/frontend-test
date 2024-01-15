type Props = {
  children: any,
  className?: string
  type: 'primary' | 'secondary',
}

export default function Button({ children, className, type  }: Props) {
  const originClass = 'py-2 px-4 text-sm w-fit h-fit flex gap-3 items-center rounded-md font-medium';
  
  if (type === 'primary') {
    return (
      <button className={`${originClass} bg-primary text-white ${className ?? ''}`}>
        {children}
      </button>
    );
  }
  
  return (
    <button className={`${originClass} outline outline-1 text-zinc-800 outline-zinc-400 bg-zinc-100 ${className ?? ''}`}>
      {children}
    </button>
  );
}