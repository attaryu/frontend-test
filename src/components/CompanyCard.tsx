import Image from 'next/image';

export default function CompanyCard() {
  const companies = [
    'ecode',
    'microsoft',
    'google',
    'oracle',
    'dana',
    'gojek',
    'biznet',
    'accenture',
  ];
  
  return (
    <ul className="grid grid-cols-4 grid-rows-2 place-items-center gap-y-10 px-6">
      {companies.map((company) => (
        <li key={company} className="relative aspect-video w-32 py-4">
          <Image src={`/brand/${company}.svg`} alt="" fill className="object-contain"  />
        </li>
      ))}
    </ul>
  );
}