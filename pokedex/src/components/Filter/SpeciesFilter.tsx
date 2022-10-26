import {ISpecies} from "types";

interface IProps {
  possibleSpecies: ISpecies[]
  value: number | null
  onChange: (id: number) => void
}

export default function SpeciesFilter({value, possibleSpecies, onChange}: IProps) {
  return (
    <div>
      <label htmlFor="species">Species</label>
      <select name="species" id="species" value={value ?? ''}
              onChange={e => onChange(Number(e.target.value))}>
        <option value=""></option>
        {possibleSpecies.map(sp => <option key={sp.id} value={sp.id}>{sp.name}</option>)}
      </select>
    </div>
  )
}
