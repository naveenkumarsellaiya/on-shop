import React, { useState } from "react";
import book1 from "../Assests/Cate/books/bimg0.jpeg";
import book2 from "../Assests/Cate/books/bimg1.jpeg";
import book3 from "../Assests/Cate/books/bimg2.jpeg";
import book4 from "../Assests/Cate/books/bimg3.jpeg";
import book5 from "../Assests/Cate/books/bimg4.jpeg";
import book6 from "../Assests/Cate/books/bimg5.jpeg";
import book7 from "../Assests/Cate/books/bimg6.jpeg";
import book9 from "../Assests/Cate/books/bimg8.jpeg";
import book10 from "../Assests/Cate/books/bimg9.jpeg";
import book11 from "../Assests/Cate/books/bimg10.jpeg";
import book12 from "../Assests/Cate/books/bimg11.jpeg";
import book13 from "../Assests/Cate/books/bimg12.webp";
import book14 from "../Assests/Cate/books/bimg13.jpeg";
import book15 from "../Assests/Cate/books/bimg14.jpeg";
import book16 from "../Assests/Cate/books/bimg15.jpeg";
import book17 from "../Assests/Cate/books/bimg16.jpeg";
import book18 from "../Assests/Cate/books/bimg17.webp";
import book19 from "../Assests/Cate/books/bimg18.jpeg";
import book20 from "../Assests/Cate/books/bimg19.jpeg";

const books = [
  { name: "THIRUKKURAL", image: book1, price: 899, description: "An ancient Tamil text on ethics and morality." },
  { name: "The Law Of Success", image: book2, price: 399, description: "Principles for achieving success." },
  { name: "Think and Grow Rich", image: book3, price: 349, description: "A self-help classic by Napoleon Hill." },
  { name: "The Perfect Programmer", image: book4, price: 299, description: "Programming tips and techniques." },
  { name: "JavaScript Data Structures", image: book5, price: 199, description: "A guide to mastering JavaScript." },
  { name: "C++ Programming", image: book6, price: 399, description: "Learn the fundamentals of C++." },
  { name: "Alien Clay", image: book7, price: 435, description: "A gripping science fiction novel." },
  { name: "The Book of Indian Queens", image: book9, price: 549, description: "Stories of powerful queens of India." },
  { name: "Lone Wolf America Falls", image: book10, price: 269, description: "A story of survival and courage." },
  { name: "Kangai Konda Solalan", image: book11, price: 699, description: "A classic Tamil historical novel." },
  { name: "Studies in Tamil Literature", image: book12, price: 599, description: "Exploring Tamil literature and history." },
  { name: "Biography of Veer Shivaji", image: book13, price: 749, description: "A detailed account of Shivaji's life." },
  { name: "Algorithms", image: book14, price: 379, description: "Understanding algorithms made easy." },
  { name: "Early Indians", image: book15, price: 399, description: "A journey into the history of India." },
  { name: "Kids Storybook", image: book16, price: 549, description: "Stories for young readers." },
  { name: "Patrick Rothfuss Collection", image: book17, price: 299, description: "Fantasy tales from Patrick Rothfuss." },
  { name: "Biography of Virat Kohli", image: book18, price: 749, description: "The story of India's cricket star." },
  { name: "Bhagavad Gita", image: book19, price: 229, description: "A spiritual and philosophical classic." },
  { name: "Ruskin Bond's Works", image: book20, price: 197, description: "A collection of stories by Ruskin Bond." },
];

const Book = ({ addToCart,toggle }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Books</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book, index) => (
          <div
          key={index}
          className={`p-4 bg-gray-100 rounded shadow-md hover:shadow-lg transition-all flex flex-col justify-between  hover:scale-105 hover:ease-linear hover:duration-700 cursor-pointer items-center ${toggle?"bg-gray-500":"bg-gray-100"}`}
      >
            <img
              src={book.image}
              alt={book.name}
              className="w-full md:w-fit h-40 object-cover" 
            />
            <h3 className="mt-2 text-lg font-bold">{book.name}</h3>
            <p className="text-gray-500">₹{book.price.toLocaleString()}</p>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-600"
                onClick={() => addToCart(book)}
              >
                Add to Cart
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => setSelectedBook(book)}
              >
                View 
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg relative w-full max-w-md flex flex-col justify-center items-center">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedBook(null)}
            >
              &times;
            </button>
            <img
              src={selectedBook.image}
              alt={selectedBook.name}
              className="w-fit h-60 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold">{selectedBook.name}</h3>
            <p className="text-gray-500">
                ₹{selectedBook.price}</p>
            <p className="mt-2 text-gray-700">{selectedBook.description}</p>
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={() => {
                addToCart(selectedBook);
                setSelectedBook(null);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
