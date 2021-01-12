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
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
