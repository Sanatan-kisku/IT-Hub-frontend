import React from 'react';

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: "Aryan Das", score: 98, class: "9A" },
    { rank: 2, name: "Riya Pradhan", score: 95, class: "10B" },
    { rank: 3, name: "Sourav Nayak", score: 93, class: "9B" },
    { rank: 4, name: "Sanchita Patra", score: 91, class: "8A" },
    { rank: 5, name: "Manas Reddy", score: 89, class: "10A" },
  ];

  return (
    <section className="py-10 px-6 bg-white" id="leaderboard">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">🏆 Leaderboard</h2>

      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full border border-gray-200 shadow-md">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border">Rank</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Score</th>
              <th className="py-2 px-4 border">Class</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((student, index) => (
              <tr key={index} className="text-center hover:bg-blue-50">
                <td className="py-2 px-4 border font-bold text-yellow-600">{student.rank}</td>
                <td className="py-2 px-4 border">{student.name}</td>
                <td className="py-2 px-4 border text-green-700">{student.score}</td>
                <td className="py-2 px-4 border">{student.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
