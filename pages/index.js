import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <Head>
        <title>NextJS Auth</title>
      </Head>
      <div>
        <h1>NextJS Auth Demo App</h1>

        {!user ? (
          <Link href="/api/auth/login">
            <a>Login</a>
          </Link>
        ) : (
          <>
            <div>Welcome {user.name}!</div>
            <Link href="/api/auth/logout">
              <a>Sign Out</a>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
