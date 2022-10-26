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
        {species.map(sp => (
          <label key={sp.id} htmlFor={`type-${sp.id}`}>{sp.name}
            <input type="checkbox" name="type" id={`type-${sp.id}`} value={sp.id}/>
          </label>
        ))}
      </div>
    </div>
  )
}
