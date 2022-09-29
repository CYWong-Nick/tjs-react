import { FC } from "react";
import useCurrentPage from "./hooks/useCurrentPage";

const Summary: FC = () => {

    const currentPage = useCurrentPage()

    return <div>
        <div>Current Page: {currentPage}</div>
    </div>
}

export default Summary