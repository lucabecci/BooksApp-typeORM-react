import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-4">BOOK APP</h1>
        <p className="lead">
          This is simple app where you can save your books and eliminated. This
          app was created with typescript, react, node, typeORM, express and
          postgreSQL(i was used ElepanthSQL for the host of my postgreSQL
          databse in the cloud).
        </p>
        <hr className="my-4"></hr>
        <p>
          This app was created by Luca Becci for more information go to{" "}
          <Link className="lead" to="/creator">
            Creator
          </Link>{" "}
          page.
        </p>
      </div>
    </Fragment>
  );
}

export default Home;
