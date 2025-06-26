function SchoolCategoryRow({ typeSchool }) {
  return (
    <tr className="bg-gray-200">
      <td colSpan="6" className="font-bold p-2">{typeSchool}</td>
    </tr>
  );
}
export default SchoolCategoryRow;