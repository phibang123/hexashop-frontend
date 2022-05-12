import HeaderAdmin from 'templates/layouts/headerAdmin/HeaderAdmin';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router';

interface IpropsTemPlate {
  Component: any;
  path: string;
  exact: boolean;
}

export default function DetailTemplate(props: IpropsTemPlate) {
  let { Component, ...resRoute } = props;
  return (
    <Route
      {...resRoute}
      render={(propsRoute: object) => {
        return (
          <>
            <HeaderAdmin></HeaderAdmin>

            <main>
              <div className="flex flex-col md:flex-row">
                <nav aria-label="alternative nav">
                  <div className="bg-gray-800 h-full shadow-xl  fixed bottom-0 mt-12  md:relative z-10 w-full md:w-80 content-center">
                    <div className="md:mt-12 md:w-80 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                      <ul className="list-reset mt-10 flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                        <li className="mr-3 flex-1">
                          <NavLink
                            to="/admin/createproduct"
                            className="block py-1 md:py-3 pl-1  align-middle text-white no-underline hover:text-white border-b-2 "
                            activeClassName="border-purple-500 text-purple-500"
                          >
                            <i className="fas fa-tasks pr-0 md:pr-3 text-xl "></i>
                            <span className="pb-1 md:pb-0 text-xl  text-white md:text-white block md:inline-block">
                              Create product
                            </span>
                          </NavLink>
                        </li>
                        <li className="mr-3 flex-1">
                          <a
                            href="#"
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                          >
                            <i className="fa fa-envelope pr-0 md:pr-3 text-xl "></i>
                            <span className="pb-1 md:pb-0 text-xl  text-gray-400 md:text-gray-200 block md:inline-block">
                              Messages
                            </span>
                          </a>
                        </li>
                        <li className="mr-3 flex-1">
                          <NavLink
                            to="/admin/index"
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 "
                            activeClassName="border-purple-500 text-purple-500"
                          >
                            <i className="fas fa-chart-area pr-0 md:pr-3 text-xl "></i>
                            <span className="pb-1 md:pb-0 text-xl  text-white md:text-white block md:inline-block">
                              Analytics
                            </span>
                          </NavLink>
                        </li>
                        <li className="mr-3 flex-1">
                          <a
                            href="/admin/index"
                            className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                          >
                            <i className="fa fa-wallet pr-0 md:pr-3 text-xl "></i>
                            <span className="pb-1 md:pb-0 text-xl  text-gray-400 md:text-gray-200 block md:inline-block">
                              Payments
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <section className=' w-full h-full'>
                  <div
                    id="main"
                    className="main-contentflex-1 mt-12 md:mt-2 pb-24 md:pb-5"
                  >
                    
                    <Component {...propsRoute} />
                  </div>
                </section>
              </div>
            </main>
          </>
        );
      }}
    />
  );
}
