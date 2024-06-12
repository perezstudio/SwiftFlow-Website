import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Header from "~/components/header";

export const meta: MetaFunction = () => {
  return [
    { title: "SwiftFlow - The No Code Swift Editor" },
    { name: "SwiftFlow", content: "The world's first No Code editor for Swift!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
    </div>
  );
}
