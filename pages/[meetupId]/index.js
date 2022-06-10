import MeetupDetail from "../../components/meetups/MeetupDetail";
import meetupImage from "../../public/Munich.jpeg";

const MeetupDetails = () => {
	return (
		<MeetupDetail
			title="Our 1st Meetup at Munich"
			address="28 Rotkreuzplatz, Munich, 29301, Bavaria, Germany"
			description="Just come with your Bier and Bretzel"
		/>
	);
};

export default MeetupDetails;
