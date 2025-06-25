// src/components/ProfileSection.jsx
import React from 'react';

export default function ProfileSection() {
  const teachers = [
    {
      name: "Sanatan Kisku",
      designation: "PGT Computer Science",
      image: "/images/sanatansir.jpg", // Replace with actual image path
    },
    {
      name: "T Mohan Rao",
      designation: "Computer Teacher",
      image: "/images/mohansir.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="py-10 px-6 bg-gray-50" id="profile">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Meet Your IT Teacher
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg w-72 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200 hover:border-blue-400 transition"
            />
            <h3 className="text-xl font-semibold text-blue-900">
              {teacher.name}
            </h3>
            <p className="text-sm text-gray-600">{teacher.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


// import React from 'react';

// export default function ProfileSection() {
//   return (
//     <section className="bg-blue-50 py-10 px-6 text-center" id="profile">
//       <h2 className="text-3xl font-bold text-blue-800 mb-6">Meet Your IT Teacher</h2>

//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
//         <img
//           src="/profile.jpg" // Replace with your actual image file name
//           alt="Sanatan Kisku"
//           className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-blue-300"
//         />
//         <h3 className="text-2xl font-semibold text-gray-800">Sanatan Kisku</h3>
//         <p className="text-blue-600 font-medium">PGT Computer Science</p>
//         <p className="text-gray-600 mt-2 text-sm">
//           Odisha Adarsha Vidyalaya, Surada
//         </p>
//       </div>
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
//         <img
//           src="/profile.jpg" // Replace with your actual image file name
//           alt="T Mohan Rao"
//           className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-blue-300"
//         />
//         <h3 className="text-2xl font-semibold text-gray-800">T Mohan Rao</h3>
//         <p className="text-blue-600 font-medium">Computer Teacher</p>
//         <p className="text-gray-600 mt-2 text-sm">
//           Odisha Adarsha Vidyalaya, Surada
//         </p>

//       </div>
//     </section>
//   );
// }
