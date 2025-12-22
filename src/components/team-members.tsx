import * as z from "zod";

const TeamDepartment = z.enum([
  "Mentors",
  "Operations",
  "Outreach",
  "Media",
  "Mechanical",
  "Electrical",
  "Programming",
]);
export type TeamDepartment = z.infer<typeof TeamDepartment>;
export const TeamDepartments = TeamDepartment.options;

const TeamMember = z.object({
  image: z.string(),
  name: z.string(),
  department: TeamDepartment,
  role: z.string().optional(),
});
export type TeamMember = z.infer<typeof TeamMember>;

export function getMembersByDepartment(department: string) {
  return TeamMembers.filter((member) => member.department === department);
}

export function getTeamMemberInitials(name: string) {
  const names = name.split(" ");
  const initials = names.map((n) => n.charAt(0).toUpperCase());
  return initials.join("");
}

export const TeamMembers: TeamMember[] = [
  {
    image: "/team/mr-e.jpg",
    name: "Mr. E",
    department: "Mentors",
  },
  {
    image: "/team/mr-b.jpg",
    name: "Mr. B",
    department: "Mentors",
  },
  {
    image: "/team/mr-harb.jpg",
    name: "Mr. Harb",
    department: "Mentors",
  },
  {
    image: "/team/lubaba.jpg",
    name: "Lubaba N.",
    department: "Operations",
    role: "Co-Captain",
  },
  {
    image: "/team/christopher.jpg",
    name: "Christopher M.",
    department: "Operations",
    role: "Co-Captain",
  },
  {
    image: "/team/ryan.jpg",
    name: "Ryan L.",
    department: "Outreach",
    role: "Outreach Lead",
  },
  {
    image: "/team/jayanti.jpg",
    name: "Jayanti R.",
    department: "Outreach",
  },
  {
    image: "/team/jason.jpg",
    name: "Jason Q.",
    department: "Outreach",
  },
  {
    image: "/team/syeda.jpg",
    name: "Syeda H.",
    department: "Media",
    role: "Media Lead",
  },
  {
    image: "/team/selena.jpg",
    name: "Selena J.",
    department: "Media",
  },
  {
    image: "/team/ethan.jpg",
    name: "Ethan C.",
    department: "Mechanical",
    role: "Mechanical Lead",
  },
  {
    image: "/team/gabriel.jpg",
    name: "Gabriel M.",
    department: "Mechanical",
  },
  {
    image: "/team/shreyansh.jpg",
    name: "Shreyansh W.",
    department: "Mechanical",
  },
  {
    image: "/team/madeha.jpg",
    name: "Madeha B.",
    department: "Mechanical",
  },
  {
    image: "/team/montasir.jpg",
    name: "Montasir M.",
    department: "Electrical",
    role: "Electrical Lead",
  },
  {
    image: "/team/noah.jpg",
    name: "Noah S.",
    department: "Electrical",
  },
  {
    image: "/team/rain.jpg",
    name: "Rain C.",
    department: "Programming",
    role: "Programming Lead",
  },
  {
    image: "/team/issac.jpg",
    name: "Issac L.",
    department: "Programming",
  },
];
