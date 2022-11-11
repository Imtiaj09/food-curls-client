import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <section className="mb-8 mt-8 dark:bg-gray-400 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl dark:text-black">
          Blog page Questions & Answer
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold dark:text-black">
              Difference between SQL and NoSQL?
            </h3>
            <p className="mt-1 dark:text-black">
              <span className="font-bold">Answer:</span> SQL is the programming
              language used to interface with relational databases. (Relational
              databases model data as records in rows and tables with logical
              links between them). NoSQL is a class of DBMs that are
              non-relational and generally do not use SQL.
            </p>
          </div>
          <div>
            <h3 className="font-semibold dark:text-black">
              What is JWT, and how does it work?
            </h3>
            <p className="mt-1 dark:text-black">
              <span className="font-bold">Answer:</span> JSON Web Token (JWT) is
              an open standard (RFC 7519) for securely transmitting information
              between parties as JSON object. It is compact, readable and
              digitally signed using a private key/ or a public key pair by the
              Identity Provider(IdP).
            </p>
          </div>
          <div>
            <h3 className="font-semibold dark:text-black">
              What is the difference between javascript and NodeJS?
            </h3>
            <p className="mt-1 dark:text-black">
              <span className="font-bold">Answer:</span> JavaScript is a simple
              programming language that can be used with any browser that has
              the JavaScript Engine installed. Node. js, on the other hand, is
              an interpreter or execution environment for the JavaScript
              programming language.
            </p>
          </div>
          <div>
            <h3 className="font-semibold dark:text-black">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="mt-1 dark:text-black">
              <span className="font-bold">Answer:</span> How NodeJS handle
              multiple client requests? NodeJS receives multiple client requests
              and places them into EventQueue. NodeJS is built with the concept
              of event-driven architecture. NodeJS has its own EventLoop which
              is an infinite loop that receives requests and processes them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
