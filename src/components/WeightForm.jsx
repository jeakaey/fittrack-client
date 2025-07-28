import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

/*const ADD_WEIGHT = gql`
  mutation AddWeightEntry($userID: ID!, $weight: Float!, $unit: String!) {
    addWeightEntry(userID: $userID, weight: $weight, unit: $unit) {
      id
      weight
      unit
    }
  }
`;*/
const ADD_NEXT_WEIGHT = gql`
  mutation AddWeightNextEntry($weight: Float!) {
    addWeightNextEntry(weight: $weight) {
      id
      weight
      date
    }
  }
`;

export default function WeightForm({ refetch }) {
  const [weight, setWeight] = useState("");
  const [addWeightNextEntry] = useMutation(ADD_NEXT_WEIGHT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const weightValue = parseFloat(weight);
      if (isNaN(weightValue)) {
        alert("Veuillez entrer un nombre valide");
        return;
      }

      
      const { data } = await addWeightNextEntry({
        variables: { weight: weightValue },
      });

      console.log("Poids ajouté:", data.addWeightNextEntry);
      setWeight("");
      refetch(); 
    } catch (err) {
      console.error("Erreur GraphQL:", err.networkError?.result?.errors || err);
      alert("Erreur lors de l'ajout: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        step="0.1"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight (kg)"
        required
      />
      <button type="submit">Enter</button>
    </form>
  );
}