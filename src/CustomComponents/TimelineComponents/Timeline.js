import { useState } from "react";
import { motion } from "framer-motion";
import { timelineData } from "./timelineData";
import VerticalTimeline from "./VerticalTimeline";
import HorizontalTimeline from "./HorizontalTimeline";

const Timeline = ({ layout = "vertical" }) => {
  return (
    <section className="bg-slate-950 text-slate-200 py-20">
      <h2 className="text-center text-4xl font-bold mb-16">My Journey</h2>

      {layout === "vertical" ? (
        <VerticalTimeline timelineData={timelineData} />
      ) : (
        <HorizontalTimeline timelineData={timelineData} />
      )}
    </section>
  );
};

export default Timeline;
