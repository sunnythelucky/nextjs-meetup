import { useEffect, useState } from "react";
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

const HomePage = () => {
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		// send a http request and fetch data
		setLoadedMeetups(DUMMY_MEETUPS);
	}, []);

	return <MeetupList meetups={loadedMeetups} />;
};

export async function getStaticProps() {
	
	return {
		props: {
			initialData: DUMMY_MEETUPS,
		},
	};
}

export default HomePage;
