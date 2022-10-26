import {useMemo, useState} from "react";
import ReactPaginate from "react-paginate";
import {IPokemon} from "types";

interface IProps {
  pokemons: IPokemon[]
}

const ITEMS_PER_PAGE = 20

export default function PokemonList({pokemons}: IProps) {
  const [itemOffset, setItemOffset] = useState(0);

  const currentItems = useMemo(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    return pokemons.slice(itemOffset, endOffset)
  }, [itemOffset, pokemons])

  const pageCount = useMemo(() => {
    return Math.ceil(pokemons.length / ITEMS_PER_PAGE)
  }, [pokemons.length])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % pokemons.length;
    setItemOffset(newOffset);
  };

  return <div>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Stats</th>
      </tr>
      </thead>
      <tbody>
      {currentItems && currentItems.map(pokemon => (
        <tr key={pokemon.id}>
          <td>
            {pokemon.name}
          </td>
          <td>
            <img src={pokemon.image} alt={pokemon.name}/>
          </td>
          <td>
            {pokemon.stats.map(s => (<div key={s.id}>{s.name}: {s.base_stat}</div>))}
          </td>
        </tr>
      ))}
      </tbody>
    </table>

    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< previous"
    />
  </div>
}
