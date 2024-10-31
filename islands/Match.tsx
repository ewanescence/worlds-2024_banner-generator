export default function Match() {
  return (
    <a href="https://lolesports.com/live/worlds" target="_blank">
      <div class="flex flex-col rounded bg-slate border border-solid border-dark-400 p-4">
        <h2 class="font-inter text-xl text-white-300">
          Saturday 2 Nov
        </h2>
        <span class="font-inter text-base text-dark-200 mt-[-4px] mb-2">
          @ 2 PM GMT
        </span>
        <div class="flex flex-col rounded bg-dark-500 border border-solid border-dark-400">
          <div class="flex flex-row justify-evenly items-center p-2">
            <img
              width="48"
              height="48"
              src="/blg.png"
              alt="Logo BLG"
              class="h-[48] w-[48]"
            />
            <span class="text-3xl text-dark-400">/</span>
            <img
              width="48"
              height="48"
              src="/t1.png"
              alt="Logo T1"
              class="h-[48] w-[48]"
            />
          </div>
          <div class="bg-dark-400 p-1 flex flex-row justify-between">
            <img
              src="/worlds-2024_logo.png"
              width="24"
              height="24"
              alt="League of Legends Worlds 2024 Logo"
            />
            <span class="font-inter text-white-50 text-2lx">
              Worlds • Finals
            </span>
            <span class="font-inter text-white-50 text-2lx">BO5</span>
          </div>
        </div>
      </div>
    </a>
  );
}
