import TimelineCard from "./TimelineCard.js";

const VerticalTimeline = ({ timelineData }) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute left-1/2 top-0 h-full w-1 bg-sky-500 -translate-x-1/2" />

      {timelineData.map((item, index) => (
        <TimelineCard
          key={item.id}
          item={item}
          align={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
};

export default VerticalTimeline;
