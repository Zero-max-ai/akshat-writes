import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <span>Oh no! You just got lost !</span>
      <span>Don't worry I got you! <Link to={'/'} className="">Click here</Link> to go back home.</span>
    </div>
  )
}

export default NotFound;
