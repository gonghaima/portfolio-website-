import { Social } from '../typings';
export const fetchSocials = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
    }/api/getSocials`
  );
  const data = await res.json();
  const socials: Social[] = data.socials;
  return socials;
};
