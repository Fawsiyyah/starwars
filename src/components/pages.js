import { useEffect, useState } from 'react';
import axios from 'axios';


// const StyledMovieCard = styled.div`
// flex-basics: calc(33.33%)
// padding: 0 15px;
// margin: 15px 0;
// width: 100%`;

// function Page() {
//     const {onLoad, setOnLoad} = useState(true);
//     const {data, setData} = useState([]);
//     //const {error, setError} = useState(null);

//     // useEffect (() => {
//     //     const fetchData = async () => {
//     //         setOnLoad(true);
//     //         try {
//     //             const res = await fetch("https://swapi.dev/api/films");
//     //             const data = await res.json();
//     //             setOnLoad(false);
//     //             setData(data.results);     
//     //         } catch (error) {
//     //             setOnLoad(false);
//     //             setError(error.message)
//     //         }   
//     //     };
//     //     fetchData();
//     // }, []);

//     // const Movies = data?.map((result, index) => {
//     //       <MovieCard key={index} {...result} />
//     //       return <MovieCard key={result.index} {...result} /> ;
//     // });

//     useEffect(() => {
//         axios.get('https://swapi.dev/api/films')
//             .then(response =>{
//                 setData(response.data.results);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//             .finally(() => setOnLoad(false));
//     }, []);
//   return (
//     <>
//          <Header />
//           {onLoad && (
//             <svg 
//             xmlns="https://www.w3.org/2000/svg"
//             viewBox="0 0 612 612"
//             width="512"
//             height="512"
//             className="loading"
//             >
//                 <g>
//                     <path d="M45.786 171.764h42.865a8.994 8.994 0 0 0 0-17.988H61.465a287.68 287.68 0 0 1 11.308-16.797h140.894a8.994 8.994 0 0 0 0-17.988H68.236a8.994 8.994 0 0 0-7.195 3.598c-8.578 11.441-16.363 23.504-23.138 35.856a8.997 8.997 0 0 0 .144 8.907 8.996 8.996 0 0 0 7.739 4.412zM17.557 244.009h129.962a8.994 8.994 0 0 0 0-17.988H29.25a278.7 278.7 0 0 1 5.426-16.797h53.977a8.994 8.994 0 0 0 0-17.988H28.422a8.994 8.994 0 0 0-8.396 5.77 293.742 293.742 0 0 0-11.207 35.885 8.986 8.986 0 0 0 1.668 7.681 8.988 8.988 0 0 0 7.07 3.437zM170.935 411.612a8.994 8.994 0 0 0-8.994-8.994H34.606a277.724 277.724 0 0 1-5.392-16.797h245.107a8.994 8.994 0 0 0 0-17.988H17.53a8.992 8.992 0 0 0-8.74 11.115 296.258 296.258 0 0 0 11.148 35.876 8.994 8.994 0 0 0 8.401 5.781h133.6a8.993 8.993 0 0 0 8.996-8.993zM277.961 483.857a8.994 8.994 0 0 0-8.994-8.994H72.652a289.298 289.298 0 0 1-11.29-16.797h27.293a8.994 8.994 0 0 0 0-17.988H45.678a8.992 8.992 0 0 0-7.884 13.319c6.746 12.302 14.519 24.361 23.102 35.845a8.997 8.997 0 0 0 7.204 3.609h200.866a8.995 8.995 0 0 0 8.995-8.994z" />
//                     <path d="M306.001.001c-78.707 0-153.495 29.832-210.589 83.998a8.996 8.996 0 0 0 6.191 15.52h80.702a8.994 8.994 0 0 0 0-17.988h-56.772c51.05-41.129 114.289-63.541 180.469-63.541 155.8 0 283.088 124.356 287.855 279.02H18.146a287.53 287.53 0 0 1 .888-15.542h262.421a8.994 8.994 0 0 0 0-17.988H10.894a9 9 0 0 0-8.938 7.973A306.075 306.075 0 0 0 0 306c0 11.414.65 22.976 1.929 34.372a8.993 8.993 0 0 0 8.938 7.989h195.515a8.994 8.994 0 0 0 0-17.988H19.021a292.963 292.963 0 0 1-.875-15.374h575.71c-.16 5.16-.459 10.285-.888 15.374H482.133a8.994 8.994 0 0 0 0 17.988h108.753a284.79 284.79 0 0 1-3.582 19.471h-50.321a8.994 8.994 0 0 0 0 17.988h45.763a286.206 286.206 0 0 1-21.917 54.256H416.575a8.994 8.994 0 0 0 0 17.988h133.906c-50.912 81.56-141.459 135.946-244.484 135.946-66.3 0-129.609-22.463-180.669-63.702h49.163a8.994 8.994 0 0 0 0-17.988h-73.05a8.995 8.995 0 0 0-6.198 15.513C152.33 582.109 227.177 612 306.001 612 474.728 611.999 612 474.727 612 306S474.728.001 306.001.001z" />  
//                     <path d="M473.948 280.009a57.93 57.93 0 0 0 18.881-3.139c37.252-12.808 54.36-61.622 38.134-108.816-13.258-38.561-45.379-65.495-78.107-65.495a57.93 57.93 0 0 0-18.879 3.137c-37.252 12.808-54.36 61.623-38.134 108.816 13.26 38.563 45.379 65.497 78.105 65.497zm-34.12-157.3a39.943 39.943 0 0 1 13.031-2.159c25.171 0 50.294 21.939 61.099 53.354 12.999 37.812.897 76.373-26.974 85.957a39.948 39.948 0 0 1-13.033 2.161c-25.168 0-50.292-21.942-61.096-53.357-13.002-37.814-.901-76.375 26.973-85.956zm38.294 63.515c3.653 10.625.014 21.507-8.127 24.306-8.141 2.799-17.702-3.546-21.354-14.171-3.653-10.625-.014-21.507 8.127-24.306 8.141-2.798 17.701 3.546 21.354 14.171z" />  
//                 </g>
//             </svg>
//          )}
//          {/* { error && (
//             <div className="error">{`There is a problem fetching the data - ${error}`}</div>
//          )
//          } */}
//          {data.results.map((movies, index) => (
//             <StyledMovieCard key={movies.episode_id}>
//                 <div className="movie-list">
//                     <div className="card-details">
//                         <h3>{movies.title}</h3>
//                         <p className="date">{dateFormat(movies.release_date)}</p>
//                         <p className="summary">{movies.opening_crawl}</p>
//                         <hr className="line-break"/>
//                         <a href="#">More Info</a>
//                     </div>
//                 </div>
//             </StyledMovieCard>
//          ))}
//      {/* <section className="movie-list">{Movies}</section>  */}
//     </>
//   );
// };

// export default Page;
function Released(props) {
  return <div className="date">{props.date}</div>;
}

function Title(props) {
  return <div className="title">{props.movieTitle}</div>;
}

function OpeningCrawl(props) {
  return <div className="openingCrawl">{props.openingCrawl}</div>;
}

const MoreInfo = () => {
  return <div className="moreInfo">More Info</div>;
};





const Loading = () => {
    return (
      <div>
        <img src={require("./loading-icon.png")} className="loadingIcon"  alt="load"/>
      </div>
    );
  };
  

const Post = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(`https://swapi.dev/api/films`);
          setData(response.data);
          setError(null);
        } catch (err) {
          setError(err.message);
          setData(null);
        } finally {
          setLoading(false);
        }
      };
      getData();
    });
    return (
      <div>
        {loading && <Loading />}
        {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
        <div className="movieCardContainer">
          {data &&
            data.results.map((item, index) => {
              const d = new Date(item.release_date);
              const releaseDate = d.toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });
              const openingCrawlParagraph =
                item.opening_crawl.length > 260
                  ? `${item.opening_crawl.substring(0, 260)}...`
                  : item.opening_crawl;
  
              return (
               
                <div key={item.episode_id} className="movieCard">
                  <Title movieTitle={item.title} />
                  <Released date={releaseDate} />
                  <OpeningCrawl openingCrawl={openingCrawlParagraph} />
                  <MoreInfo />
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  
  export default Post;