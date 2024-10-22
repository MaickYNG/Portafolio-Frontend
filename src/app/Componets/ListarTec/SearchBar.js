import "../ListarTec/StyleIcon.css"

function SearchBar ({setQuery }){

return(
    <div className="search-container">
        <input
            className="search-input"
            placeholder="Buscar..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <button className="search-button">Buscar</button>
    </div>
)

}
export default SearchBar