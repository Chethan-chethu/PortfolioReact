import { motion } from "framer-motion";

const HorizontalTimeline = ({ timelineData }) => {
  return (
    <div className="overflow-x-auto px-10">
      <div className="flex gap-10 min-w-max">
        {timelineData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 p-6 rounded-xl w-80"
          >
            <item.icon className="text-sky-400 mb-2" />
            <span className="text-sm text-sky-400">{item.duration}</span>
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <p className="text-slate-400">{item.organization}</p>
            <p className="mt-3 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
