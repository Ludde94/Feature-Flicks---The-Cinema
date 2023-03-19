import DisplayChairs from "../components/DisplaySeats";
import {useParams} from 'react-router-dom'

const book = () => {
    const {id} = useParams()
    return (
        <><DisplayChairs screeningId={id} /></>
    )
}

export default book;