import { useState } from "react";

export default function Objectif() {
  const [goal, setGoal] = useState("");
  const [savedGoal, setSavedGoal] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal) {
      setSavedGoal(goal);
      setGoal("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎯 Target weight</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="goal">Your target weight (kg):</label><br />
        <input
          type="number"
          step="0.1"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <button type="submit" style={{ marginLeft: "10px" }}>Save</button>
      </form>

      {savedGoal && (
        <p style={{ marginTop: "20px" }}>
          ✅ Your actual objective is <strong>{savedGoal} kg</strong>
        </p>
      )}
    </div>
  );
}
