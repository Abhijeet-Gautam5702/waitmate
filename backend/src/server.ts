import connectDB from "./config/database";
import { env } from "./config/env";
import app from "./app";

(async () => {
  await connectDB();

  app.listen(env.app.port, () => {
    console.log(`Server running on port ${env.app.port}`);
  });
})();
