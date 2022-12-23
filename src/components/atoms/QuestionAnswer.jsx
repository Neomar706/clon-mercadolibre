

export const QuestionAnswer = function({ question, answer, answerDate }){
    return (
        <div className='mt-4'>
            <div className='text-md text-gray-700 font-roboto'>{ question }</div>
            <div className='flex mt-2 ml-3'>
                <div className="min-w-3">
                    <div className='border-gray-300 border-l-2 border-b-2 w-3 h-3' />
                </div>
                <div className='*h-full *flex *items-center ml-2 text-md text-gray-500 font-roboto'>
                    { answer }
                    <span className='text-sm ml-2'>{ answerDate }</span>
                </div>
            </div>
        </div>
    )
}