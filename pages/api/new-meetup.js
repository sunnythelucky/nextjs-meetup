import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
	if ((req.method = "POST")) {
		try {
			const data = req.body;

			const URL = "<your server URL>";
			const client = await MongoClient.connect(URL);
			const db = client.db();

			const meetupsCollection = db.collection("meetups");

			const result = await meetupsCollection.insertOne(data);
			console.log(result);
			client.close();

			res.status(201).json({ message: "Meetup created successfully" });
		} catch (e) {
			console.error(e);
			res.status(500).json({ message: "Something went wrong, this is the error you got : " + e });
		}
	}
}

export default handler;
