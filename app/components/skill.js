function Skill({name,text, color, facing}) {
   
    console.log(color)
    let bgColor;
    switch(color){
        case "red": bgColor = "bg-pink" ;break;
        case "green": bgColor ="bg-green-600";break;
        case "blue": bgColor ="bg-blue-800 ";break;
        default : bgColor = "bg-stone-600";break;
    }
    

    return ( 
    <div className='flex flex-col group w-40  text-white text-2xl '>    
        <div className={`${bgColor} cursor-pointer  w-40 h-16 b flex justify-center items-center rounded-tr-2xl rounded-bl-2xl`}>{name}</div>
        <div className='scale-0 group-hover:scale-100 absolute p-4 bg-stone-700 font-normal text-base y rounded-2xl group-hover:h-72 overflow-x-hidden group-hover:w-72 overflow-y-scroll'>
            <p>{text|| "NO"}</p>        
        </div>

    </div>
     );
}

export default Skill;