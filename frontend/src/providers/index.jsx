import { CategoriesDataProvider } from "./categories";
import { TopicsDataProvider } from "./topics";
import { UserDataProvider } from "./users";

const Provider = ({ children }) => {
    return (
        <TopicsDataProvider>
            <CategoriesDataProvider>
                <UserDataProvider>{children}</UserDataProvider>
            </CategoriesDataProvider>
        </TopicsDataProvider>
    );
};

export default Provider;
