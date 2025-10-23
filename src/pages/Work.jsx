import React from "react";
import Footer from "../components/ui/Footer";

// Data for the work/portfolio items
const workItems = [
  {
    title: "Gathr",
    category: "Development",
    year: "2025",
    imageUrl: "https://placehold.co/600x400/171717/FFFFFF?text=Gathr",
    link: "https://github.com/shlokarth911/gathr",
  },
  {
    title: "7-pixels",
    category: "Design & Dev",
    year: "2025",
    imageUrl: "https://placehold.co/600x400/171717/FFFFFF?text=7-pixels",
    link: "https://shlokarth911.github.io/7-pixels/",
  },
  {
    title: "Safe Gas Guard",
    category: "Development",
    year: "2024",
    imageUrl: "https://placehold.co/600x400/171717/FFFFFF?text=Safe-Gas-Guard",
    link: " https://shlokarth911.github.io/safe_gas_guard/",
  },
  {
    title: "Chatty",
    category: "Development",
    year: "2024",
    imageUrl: "https://placehold.co/600x400/171717/FFFFFF?text=Chatty",
    link: "https://github.com/shlokarth911/chatty",
  },
];

// Reusable component for each work card
const WorkCard = ({ imageUrl, title, category, year, link }) => (
  <div
    onClick={() => {
      window.open(link, "_blank");
    }}
    className="bg-neutral-900/50 p-4 rounded-xl group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
  >
    <img
      src={imageUrl}
      alt={`Screenshot of ${title} project`}
      // Added aspect-ratio for consistent image sizes and rounded corners
      className="w-full object-cover rounded-md aspect-video transition-transform duration-300 group-hover:scale-105"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/600x400/171717/FFFFFF?text=Image+Not+Found";
      }}
    />
    <div className="mt-5">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-t-neutral-50/20 text-neutral-400">
        <p>{category}</p>
        <p>{year}</p>
      </div>
    </div>
  </div>
);

const Work = () => {
  return (
    // Added more padding and min-height for better spacing
    <div>
      <div className="min-h-screen pt-28 p-4 sm:p-6 md:p-8 font-display text-neutral-100">
        <div className="container mx-auto">
          {/* Responsive heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl  tracking-wide mb-8 md:mb-12">
            WORK
          </h1>
          {/* Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {workItems.map((item, index) => (
              <WorkCard
                key={index}
                title={item.title}
                category={item.category}
                year={item.year}
                imageUrl={item.imageUrl}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
