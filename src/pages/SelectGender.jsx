import React from 'react'

function SelectGender({inputs,handleGender}) {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Male</span>
                    <input type='checkbox' checked={inputs.gender=='male'} className='checkbox border-slate-900'
                    onChange={()=>{handleGender('male')}} />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Female</span>
                    <input type='checkbox' checked={inputs.gender=='female'} className='checkbox border-slate-900'
                    onChange={()=>{handleGender('female')}} />
                </label>
            </div>
        </div>
    )
}

export default SelectGender
