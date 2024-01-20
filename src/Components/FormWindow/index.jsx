export default function FormWindow({children, className}) {
    return(
        <div className={`flex justify-center mt-4 h-[47%] border ${className}`}>
            <div className="w-11/12 md:w-[100vh] h-[70.7vh] px-8 rounded-3xl shadow-xl border-2 border-cyan-100  
            bg-white
            ">
                {children}
            </div>
        </div>
    )
}