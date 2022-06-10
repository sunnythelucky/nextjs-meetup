import MeetupDetail from "../../components/meetups/MeetupDetail";
import meetupImage from "../../public/Munich.jpeg";

const MeetupDetails = (props) => {
	return (
		<MeetupDetail
			title="Our 1st Meetup at Munich"
			address="28 Rotkreuzplatz, Munich, 29301, Bavaria, Germany"
			description="Just come with your Bier and Bretzel"
		/>
	);
};

export function getStaticPaths() {
	return {
		// set fallback as false means that you made all the supported path down below
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	//fetch data for a single meetup
	const meetupId = context.params.meetupId;
	console.log(meetupId);

	return {
		props: {
			meetupData: {
				title: "Our 1st Meetup at Munich",
				address: "28 Rotkreuzplatz, Munich, 29301, Bavaria, Germany",
				description: "Just come with your Bier and Bretzel",
				image: await meetupImage,
				id: meetupId,
			},
		},
	};
}

export default MeetupDetails;
