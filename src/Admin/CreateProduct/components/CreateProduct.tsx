import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { TreeNode } from 'antd/lib/tree-select';
import { TreeSelect } from 'antd';
import { categoriesAction } from 'features/Categories/CategoriesSlide';

export default function CreateProduct()
{
  const [value, setValue] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch()
  const categoriesProduct = useAppSelector((state) => state.categoriesProductReducer.categories);
  useEffect(() => {
    dispatch(categoriesAction.getCategoriesProduct(""))
  }, [])
  const onChange = (e:string) =>
  {
    setValue(e);
  };
  const mapCategoreiesTree = categoriesProduct?.map((v, index) =>
  {
    return (
        <TreeNode disabled value={v.category} title={v.name} key={v.category}>
        {v.chilrens.map((v1, index1) =>
        {
          return (
            <TreeNode disabled value={v1.category} title={v1.name} key={v1.category}>
              {v1.chilrens.map((v2, index2) =>
              {
                return (
                  <TreeNode value={v2.category} title={v2.name} key={v2.category}/>
                 )
               })}
            </TreeNode>
            )
          })}
      </TreeNode>
    )
  })
//   <TreeNode value="parent 1" title="parent 1">
//   <TreeNode value="parent 1-0" title="parent 1-0">
//     <TreeNode value="leaf1" title="leaf1" />
//     <TreeNode value="leaf2" title="leaf2" />
//   </TreeNode>
//   <TreeNode value="parent 1-1" title="parent 1-1">
//     <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
//   </TreeNode>
// </TreeNode>
  return (
    <div>
      <div className="bg-gray-800 pt-20">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Create Product</h1>
        </div>
      </div>{' '}
      <form className="mt-20 p-20">
        <div className="relative z-0 mb-6 w-full group">
        
         <input
            name="tenSanPham"
            className=" border-solid block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            className="absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name Product
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            name="giaTien"
            className=" border-solid block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            className="absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Money
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="soLuong"
            className=" border-solid block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            className="absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Quatity
          </label>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="phanTramSale"
              className="border-solid block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              className="absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Sales percentage
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
          <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
              onChange={onChange}
              
    >
     {mapCategoreiesTree}
    </TreeSelect>
          </div>
        </div>
      
        <div className="grid xl:grid-cols-2 xl:gap-6 mt-10">
          
          <div className="relative z-0 mb-6 w-full group col-span-2">
            <textarea
              name="moTa"
              className="border-solid block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              className="absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Decription
            </label>
          </div>
         
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-coolGray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0 "/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1 "/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2 "/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3 "/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4 "/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5 "/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6 "/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7 "/>
		<img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-coolGray-500 aspect-square "/>
	</div>
</section>
    </div>
  );
}
