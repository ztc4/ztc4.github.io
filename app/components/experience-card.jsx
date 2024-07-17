function ExperienceCard({
  position = "Full Stack IA",
  details = "Working as an Instructional assistant helping support up to 14  learners on their journey to become full stack developers. Taught topics like Javascript, React, Springboot and MySQL. Communicated with a team of around 10-15 co-workers. ",
  company = "LaunchCode",
  skills = ["React", "Springboot", "Junit", "Canvas", "Trello"],
  dateHeld = "Dec 2023 - 2024",
}) {
  return (
    <div className="h-[354px] font-KyivTypeMedium- dark:bg-[#222] bg-white px-4 py-4 flex flex-col justify-between border-blue w-[347px] border-4">
      <p className="text-2xl">{position}</p>
      <p className="font-sans text-base">{details}</p>
      <div>
        <h6 className="text-2xl">{company}</h6>
        <p className="text-base">{dateHeld}</p>
        <ul className="flex flex-row text-base flex-wrap tracking-tighter gap-2">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
