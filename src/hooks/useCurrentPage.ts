import { useMemo } from "react"
import { CurrentPageEnum } from "../CommonTypes"

const useCurrentPage = () => useMemo(() => {
    const pathname = window.location.pathname
    switch (pathname) {
        case '/dorf1.php': {
            return CurrentPageEnum.FIELDS
        }
        case '/dorf2.php': {
            return CurrentPageEnum.TOWN
        }
        case '/build.php': {
            return CurrentPageEnum.BUILDING
        }
        case '/': {
            return CurrentPageEnum.LOGIN
        }
        default: {
            return CurrentPageEnum.UNKNOWN
        }
    }
}, [window.location.href])

export default useCurrentPage