import Head from "next/head";
import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import { client } from "../apollo-client";
import { useUser } from "@auth0/nextjs-auth0";


export default function Home() {

   const { user, error, isLoading } = useUser();

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>
          Welcome
        </h2>
        <ClientOnly>

        </ClientOnly>
      </main>


    </div>
  );
}
