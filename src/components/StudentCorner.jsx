import React from 'react';

export default function StudentCorner() {
  const studentLinks = [
    { title: "Submit Assignment", url: "https://example.com/submit", icon: "📝", color: "bg-green-100" },
    { title: "View Classwork", url: "https://example.com/classwork", icon: "📚", color: "bg-blue-100" },
    { title: "Check Results", url: "https://example.com/results", icon: "📊", color: "bg-yellow-100" },
    { title: "Timetable", url: "https://example.com/timetable", icon: "📅", color: "bg-orange-100" },
    { title: "Ask Doubts", url: "https://example.com/doubts", icon: "❓", color: "bg-purple-100" },
  ];

  return (
    <section className="py-10 px-6 bg-blue-50" id="student-corner">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">🎓 Student Corner</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {studentLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-6 rounded-lg shadow hover:shadow-lg transition ${link.color} text-center`}
          >
            <div className="text-4xl mb-2">{link.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{link.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
