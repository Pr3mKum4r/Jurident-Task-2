import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const EventCard = (props) => {
  return (
    <div className="w-1/2 ml-80 bg-blue-50 rounded-lg flex mt-5 h-36 m-10">
      <div className="mt-6 ml-8">
        <h1 className="text-4xl ">{props.date}</h1>
        <p>{props.month}</p>
      </div>
      <div>
        <div className="mt-8 ml-4 text-xs mb-2 flex ">
          <div><p>NEXT EVENTS</p></div>
          <div><hr className='w-10 mt-1 ml-2 h-1 bg-blue-700'/></div>
        </div>
        <div className="ml-4 text-xl font-bold w-96">
          <h3>{props.text}</h3>
        </div>
      </div>
      <div className="rounded-full w-12 h-12 bg-white mt-10 ml-20 pt-3 pl-4">
      <FontAwesomeIcon icon={faArrowRight} size="lg"/>
      </div>
    </div>
  );
};

export default EventCard;
