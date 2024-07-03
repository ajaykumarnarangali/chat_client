
function Searchbar({setSearchTerm}) {

    return (
        <form className='flex items-center gap-2'>
            <input type='text' placeholder='Search…' className='input input-bordered rounded-full'  onChange={(e)=>setSearchTerm(e.target.value)} />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <i class="fa-solid fa-magnifying-glass"></i>
                {/* <IoSearchSharp className='w-6 h-6 outline-none' /> */}
            </button>
        </form>
    )
}

export default Searchbar
