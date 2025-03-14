import React from 'react'

interface CardProps {
    title: string
    description: string
    imageUrl?: string
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            {imageUrl && (
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default Card