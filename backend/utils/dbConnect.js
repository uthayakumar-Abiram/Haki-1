const mongoose =require("mongoose");

const dbConnect = () => {
  try {
    const mongoString = process.env.MONGODB_URI
    mongoose.connect(mongoString,
      // { 
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,}
      );
    const database = mongoose.connection
    
     database.once('connected', () => {
    console.log('Database Connected');
})
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports =  dbConnect;