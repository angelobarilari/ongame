import { createContext, useState } from "react";

const TopicsDataContext = createContext([]);

const TopicsDataProvider = ({ children }) => {
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

export { TopicsDataContext, TopicsDataProvider }
