import { A } from "@solidjs/router";

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center h-[100vh]">
      <ul class="list-disc">
        <li>
          <A
            class="hover:underline hover:text-primary text-xl font-bold mb-2"
            href="/"
          >
            Home
          </A>
        </li>
        <li>
          <A
            class="hover:underline hover:text-primary text-xl font-bold mb-2"
            href="/sortable-dnd"
          >
            Sortable drag and drop
          </A>
        </li>
      </ul>
    </div>
  );
}
