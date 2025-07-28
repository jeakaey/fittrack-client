import { gql, useQuery } from "@apollo/client";
import WeightForm from "./WeightForm";


const GET_WEIGHTS = gql`
  query {
    weightNextEntries {
      id
      weight
      date
    }
  }
`;

export default function WeightList() {
  const { loading, error, data, refetch } = useQuery(GET_WEIGHTS);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  return (
    <div>
      <WeightForm refetch={refetch} /> 
      <h2>Weight History</h2>
      <ul className="liste-sans-puce">
        {data.weightNextEntries.map((entry) => (
          <li key={entry.id}>
            {entry.weight} kg – {new Date(Number(entry.date)).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
