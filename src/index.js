import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 0,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41vw+RmEi4L._SX327_BO1,204,203,200_.jpg",
    title: "The Martian",
    author: "Andy Weir",
  },
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61nV3oTC8vL._SX326_BO1,204,203,200_.jpg",
    title: "Legend",
    author: "Marie Lu",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61CzW79X7CL._SX331_BO1,204,203,200_.jpg",
    title: "Prodigy",
    author: "Marie Lu",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
