import { gql, useQuery } from "@apollo/client";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const GET_WEIGHTS = gql`
  query {
    weightNextEntries {
    id  
    weight
      date
    }
  }
`;

export default function WeightChart() {
  const { loading, error, data } = useQuery(GET_WEIGHTS);

  if (loading) return <p>Chargement du graphique...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  // Formater les données
  const chartData = data.weightNextEntries
    .map(entry => ({
      ...entry,
      date: new Date(Number(entry.date)).toLocaleDateString("fr-FR"),
    }))
    .reverse(); // Pour afficher du plus ancien au plus récent

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>📈 Weight Evolution</h2>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="weight" stroke="#007bff" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
