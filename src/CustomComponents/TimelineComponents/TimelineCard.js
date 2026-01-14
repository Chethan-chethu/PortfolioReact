import { useState } from "react";
import { motion } from "framer-motion";

const TimelineCard = ({ item, align }) => {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative w-1/2 px-6 mb-20 ${
        align === "left" ? "ml-0 mr-auto text-right" : "ml-auto mr-0"
      }`}
    >
      <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <Icon className="text-sky-400" />
          <span className="text-sm text-sky-400">{item.duration}</span>
        </div>

        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-slate-400">{item.organization}</p>
        <p className="mt-3">{item.description}</p>

        <button
          onClick={() => setOpen(!open)}
          className="mt-4 text-sky-400 text-sm"
        >
          {open ? "Hide Experience ▲" : "View Experience ▼"}
        </button>

        {open && (
          <ul className="mt-4 list-disc list-inside text-sm text-slate-300">
            {item.experience.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Timeline Dot */}
      <span
        className={`absolute top-8 w-4 h-4 bg-sky-500 rounded-full ${
          align === "left" ? "-right-2" : "-left-2"
        }`}
      />
    </motion.div>
  );
};

export default TimelineCard;
