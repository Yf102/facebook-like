import Image from "next/image";
import LobbyClient from "@/app/LobbyClient";

export const revalidate = 3600;
export default function Home() {
  return (
    <>
      <LobbyClient />
    </>
  );
}
