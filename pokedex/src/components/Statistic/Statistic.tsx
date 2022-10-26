import {IStatistic} from "types";

interface IProps {
  statistic: IStatistic
}

export default function Statistic({statistic}: IProps) {
  return (
    <div>
      <div>
        Pokemons: {statistic.pokemons}
      </div>
      <div>
        Types: {statistic.types}
      </div>
      <div>
        Species: {statistic.species}
      </div>
    </div>
  )
}
