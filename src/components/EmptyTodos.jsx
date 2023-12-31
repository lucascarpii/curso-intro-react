import React from "react";

function EmptyTodos(){
  return(
    <div className="flex flex-col h-48 items-center justify-center text-gray-400 gap-2 py-8 select-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
      <p className="text-lg font-bold">Crea tu primer ToDo</p>
    </div>
  )
}

export {EmptyTodos}