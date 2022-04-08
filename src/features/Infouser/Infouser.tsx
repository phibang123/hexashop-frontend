import './Infouser.css';

import React from 'react';
import { Redirect } from 'react-router';
import { useAppSelector } from 'app/hooks';

export default function Infouser() {
  const userReducer = useAppSelector((state) => state.auth.currentUser);
  if (!userReducer) {
    return <Redirect to="/login" />;
  }
  return (
    <div id="infouser" className=" mx-auto px-8 py-8 ">
      <div className="w-3/4  mx-auto bg-zinc-300 shadow overflow-hidden sm:rounded-lg flex">
        <div className="w-1/4">
          <img
            id="dropdownInformationButton"
            alt="user"
            data-dropdown-toggle="dropdownInformation"
            className="p-10 rounded-full items-center"
            style={{width: "-webkit-fill-available"}}
            src={userReducer.avatar}
          ></img>
        </div>
        <div className="w-3/4">
          <div className="px-4 py-8 sm:px-6 shadow-inner">
            <h3 className="text-3xl leading-6 font-medium text-gray-900 ">Applicant Information</h3>
            <p className="mt-1 max-w-2xl text-lg text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-medium text-gray-500 ">Full name</dt>
                <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                  {userReducer?.hoTen}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-medium text-gray-500">SDT</dt>
                <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                  {userReducer?.soDt}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-medium text-gray-500">PassWork</dt>
                <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">***********</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-medium text-gray-500">PassWork</dt>
                <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">***********</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-medium text-gray-500">Emaill</dt>
                <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                  {userReducer?.email}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum
                  culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla
                  mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad
                  adipisicing reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-medium text-gray-500">Lịch sử mua hàng</dt>
                <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2"></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
