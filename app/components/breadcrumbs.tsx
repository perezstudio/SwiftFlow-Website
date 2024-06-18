import React from "react";
import { Link, useLocation } from "@remix-run/react";
import ImageSwitcher from "./imageSwitcher";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="w-full">
      <ol className="list-reset flex flex-row gap-2.5 items-center">
        {location.pathname === "/" ? (
          <li className="flex flex-row gap-2.5 items-center">
            <Link to="/" className="opacity-80">
              <ImageSwitcher
                lightImgSrc="swift-icon-light.svg"
                darkImgSrc="swift-icon-dark.svg"
                altText="Swift Bird Icon"
              />
            </Link>
            <ChevronRightIcon className="h-5 w-5 text-gray-500 mx-2" />
            <Link to="/" className="opacity-80">
              Overview
            </Link>
          </li>
        ) : (
          <>
            <li className="flex flex-row items-center">
              <Link to="/" className="opacity-80">
                <ImageSwitcher
                  lightImgSrc="swift-icon-light.svg"
                  darkImgSrc="swift-icon-dark.svg"
                  altText="Swift Bird Icon"
                />
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return (
                <li key={to} className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 text-gray-500 mr-2" />
                  {isLast ? (
                    <span className="text-gray-500">{value}</span>
                  ) : (
                    <Link to={to} className="hover:text-custom-primary">
                      {value}
                    </Link>
                  )}
                </li>
              );
            })}
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
