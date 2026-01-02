//import { AssetStatus, RequestStatus } from "@prisma/client";

export type AssetStatus =
  | "AVAILABLE"
  | "ASSIGNED"
  | "MAINTENANCE"
  | "RETIRED"
  | "REQUESTED"
  | "REJECTED";

export type RequestStatus =
  | "NONE"
  | "PENDING"
  | "APPROVED"
  | "REJECTED";


export type Asset = {
  //AssetStatus: string;
  id: string;
  name: string;
  type: string;
  owner: string;
  serial: string;
  category: string;

  status: AssetStatus;
  requestStatus: RequestStatus;

  requestedById?: string | null;
  notes?: string | null;
};
