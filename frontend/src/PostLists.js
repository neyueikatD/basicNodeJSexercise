import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PostLists() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/posts");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);}
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("An error occurred while fetching the data.");
            setLoading(false);
        }
        };
        fetchData();
    }, []);
    
    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>{error}</p>;
    return (
        <ul>
            {data.map((d) => (
                <li key={d.slug}>
                    <Link to={`/posts/${d.slug}`}>
                        <h3>{d.title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
}