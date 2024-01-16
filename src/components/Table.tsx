export default function Table() {
  const tableData = [
    { nama: 'John Doe', UUID: '123e4567-e89b-12d3-a456-426614174000', role: 'Developer' },
    { nama: 'Jane Smith', UUID: '223e4567-e89b-12d3-a456-426614174001', role: 'Developer' },
    { nama: 'Alice Johnson', UUID: '323e4567-e89b-12d3-a456-426614174002', role: 'Designer' },
    { nama: 'Bob Williams', UUID: '423e4567-e89b-12d3-a456-426614174003', role: 'Engineer' },
    { nama: 'Emily Brown', UUID: '523e4567-e89b-12d3-a456-426614174004', role: 'Analyst' },
    { nama: 'Michael Davis', UUID: '623e4567-e89b-12d3-a456-426614174005', role: 'Administrator' },
    { nama: 'Sarah Wilson', UUID: '723e4567-e89b-12d3-a456-426614174006', role: 'Coordinator' },
  ]
  
  return (
    <table className="w-full border-[1px] border-zinc-500">
      <thead className="text-sm font-normal text-zinc-600">
        <tr>
          <th className="px-3 py-4 border-[1px] border-collapse">Name</th>
          <th className="px-3 py-4 border-[1px] border-collapse">UUID</th>
          <th className="px-3 py-4 border-[1px] border-collapse">Role</th>
        </tr>
      </thead>
      <tbody className="text-xs bg-white">
        {tableData.map(({ nama, UUID, role }) => (
          <tr key={UUID}>
            <td className="px-3 py-4 border-[1px] border-collapse">{nama}</td>
            <td className="px-3 py-4 border-[1px] border-collapse">{UUID}</td>
            <td className="px-3 py-4 border-[1px] border-collapse">{role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}