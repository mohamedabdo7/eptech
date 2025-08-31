import SectionHeader from "../common/SectionHeader";
import { TestimonialCard } from "../common/TestimonialCard";

const testimonials = [
  {
    name: "Dr. Dina Ahmed",
    role: "Lorem ipsum",
    image: "/images/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    highlighted: false,
  },
  {
    name: "Dr. Ali Ahmed",
    role: "Lorem ipsum",
    image: "/images/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    highlighted: true,
  },
  {
    name: "Dr. Dina Ahmed",
    role: "Lorem ipsum",
    image: "/images/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    highlighted: false,
  },
  {
    name: "Dr. Dina Ahmed",
    role: "Lorem ipsum",
    image: "/images/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    highlighted: false,
  },
  {
    name: "Dr. Dina Ahmed",
    role: "Lorem ipsum",
    image: "/images/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    highlighted: true,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeader
          isInline={false}
          baseTitle="What Our Satisfied"
          highlightTitle="Clients say"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`
                ${idx < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                col-span-1 sm:col-span-1
              `}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === 0 ? "bg-emerald-400" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-[#03024F] to-[#6587EE] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between h-[275px]">
          <div className="text-left mb-4 sm:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Ready to get a new Perspective
            </h3>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Ask for a services
          </button>
        </div>
      </div>
    </section>
  );
}
