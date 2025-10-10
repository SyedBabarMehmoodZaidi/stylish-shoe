import React from "react";

const videos = [
  {
    id: 1,
    title: "Stylish Shoes 1",
    url: "https://www.youtube.com/embed/ktAq-v6VFqY",
  },
  {
    id: 2,
    title: "Stylish Shoes 2",
    url: "https://www.youtube.com/embed/RVg_T_ejeoo",
  },
  {
    id: 3,
    title: "Stylish Shoes TVC 3",
    url: "https://www.youtube.com/embed/JlDdI6UoXoM",
  },
];

const TVCSection: React.FC = () => {
  return (
    <section className="py-8 bg-white text-black">
      <h2 className="text-3xl font-bold mb-6 text-center">TVC&apos;S</h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TVCSection;
