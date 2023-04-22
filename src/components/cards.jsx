import dateFormat from "./date";


const MovieCard = (props) => {
    return (
        <div className="card">
            <div className="card-details">
                <h3>{props.title}</h3>
                <p className="date">{dateFormat(props.release_date)}</p>
                <p className="summary">{props.opening_crawl}</p>
                <hr className="line-break"/>
                <a href="#">More Info</a>
            </div>
        </div>
    );
};

export default MovieCard;