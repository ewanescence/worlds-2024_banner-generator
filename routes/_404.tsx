import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <main class="w-full h-screen bg-dark-500">
        <div class="max-w-[800px] mx-auto pt-4 flex flex-col gap-4 p-4">
          <h1 class="font-manuka text-white-50 text-4xl mt-1 mb-[-8px]">
            404 - Page not found
          </h1>
          <p class="font-inter text-dark-200">
            Sorry but this page doesn't exist.
          </p>
          <a href="/" class="text-inter text-xl text-blue-500 hover:underline">
            Go back to base!!
          </a>
        </div>
      </main>
    </>
  );
}
