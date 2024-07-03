"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

export default function JavaTechNews() {
    
    const [articles, setArticles] = useState<Article[]>([]);
    const [displayedArticles, setDisplayedArticles] = useState(12);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'java',
                        apiKey: '1cf4479a0fa74a9b9dc49d747ff5cb9e',
                        language: 'en',
                        sortBy: 'publishedAt'
                    }
                });
                setArticles(response.data.articles);
            } catch (error) {
                setError('Failed to fetch news articles');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const handleShowMore = () => {
        setDisplayedArticles(prevCount => prevCount + 6);
    };

    return (
        <div className="relative mt-[65px] mx-auto p-6 bg-transparent rounded-lg shadow-md z-[20] max-w-screen-xl">
            <h1 className="text-3xl text-white font-bold mb-4">Tech News</h1>
            {loading && <p>Loading news...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && articles.length === 0 && <p>No news articles found.</p>}
            {!loading && !error && articles.length > 0 && (
                <>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {articles.slice(0, displayedArticles).map((article, index) => (
                            <div key={index} className="flex flex-col bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
                                <h2 className="text-xl text-white font-semibold mb-2">{article.title}</h2>
                                <p className="text-gray-300 mb-2">{article.description}</p>
                                {article.urlToImage && (
                                    <img src={article.urlToImage} alt={article.title} className="mb-2 rounded-lg" />
                                )}
                                <div className="mt-auto">
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-800">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {displayedArticles < articles.length && (
                        <div className="text-center mt-6">
                            <button 
                                onClick={handleShowMore} 
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
