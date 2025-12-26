"use server";

import { RowDataPacket } from "mysql2";
import { getDB } from "./db";
import { revalidatePath } from "next/cache";
import error from "../error";

export async function getPosts() {
  const db = await getDB();
  const rows = await new Promise<RowDataPacket[]>((resolve) => {
    setTimeout(async () => {
      const [rows] = await db.execute<RowDataPacket[]>("SELECT * FROM posts");
      resolve(rows);
    }, 5000);
  });
  // const [rows] = await db.execute<RowDataPacket[]>("SELECT * FROM posts");
  return rows;
}

export async function addPosts(prevState: any, formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const db = await getDB();
  try {
    if (!title || !body) {
      throw new Error("Title and Body are required");
    }
    await db.execute("INSERT INTO posts (title, body) VALUES (?, ?)", [
      title,
      body,
    ]);
    revalidatePath("/home");
    return { success: true, error: null };
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function dummyAsync(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, timeout);
  });
}
