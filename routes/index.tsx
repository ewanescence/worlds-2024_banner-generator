import NameInput from "../islands/NameInput.tsx";
import TeamInput from "../islands/TeamInput.tsx";
import Canvas from "../islands/Canvas.tsx";
import Match from "../islands/Match.tsx";

export default function AboutPage() {
  return (
    <main class="w-full bg-dark-500">
      <div class="max-w-[800px] mx-auto pt-4 flex flex-col gap-4 p-4">
        <header class="flex gap-x-2">
          <img
            src="/worlds-2024_logo.png"
            width="60"
            height="60"
            alt="League of Legends Worlds 2024 Logo"
          />
          <div>
            <h1 class="font-manuka text-white-50 text-4xl mt-1 mb-[-8px]">
              Worlds 2024 Finals
            </h1>
            <span class="text-dark-200 font-inter text-sm">
              BANNER GENERATOR
            </span>
          </div>
        </header>
        <section>
          <p class="text-black-50">
            Generate your free custom banner and show who you are rooting for in
            the finals!
          </p>
        </section>
        <NameInput />
        <TeamInput />
        <Canvas />
        <Match />
        <p class="font-inter text-sm text-dark-200">
          This web application isn't endorsed by Riot Games and doesn't reflect
          the views or opinions of Riot Games or anyone officially involved in
          producing or managing League of Legends. League of Legends and Riot
          Games are trademarks or registered trademarks of Riot Games, Inc.
          League of Legends © Riot Games, Inc. This web application is free to
          use and do not store data on you.
        </p>
        <span class="font-inter text-sm text-dark-200">
          Made with{" "}
          <a
            class="text-blue-500 hover:underline"
            href="https://deno.com/"
            target="_blank"
          >
            Deno
          </a>{" "}
          &{" "}
          <a
            class="text-blue-500 hover:underline"
            href="https://fresh.deno.dev/"
            target="_blank"
          >
            Fresh
          </a>{" "}
          by{" "}
          <a
            class="text-blue-500 hover:underline"
            href="https://bsky.app/profile/bsky.ewanescence.com"
            target="_blank"
          >
            Ewanescence
          </a>
        </span>
      </div>
    </main>
  );
}
