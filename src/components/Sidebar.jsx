import React,{useState} from 'react'
import Searchbar from './Searchbar'
import Conversations from './Conversations'
import Signout from './Signout'

function Sidebar() {
  const [searchTerm,setSearchTerm]=useState('');

  return (
    <div>
      <Searchbar setSearchTerm={setSearchTerm}/>
      <div className='divider px-3'></div>
 			<Conversations searchTerm={searchTerm}/>
      <Signout/>
    </div>
  )
}

export default Sidebar
