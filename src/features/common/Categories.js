import React from 'react'

const Categories = ({name,catsrc,catbg}) => {
  return (
    <>
    <div className="flex justify-center items-center flex-col m-2 ">
        <img className={`catimg  ${catbg}`} src={catsrc} />
        <div className="mt-7"><h6 className="text-center cattext">{name}</h6></div>
    </div>

    </>
  )
}

export default Categories