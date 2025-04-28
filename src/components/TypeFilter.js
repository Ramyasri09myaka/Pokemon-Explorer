function TypeFilter({ onTypeChange }) {
  const types = ["All", "Fire", "Water", "Grass", "Electric", "Bug", "Poison", "Normal", "Ground", "Fairy", "Fighting", "Psychic", "Rock", "Ghost", "Ice", "Dragon"];

  return (
    <select onChange={onTypeChange} className="type-filter">
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
export default TypeFilter;

