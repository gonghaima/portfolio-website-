import { Experience } from '../typings';

export const fetchExperiences = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
    }/api/getExperience`
  );
  const data = await res.json();
  const experiences: Experience[] = data.experiences.sort(
    (a: Experience, b: Experience) =>
      +new Date(b.dateStarted) - +new Date(a.dateStarted)
  );
  return experiences;
};
