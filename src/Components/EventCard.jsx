import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const EventCard = (props) => {
  return (
    <div className="w-fit-class bg-blue-50 rounded-lg flex flex-wrap mt-5 pb-5 mx-auto h-fit m-10">
      <div className="my-auto m-2 mr-5 ml-5 w-[5%]">
        <h1 className="text-4xl">{props.date}</h1>
        <p>{props.month}</p>
      </div>
      <div className='w-[50%]'>
        <div className="mt-8 ml-4 text-xs mb-2">
          <div><p>NEXT EVENTS</p></div>
          <div><hr className='w-10 mt-1 ml-2 h-1 bg-blue-700'/></div>
        </div>
        <div className="ml-4 text-xl font-bold">
          <h3>{props.text}</h3>
        </div>
      </div>
      <div className="mx-auto my-auto m-[40%]">
      <div className="rounded-full w-12 h-12 bg-white mt-10 pt-3 pl-4">
      <FontAwesomeIcon icon={faArrowRight} size="lg"/>
      </div>
      </div>
    </div>
  );
};

export default EventCard;
