import SearchBar from "./SearchBar";
import SchoolTable from "./SchoolTable";
import { useState } from "react";


function FilterableSchoolTable({ schools }) {
  const [filterText, setFilterText] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <SearchBar
        filterText={filterText}
        isPublic={isPublic}
        onFilterTextChange={setFilterText}
        onPublicChange={setIsPublic}
      />
      <SchoolTable
        schools={schools}
        filterText={filterText}
        isPublic={isPublic}
      />
    </div>
  );
}

export default FilterableSchoolTable