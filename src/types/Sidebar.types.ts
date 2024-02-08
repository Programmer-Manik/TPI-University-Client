import { ReactNode } from "react";
 export type tRoute = {
   path: string;
   element: ReactNode;
 };

 export type tSidebarItem = {
   key: string;
   label?: ReactNode;
   children?: tSidebarItem[];
 }

export type TUserPaths = {
   name: string;
   path?: string;
   element?:ReactNode;
   children?: TUserPaths[];
 };
 
 