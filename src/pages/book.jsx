import DisplayChairs from '../components/DisplaySeats'
import { useParams } from 'react-router-dom';

 const Book = () => {
    const { id } = useParams();
    return (
        <><DisplayChairs screeningId={id} /></>
    );
}
export default Book;