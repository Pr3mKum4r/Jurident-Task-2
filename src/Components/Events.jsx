import child from "../assets/child.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import EventCard from "../Components/EventCard.jsx";

const Events = () => {
  return (
    <div className="font-roboto">
      <div className="w-full min-h-fit bg-gray-200 pb-20">
        <div className="pt-20 w-1/2 mx-auto mt-auto mb-auto ml-80">
          <h1 className="text-5xl font-bold pb-10 leading-normal">
            A day with our wonderful children
          </h1>
          <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
          <span className="mr-10 text-sm">
            Opp Opolo round about, Yenagoa,Bayelsa,Nigeria
          </span>
          <FontAwesomeIcon icon={faCalendar} className="mr-2" />
          <span className="text-sm">April 13,2022 8:30 AM</span>
        </div>
      </div>
      <div className="w-1/2 ml-80">
        <h1 className="text-4xl font-bold pb-10 mt-16">About</h1>
        <p>
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </p>
        <br />
        <p>
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
          sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
          volutpat dui. A bibendum viverra eu cras.{" "}
        </p>
        <p>
          Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit
          dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare
          tristique. Integer faucibus duis praesent tempor feugiat ornare in.
          Erat libero egestas porttitor nunc pellentesque mauris et pulvinar
          eget.
        </p>
        <br />
        <img src={child} alt="child image" style={{ borderRadius: "20px" }} />
        <br />
        <p className="pb-32">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </p>
      </div>
      <div className="otherEventsContainer">
        <div className="flex">
          <div>
            <h1 className="text-4xl font-bold pb-10 ml-80 w-50">
              Other events
            </h1>
          </div>
          <div>
            <hr className="w-96 mt-6 ml-6"/>
          </div>
        </div>
        <EventCard
          date={23}
          month={"APR"}
          text={"Say no to plastic usage and save the  planet"}
        />
        <EventCard date={30} month={"APR"} text={"Monthly orphanage visits"} />
      </div>
    </div>
  );
};

export default Events;
