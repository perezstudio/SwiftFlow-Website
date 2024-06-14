import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">My Blog</h1>
      {children}
    </div>
  );
}
