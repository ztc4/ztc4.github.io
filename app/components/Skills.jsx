function Skill({ name, text }) {
  return (
    <div className="border-black sm:relative h-fit duration-700 group hover:cursor-pointer flex justify-center items-center text-black  p-2 px-4 rounded-full   hover:bg-black hover:text-secondary-dark   dark:hover:bg-black dark:hover:text-white  border-2">
      <p>{name}</p>
      <div className='scale-0 max-sm:left-4 sm:-top-32 md:left-none group-hover:scale-100 absolute p-4 bg-stone-700 font-normal text-base y rounded-2xl group-hover:h-72 overflow-x-hidden group-hover:w-72 overflow-y-scroll'>
            <p>{text}</p>        
        </div>
    </div>
  );
}

export default Skill;
