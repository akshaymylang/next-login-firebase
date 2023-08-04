import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

export default function Home() {
  const [githubRepos, setGithubRepos] = useState([]);
  const { user, logout } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_REPO_URL}/repos`);
  //     const data = await res.json();
  //     setGithubRepos(data);

  //   }
  //   fetchData();
  // }, [setGithubRepos]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome {user.displayName ?? "Demo User"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="my-4 flex items-center justify-end max-w-2xl mx-auto ">
        {user ? (
          <>
          <p className="mr-2 px-4 py-2 rounded-full hover:bg-gray-100 text-gray-500">{user.email}</p>
          <a
            className="btn-blue"
            onClick={() => {
              logout(), router.push("/login");
            }}
          >
            Logout
          </a>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <a className="btn-blue">Login</a>
            </Link>{" "}
            <Link href="/signup">
              <a className="btn-blue">Signup</a>
            </Link>
          </div>
        )}
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome { user.displayName }, you are now logged in!
        </h1>

        <div className={styles.grid}>

        </div>
      </main>
    </div>
  );
}
