import React from 'react';
import { Link, useLocation } from '@remix-run/react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
	<nav className="w-full">
	  <ol className="list-reset flex">
		<li>
		  <Link to="/" className="opacity-80">Home</Link>
		</li>
		{pathnames.map((value, index) => {
		  const to = `/${pathnames.slice(0, index + 1).join('/')}`;
		  const isLast = index === pathnames.length - 1;
		  return (
			<li key={to} className="flex items-center">
			  <span className="">/</span>
			  {isLast ? (
				<span className="">{value}</span>
			  ) : (
				<Link to={to} className="">
				  {value}
				</Link>
			  )}
			</li>
		  );
		})}
	  </ol>
	</nav>
  );
};

export default Breadcrumbs;