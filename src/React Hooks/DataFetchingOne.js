import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchingOne() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(reponse => {
            setLoading(false);
            setPost(reponse.data);
            setError("");
        })
        .catch(error => {
            setLoading(false);
            setPost({});
            setError("Something went wrong!");
        });
    }, [])

    return (
        <div>
            <h2>
                {loading ? "Loading" : post.title}
                {error ? error : null}
            </h2>
        </div>
    )
}

export default DataFetchingOne;
