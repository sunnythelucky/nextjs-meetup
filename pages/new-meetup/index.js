import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
	const AddMeetupHandler = (enteredMeetupData) => {
		console.log(enteredMeetupData);
	};
	return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
};

export default NewMeetupPage;
