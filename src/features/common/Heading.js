
const Heading = ({headingtext}) => {
    return (
        <>
            <div className='mb-10 flex justify-center relative'>
                <div className='border border-1 border-pink-300 w-full'>
                </div>
                <span className='absolute text-center px-10 bottom-3 bg-white  inline-table -top-5'>
                    <h1 className='text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-5 textplayfair'>{headingtext}</h1>
                </span>
            </div>
        </>
    )
}

export default Heading