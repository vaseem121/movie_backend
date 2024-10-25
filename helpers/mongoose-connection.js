var mongoose = require("mongoose");
const mongoAtlasUri = `mongodb+srv://bansh:vRK22pVBwOo6T2lV@smartq.uh1kna9.mongodb.net/moviedatabase`

function mongooseConnection() {
    try {
        // Connect to the MongoDB cluster
        mongoose.connect(
            mongoAtlasUri,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log("Mongoose is connected"),
        );
    } catch (e) {
        console.log("could not connect");
    }
    const dbConnection = mongoose.connection;
    dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    dbConnection.once("open", () => console.log("Connected to DB!"));

}

module.exports = mongooseConnection;