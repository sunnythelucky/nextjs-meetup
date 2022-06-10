import MeetupList from "../components/meetups/MeetupList";
import meetupImage from "../public/Munich.jpeg";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image: meetupImage,
		address: "7 Kenaston Gnds, North York, M2K 0E9, ON, Canada",
		description: "This is a meetup for people who like to learn about the latest tech.",
	},
	{
		id: "m2",
		title: "A First Meetup",
		image: meetupImage,
		address: "7 Kenaston Gnds, North York, M2K 0E9, ON, Canada",
		description: "This is a meetup for people who like to learn about the latest tech.",
	},
	{
		id: "m3",
		title: "A First Meetup",
		image: meetupImage,
		address: "7 Kenaston Gnds, North York, M2K 0E9, ON, Canada",
		description: "This is a meetup for people who like to learn about the latest tech.",
	},
	{
		id: "m4",
		title: "A First Meetup",
		image: meetupImage,
		address: "7 Kenaston Gnds, North York, M2K 0E9, ON, Canada",
		description: "This is a meetup for people who like to learn about the latest tech.",
	},
	{
		id: "m5",
		title: "A First Meetup",
		image: meetupImage,
		address: "7 Kenaston Gnds, North York, M2K 0E9, ON, Canada",
		description: "This is a meetup for people who like to learn about the latest tech.",
	},
];

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;
// 	// fetch data from an API (e.g a database, credentials, etc)
// 	// because it's only rendered on the server
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

const HomePage = (props) => {
	return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
	// Fetch necessary data for the blog post using API
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		// revalidate: 3600,
	};
}

export default HomePage;
