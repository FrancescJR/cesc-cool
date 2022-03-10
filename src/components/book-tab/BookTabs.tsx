import React, { ReactElement, useState } from "react"
import BookTabTitle from "./BookTabTitle";

type Props = {
    children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <div>
            <ul>
                {children.map((item, index) => (
                    <BookTabTitle
                        key={index}
                        title={item.props.title}
                        index={index}
                        setSelectedTab={setSelectedTab}
                    />
                ))}
            </ul>
            {children[selectedTab]}
        </div>
    )
}

export default Tabs