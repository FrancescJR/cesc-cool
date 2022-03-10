import React from 'react'

type Props = {
    title: string
}

const BookTab: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>
}

export default BookTab