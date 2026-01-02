"use server";
//import { promises as fs } from 'fs';
//import path from 'path';
import { Asset } from "@/types/asset";
import { redirect } from 'next/navigation';
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
//import { AssetStatus, RequestStatus } from "@prisma/client";
//import { AssetStatus,  RequestStatus } from "@prisma/client";
import{ AssetStatus, RequestStatus } from "@/types/asset";



export interface LoginUser {
  id: string;
  email: string;
  password: string;
  name: string;
}

type User = {
  email: string;
  password: string
}

/*const users: User[] = [
  {
    email: "user@gmail.com",
    password: "123456",
  },
  {
    email: "admin@alphaware.com",
    password: "admin123",
  },
];
*/
  


/* LOGIN ACTION */
export async function loginAction(formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { success: false, error: "User not found" };
  }

  if (user.password !== password) {
    return { success: false, error: "Invalid password" };
  }

  // set cookies
  (await cookies()).set("auth", user.email, { path: "/" });
  (await cookies()).set("role", user.role, { path: "/" });

  return { success: true };
}

//logout action 
export async function logoutAction() {
  (await cookies()).delete("auth");
  redirect("/login");
}


//const DATA_PATH = path.join(process.cwd(),'data', 'assets.json');

 
    
// CRUD operations
export async function readAssets(): Promise<Asset[]> {
  return prisma.asset.findMany();
}

export async function createAsset(newAsset: Asset): Promise<Asset> {
  return prisma.asset.create({ data: newAsset });
}

export async function updateAsset(
  id: string,
  data: {
    status?: AssetStatus;
    requestStatus?: RequestStatus;
    requestedById?: string | null;
  }
) {
  return prisma.asset.update({
    where: { id },
    data,
  });
}

export async function deleteAssetDB(id: string): Promise<boolean> {
  try {
    await prisma.asset.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

  // SERVER ACTION WRAPPERS (for SSR forms)
  /** USER: Request an Asset */
export async function requestAssetAction(formData: FormData) {
  const id = String(formData.get("id"));

  await updateAsset(id, {
    status: "REQUESTED",
    requestStatus: "PENDING",
  });

  redirect("/dashboard?msg=Request sent to admin");
}

export async function approveAssetAction(formData: FormData) {
  const id = String(formData.get("id"));

  await updateAsset(id, {
    status: "ASSIGNED",
    requestStatus: "APPROVED",
  });

  redirect("/dashboard?msg=Request approved");
}

export async function rejectAssetAction(formData: FormData) {
  const id = String(formData.get("id"));

  await updateAsset(id, {
    status: "REJECTED",
    requestStatus: "REJECTED",
  });

  redirect("/dashboard?msg=Request rejected");
}


export async function deleteAssetAction(formData: FormData) {
  const id = String(formData.get("id"));

  await prisma.asset.delete({ where: { id } });

  redirect("/dashboard?msg=Asset deleted successfully");
}


export async function createAssetAction(formData: FormData) {
  const name = String(formData.get("name"));
  const category = String(formData.get("category"));
  const type = String(formData.get("type"));
  const owner = String(formData.get("owner"));
  const serial = String(formData.get("serial"));
  const status = String(formData.get("status")) as Asset["status"];
  const notes = String(formData.get("notes") || "");

  await prisma.asset.create({
    data :{
    name,
    category,
    type,
    owner,
    serial,
    notes: notes || null,
    status: "AVAILABLE",
    requestStatus: "NONE",
    }
  });

 // await createAsset(newAsset);
  redirect("/dashboard?msg=Asset created successfully");
}


