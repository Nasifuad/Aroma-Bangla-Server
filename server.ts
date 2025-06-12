import app from "./app";
import { connectDB } from "./DB/database";
import { config } from "./config/config";

connectDB().then(() => {
  try {
    app.listen(config.PORT, () => {
      console.log("Server is running on port", config.PORT);
    });
  } catch (error) {
    console.log("error at server", error);
  }
});
