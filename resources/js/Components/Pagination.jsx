import '../.././css/style.css';
import React, {useState} from "react"


export default function Pagination({totalData, itemsPerPage, setCurrentPage, currentPage}) {
    
    const [pageNumberLimit, setPageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    let pages = []

    for (let i = 1; i < Math.ceil(totalData/itemsPerPage); i++) {
       pages.push(i)
    }

    const renderPageNumbers = pages.map((number) => {

        if (number <= maxPageNumberLimit && number > minPageNumberLimit) {
            return (
                <li className={`page-item`}>
                    <button 
                        key={number} 
                        className={`page-link text-xl pagination-list ${currentPage === number ? "pagination-active" : null}`}  
                        onClick={() => setCurrentPage(number)}
                    >{number}
                    </button>
                </li>   
            )
        } else {
            return null
        }
    })

    const handleNextBtn = () => {
        setCurrentPage(nextPage => nextPage + 1)

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(prevPage => prevPage - 1)

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    let pageIncrementBtn = null
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li className="page-item"><button className="page-item text-xl pagination-list" onClick={handleNextBtn}> &hellip; </button> </li>
    }

    let pageDecrementBtn = null
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li className="page-item"><button className="page-item text-xl pagination-list" onClick={handlePrevBtn}> &hellip; </button> </li>
    }

    return (
        <div>
            <div className="flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none">
                        <li className="page-item">
                            <button 
                                className="page-link text-xl relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" 
                                onClick={handlePrevBtn}
                                disabled={currentPage === pages[0] ? true : false}
                                >Previous
                            </button>
                        </li>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        <li className="page-item">
                            <button 
                                className="page-link text-xl relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" 
                                onClick={handleNextBtn}
                                disabled={currentPage === pages[pages.length - 1] ? true : false}
                                >Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}