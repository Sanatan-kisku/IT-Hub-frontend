import React from 'react';

export default function QuickLinks() {
  const links = [
    { title: "Class 9 IT Syllabus", url: "https://example.com/syllabus.pdf", color: "bg-yellow-200" },
    { title: "Practical File Sample", url: "https://example.com/practical", color: "bg-blue-200" },
    { title: "Digital India Portal", url: "https://digitalindia.gov.in", color: "bg-orange-200" },
    { title: "CBSE IT Curriculum", url: "https://cbseacademic.nic.in", color: "bg-green-200" },
    { title: "OAV Official Site", url: "https://oav.edu.in", color: "bg-purple-200" },
  ];

  return (
    <section className="py-10 px-6 bg-white" id="quick-links">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">🔗 Quick Links</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-6 rounded-lg shadow-md hover:shadow-lg transition ${link.color} text-center text-lg font-semibold text-blue-900`}
          >
            {link.title}
          </a>
        ))}
      </div>
    </section>
  );
}
