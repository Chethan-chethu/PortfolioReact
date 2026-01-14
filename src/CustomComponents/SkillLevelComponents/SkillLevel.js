function SkillLevel({ level }) {
  const maxLevel = 5;
  const safeLevel = Math.min(Math.max(level, 0), 5);

  return (
    <div style={{ display: "flex", gap: "6px" }}>
      {Array.from({ length: maxLevel }, (_, index) => {
        const isActive = index < safeLevel;

        return (
          <span
            key={index}
            style={{
              color: index < safeLevel ? "#FFC107" : "#E0E0E0",
              fontSize: "20px",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default SkillLevel;
