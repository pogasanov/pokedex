import {ISpecies, IType} from "types";

interface IProps {
  types: IType[]
  species: ISpecies[]
}

export default function Filter({types, species}: IProps) {
  return (
    <div>
      <div>
        {types.map(type => (
          <label key={type.id} htmlFor={`type-${type.id}`}>{type.name}
            <input type="checkbox" name="type" id={`type-${type.id}`} value={type.id}/>
          </label>
        ))}
      </div>
      <div>
        <label htmlFor="species">Species</label>
        <select name="species" id="species">
          <option value=""></option>
          {species.map(sp => <option key={sp.id} value={sp.id}>{sp.name}</option>)}
        </select>
      </div>
    </div>
  )
}
