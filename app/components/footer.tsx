import React from "react";
import Breadcrumbs from "~/components/breadcrumbs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-light-gray dark:bg-custom-dark flex flex-row justify-center px-4 py-6">
      <div className="flex flex-col gap-4 w-full max-w-1200">
        <Breadcrumbs />
        <hr className="opacity-40" />
        <span className="text-custom-dark dark:text-white opacity-80">
          Copyright © 2024 SwiftFlow. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
