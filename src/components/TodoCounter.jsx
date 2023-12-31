import React from "react";
import {TodoContext} from '../TodoContext'

function TodoCounter(){
  const {loading, completedTodos, totalTodos} = React.useContext(TodoContext)

  if (loading) {
    return(
      <div className='animate-pulse h-[40px] w-72 bg-gray-300 rounded mb-10 mx-auto'></div>
    );
  }
  let message = '';
  if(totalTodos === 0){
    message = 'No hay TODOs creados';
  } else if(totalTodos > 0 && totalTodos === completedTodos){
    message = 'Has completado todos los TODOs';
  }
  else{
    message = `Has completado ${completedTodos} de ${totalTodos} TODOs`;
  }
  return(
    <h1 className="text-center mb-10 text-4xl font-semibold tracking-tight text-gray-400">
     {message}
    </h1>
  )
}

export { TodoCounter }
