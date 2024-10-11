import { ID, Query } from "appwrite";
import { databases } from "@/lib/appwrite.js";
import { reactive } from "vue";

export const GOODS_DATABASE_ID = "66fa823000163d6cb709";
export const GOODS_COLLECTION_ID = "66fa82490015de043d63";

export const goods = reactive({
  current: [],
  async init() {
    const response = await databases.listDocuments(
    GOODS_DATABASE_ID,
    GOODS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    this.current = response.documents;
  },
  async add(good) {
    const response = await databases.createDocument(
    GOODS_DATABASE_ID,
    GOODS_COLLECTION_ID,
      ID.unique(),
      good
    );
    this.current = [response, ...this.current].slice(0, 10);
  },
  async remove(id) {
    await databases.deleteDocument(GOODS_DATABASE_ID, GOODS_COLLECTION_ID, id);
    this.current = this.current.filter((good) => good.$id !== id);
    await this.init();
  },
});