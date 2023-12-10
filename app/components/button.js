function Button({text,type = "button"}) {
    return ( 
        <div className='h-14 group w-48 relative'>
            <button type={type} className='bg-red text-white border-2 border-black z-10 absolute left-0 top-0 h-14 w-full'>
                {text}
            </button>
            <div className='bg-black group-hover:left-0 group-hover:top-0 duration-700 z-0 absolute left-2 top-2 h-14 w-full'></div>
    </div>
     );
}

export default Button;