import { Metadata } from "next";
import Team from "./Team";

export const metadata: Metadata = {
  title: "Team | Axiom Club",
  description:
    "Meet the brilliant minds behind Axiom Club - our diverse team of innovators, developers, and tech enthusiasts.",
};

export default function TeamPage() {
  return <Team />;
}
