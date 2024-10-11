import { Client, Databases, Account} from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66fa5f0400095350f9b6'); 

export const account = new Account(client);
export { ID } from 'appwrite';
