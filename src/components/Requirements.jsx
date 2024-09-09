import React from 'react';

const requirements = [
  {
    title: "Age Requirement",
    content: "Applicants should ideally be under 35 years of age.",
  },
  {
    title: "Educational Qualifications",
    content: "Hold a recognized academic or vocational qualification.",
  },
  {
    title: "Professional Experience",
    content: "At least three years of relevant work experience in your field.",
  },
  {
    title: "Language Proficiency",
    content: "Basic knowledge of German (A1 level) or strong English language skills.",
  },
  {
    title: "Connection to Germany",
    content: "Previous stays, family ties, or studies in Germany can enhance your eligibility.",
  },
];

const Requirements = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Requirements</h1>
        <ul className="space-y-4">
          {requirements.map((item, index) => (
            <li key={index} className="border-b border-gray-300 pb-4">
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Requirements;
