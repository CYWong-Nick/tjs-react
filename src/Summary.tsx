import { FC } from "react";
import useCurrentPage from "./hooks/useCurrentPage";
import styled from "styled-components";

const StyledContainer = styled.div`
    background: white; 
    margin: 0 20px; 
    border-radius: 10px; 
    padding: 5px; 
`

const Summary: FC = () => {

    const currentPage = useCurrentPage()

    return <StyledContainer>
        <div>Current Page: {currentPage}</div>
    </StyledContainer>
}

export default Summary