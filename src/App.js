import "./App.css";
import Nav from "./nav/Nav";

import Shop from "./nav/Shop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Favorites from "./nav/Favorites";
import {useState} from "react";
import {BooksData} from "./Data";
import Desc from "./nav/Desc";
import Search from "./nav/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner} from "react-bootstrap";

function App() {
    const [books, setBooks]=useState(BooksData);
    const [rating, setRating]=useState(0);
    const handleRating=(x) => setRating(x);
    const [text, setText]=useState("");
    const handleText=(e) => setText(e.target.value);
    const [loading, setLoading]=useState(false);
    // to change the like from false to true
    const handelFilter=(book) => {
        books.filter(el => el.like==true)
    }

    return (
        <div className="App">
            {loading? (
                <span>
                    <Spinner animation="border" role="status"></Spinner> Loading...
                </span>
            ):(
                <Router>
                    <Nav />
                    <switch>
                        <Route
                            exact
                            path="/shop"
                            render={() => (
                                <Search
                                    rating={rating}
                                    text={text}
                                    handleText={handleText}
                                    handleRating={handleRating}
                                />
                            )}
                        />

                        <Route
                            exact
                            path="/shop"
                            render={() => (
                                <Shop
                                    books={books.filter(
                                        (el) =>
                                            el.name.toLowerCase().includes(text.toLowerCase())&&
                                            el.rating>=rating
                                    )}
                                />
                            )}
                        />
                        <Route
                            path="/Favorites"

                            render={() => (
                                <Favorites book={books.filter(
                                    (el) =>
                                        el.like===true
                                )} />
                            )}
                        />
                        <Route
                            path="/book/:id"
                            render={(props) => <Desc books={books} />}
                        />
                    </switch>
                </Router>
            )}
        </div>
    );
}

export default App;
