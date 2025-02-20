import React from 'react'

export default async function Page({ params }) {
    const name = (await params).name

    // db query 

    return (
        <div>
            This is all about {name}
        </div>
    )
}
