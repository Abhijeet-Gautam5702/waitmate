import { Client, Account } from "node-appwrite";
import { env } from "./env";

class AppwriteAuth {
  private client: Client;
  private account: Account;

  constructor() {
    this.client = new Client()
      .setEndpoint(env.appwrite.endpoint)
      .setProject(env.appwrite.projectId);

    this.account = new Account(this.client);
  }

  getClient(): Client {
    return this.client;
  }

  getAccount(): Account {
    return this.account;
  }
}

const appwriteAuth = new AppwriteAuth();
export default appwriteAuth;
