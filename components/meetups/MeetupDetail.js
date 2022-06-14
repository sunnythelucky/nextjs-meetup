import Image from "next/image";
import meetupImage from "../../public/Munich.jpeg";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
	return (
		<section className={classes.detail}>
			<Image src={meetupImage} alt={props.image.alt} layout="fill" />
			<h1 className={classes.title}>{props.title}</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
		</section>
	);
};

export default MeetupDetail;
