import { name } from "../utils/Name.ts";

export default function NameInput() {
  const handleUpdate = (e: Event) => {
    e.preventDefault();
    name.value =
      (document.getElementById("nameInput") as HTMLInputElement).value;
  };

  return (
    <form class="flex flex-col rounded bg-slate border border-solid border-dark-400 p-4">
      <h2 class="font-inter text-xl text-white-300 mb-2">
        1. Your Name
      </h2>
      <input
        type="text"
        id="nameInput"
        placeholder="15 characters max."
        value={name}
        maxlength="15"
        class="rounded bg-dark-500 border-dark-200 border-solid border-[1px] py-1 px-2 ocus:border-solid focus-visible:outline-none focus-visible:border-blue-500 text-white-50"
      />
      <button
        onClick={handleUpdate}
        class="mt-2 bg-blue-500 hover:bg-blue-200 hover:text-dark-500 text-white-50 uppercase rounded py-1 px-2 hover:underline"
      >
        Update Name
      </button>
    </form>
  );
}
