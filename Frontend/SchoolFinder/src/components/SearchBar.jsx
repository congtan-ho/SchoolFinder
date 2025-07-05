

function SearchBar({ filterText, isPublic, onFilterTextChange, onPublicChange }) 
  {
  return (
    <form className="mb-4 space-y-2">
      <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => onPublicChange(e.target.checked)}
        />
        {''}
        Trường công lập
      </label>
    </form>
  );
}

export default SearchBar

