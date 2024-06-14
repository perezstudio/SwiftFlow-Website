import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { LoaderFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles/tailwind.css" },
];

export const loader: LoaderFunction = async () => {
  return {
    gaTrackingId: "G-Y5M0S6FWR8", // Replace with your GA tracking ID
  };
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { gaTrackingId } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {gaTrackingId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaTrackingId}');
                  `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-white dark:bg-black text-custom-dark dark:text-white">
        <NavBar />
        <div className="pt-16">{children}</div>
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
