import { Client, ID, Storage } from "appwrite";

const bucketId = '66fb7d9c000666ea9a0d'

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('66fa5f0400095350f9b6');

const storage = new Storage(client);

export function getImg(fileId){
    return storage.getFilePreview(bucketId, fileId).href
}

export let createdId = ID.unique()

export async function addFile(uploadingFile){
    await storage.createFile(
        bucketId,
        createdId,
        uploadingFile
    )
}
