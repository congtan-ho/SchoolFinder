function SchoolRow({ school }) {
  return (
    <tr className="border-t">
      <td className="p-2">{school.name}</td>
      <td className="p-2">{school.code}</td>
      <td className="p-2">{school.type}</td>
      <td className="p-2">{school.address}</td>
      <td className="p-2">{school.website}</td>
      <td className="p-2"><img className="object-cover" src={school.logo_url} alt="" /></td>
    </tr>
  );
}
export default SchoolRow;
