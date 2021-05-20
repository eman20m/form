
import { axiosInstance } from "../axiosConfig"
import { useEffect, useState } from 'react';


const Home=()=>{
    
        
    const [searchValue, setSearchValue] = useState("")
    const [books, setBooks] = useState()

    const getBooks = ()=>{
        axiosInstance.get("", {
            params: {
                q: (searchValue ? searchValue : "react")
            }
        }).then((res) => {
            setBooks(res.data.items)
        })
    }

        useEffect(() => {
        getBooks()
        }, [])

        useEffect(() => {
            getBooks()
        }, [searchValue])

        const handleInput = (event) => {
            setSearchValue(event.target.value)
        }



        const getCards = () => {
            if (books) {
                // console.log(books)
                let bookContent = []
                for (let index = 0; index < books.length; index++) {
                    bookContent.push(
                        <div className="col-3 float-left bg-warning m-2" style={{height:'300px'}}>
                            <h4 tag="h5">{books[index]["volumeInfo"]["title"]}</h4>
                            <p tag="h6" className="mb-2 text-secondary">{books[index]["volumeInfo"]["categories"]}</p>
                            <p>{books[index]["volumeInfo"]["authors"]}</p>
                        </div>
                    )
                }
                return bookContent
            } else {
                return (
                    <h1>loading</h1>
                )
            }

        }



        return (
            <div className="container" style={{ textAlign: "center" }}>
                <h1>Book Finder App</h1>
                <input value={searchValue} onChange={handleInput} type="text" name="search" id="search" placeholder="Enter book name" className="" /><br/>
                <div className="books col-12">
                    {getCards()}
                </div>
            </div>
        )

    
}

export default Home;