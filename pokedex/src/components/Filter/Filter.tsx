import {FormEvent, useState} from "react";
import {ISpecies, IType} from "types";

interface IProps {
  types: IType[]
  species: ISpecies[]
  onChange: (typesIds: number[], speciesId: number) => void
}

export default function Filter({types, species, onChange}: IProps) {
  const [selectedSpecies, setSelectedSpecies] = useState<number>(0)
  const [selectedTypes, setSelectedTypes] = useState<number[]>([])
  const toggleSelectedType = (id: number) => {
    const arrayCopy = [...selectedTypes]
    const index = arrayCopy.indexOf(id);
    if (index === -1) {
      arrayCopy.push(id);
    } else {
      arrayCopy.splice(index, 1);
    }
    setSelectedTypes(arrayCopy)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    onChange(selectedTypes, selectedSpecies)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {types.map(type => (
          <div key={type.id}>
            <label htmlFor={`type-${type.id}`}>{type.name}
              <input
                type="checkbox"
                name="type"
                id={`type-${type.id}`}
                value={type.id}
                checked={selectedTypes.includes(type.id)}
                onChange={e => toggleSelectedType(Number(e.target.value))}
              />
            </label>
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="species">Species</label>
        <select name="species" id="species" value={selectedSpecies}
                onChange={e => setSelectedSpecies(Number(e.target.value))}>
          <option value="0"></option>
          {species.map(sp => <option key={sp.id} value={sp.id}>{sp.name}</option>)}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
