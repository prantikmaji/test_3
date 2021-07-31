import React from 'react'

const news_card = ({news}) => {
    return (
        <div className="bg-white rounded-lg h-100% w-100% p-2 m-0">
            <img className="rounded-lg" src={news.urlToImage} alt="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <p className="text-15px font-bold" >{news.title}<a href={news.url} >. Know more</a></p>
        </div>
    )
}

export default news_card;
