import { team } from "../utils/Team.ts";

export default function TeamInput() {
  const handleUpdate = (e: Event, teamSelection: string) => {
    e.preventDefault();
    team.value = teamSelection;
  };

  return (
    <div class="flex flex-col rounded bg-slate border border-solid border-dark-400 p-4">
      <h2 class="font-inter text-xl text-white-300 mb-2">
        2. Your favorite team
      </h2>
      <div class="flex flex-row gap-4">
        <button
          class={`px-4 py-2 rounded border border-solid border-dark-400 ${
            team.value === "T1"
              ? "bg-blue-500 hover:bg-blue-500"
              : "bg-dark-500 hover:bg-blue-200"
          }`}
          onClick={(e) => handleUpdate(e, "T1")}
        >
          <img
            id="T1Logo"
            width="70"
            height="70"
            src="/t1.png"
            alt="Logo T1"
          />
        </button>
        <button
          class={`px-4 py-2 rounded border border-solid border-dark-400 ${
            team.value === "BLG"
              ? "bg-blue-500 hover:bg-blue-500"
              : "bg-dark-500 hover:bg-blue-200"
          }`}
          onClick={(e) => handleUpdate(e, "BLG")}
        >
          <img
            id="BLGLogo"
            width="70"
            height="70"
            src="/blg.png"
            alt="Logo BLG"
          />
        </button>
        <button
          class={`px-4 py-2 rounded border border-solid border-dark-400 ${
            team.value === "KC"
              ? "bg-blue-500 hover:bg-blue-500"
              : "bg-dark-500 hover:bg-blue-200"
          }`}
          onClick={(e) => handleUpdate(e, "KC")}
        >
          <img
            id="KCLogo"
            width="70"
            height="70"
            src="/kc.png"
            alt="Logo KC"
          />
        </button>
      </div>
    </div>
  );
}
