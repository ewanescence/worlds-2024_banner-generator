import { name } from "../utils/Name.ts";
import { team } from "../utils/Team.ts";
import { useEffect } from "preact/hooks";

export default function Canvas() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const img = document.getElementById("worldsBanner");
      ctx.drawImage(img, 0, 0);

      if (team.value) {
        const teamImg = document.getElementById(`${team.value}Logo`);
        ctx.drawImage(
          teamImg,
          canvas.width - 400,
          (canvas.height - 350) / 2,
          350,
          350,
        );
      }

      ctx.fillStyle = "white";
      ctx.font = "228px ManukaCondensed";
      ctx.fillText(name.value.toUpperCase(), 46, (canvas.height + 170) / 2);
    }
  }, [name.value, team.value]);

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "worlds-2024_banner.png";
      link.click();
    }
  };

  return (
    <div class="flex flex-col rounded bg-slate border border-solid border-dark-400 p-4">
      <h2 class="font-inter text-xl text-white-300 mb-2">
        3. Enjoy your custom banner
      </h2>
      <canvas
        width="1500"
        height="500"
        class="max-w-[800px] w-full h-auto border-dark-400 border-solid border rounded"
      >
        Your custom banner is supposed to be here.
      </canvas>
      <img class="hidden" id="worldsBanner" src="/worlds-2024_banner.jpg" />
      <button
        class="mt-2 bg-blue-500 hover:bg-blue-200 hover:text-dark-500 text-white-50 uppercase rounded py-1 px-2 hover:underline"
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
}
