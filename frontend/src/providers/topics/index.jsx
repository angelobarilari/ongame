import { createContext, useState } from "react";

export const TopicsDataContext = createContext([]);

export const TopicsDataProvider = ({ children }) => {
    const [topics, setTopics] = useState([]);

    return (
        <TopicsDataContext.Provider
            value={{
                topics,
                setTopics,
            }}
        >
            {children}
        </TopicsDataContext.Provider>
    );
};
