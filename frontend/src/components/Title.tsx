

interface Title{
    text1: string;
    text2: string,
    className?: string
}

const Title = ({text1, text2, className=""}: Title) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3'>
        <p className={`text-gray-500 uppercase ${className} `}>
            {text1}
            &nbsp;
            <span className={`font-medium text-gray-700 uppercase ${className}`}>{text2}</span>
        </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  )
}

export default Title
