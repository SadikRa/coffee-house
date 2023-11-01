
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to={'/addCoffee'}><button className="btn btn-error">add a coffee</button></Link>
        </div>
    );
};

export default Home;