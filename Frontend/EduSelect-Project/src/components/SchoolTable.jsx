import SchoolCategoryRow from "./SchoolCategoryRow";
import SchoolRow from "./SchoolRow";

function SchoolTable({ schools, filterText, isPublic }) {
  // Gom nhóm các trường theo type Đại học, Cao đẳng
  const groupedSchools = schools.reduce((accumulator, school) => {
    const type = school.type;
    if (!accumulator[type]) {
      accumulator[type] = [];
    }
    accumulator[type].push(school);
    return accumulator;
  }, {});

  const rows = [];
  Object.entries(groupedSchools).forEach(([type, schoolsOfType]) => {
  // Lọc danh sách các trường trong nhóm có chứa từ khóa người dùng 
  const filterSchools = schoolsOfType.filter((school) => {
    const nameSchool = school.name.toLowerCase().includes(filterText.toLowerCase());

    // Kiểm tra trường công lập (isPublic mặc định là false)
    const publicSchool = !isPublic || school.is_public;

    // thỏa cả 2 điều kiện trên
    return nameSchool && publicSchool;
  });

    if (filterSchools.length > 0) {
      rows.push(
        <SchoolCategoryRow typeSchool={type} key={type} />
      );

      filterSchools.forEach((school) => {
        rows.push(<SchoolRow school={school} key={school.id} />);
      });
    }
  });

  return (
    <table className="w-full border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left p-2">Tên trường</th>
          <th className="text-left p-2">Mã</th>
          <th className="text-left p-2">Loại</th>
          <th className="text-left p-2">Địa chỉ</th>
          <th className="text-left p-2">Website</th>
          <th className="text-left p-2">Logo</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default SchoolTable;
