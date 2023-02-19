import { A } from "@solidjs/router";
import { createEffect, createSignal, Index } from "solid-js";

export default function SortableDnd() {
  const [items, setItems] = createSignal([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);
  const [targetIndex, setTargetIndex] = createSignal<number>();

  createEffect(() => {
    console.log("Items", items());
  });
  return (
    <div class="flex flex-col items-center justify-center h-[100vh]">
      <div class="flex flex-col">
        <A
          class="hover:underline hover:text-primary text-xl font-bold mb-2"
          href="/"
        >
          ⇽ Back
        </A>
        <div
          class="flex flex-row p-4 border-2 border-dashed border-zinc-400"
          onDragOver={(e) => {
            e.preventDefault();
          }}
        >
          <Index each={items()}>
            {(item, index) => (
              <div
                class="bg-primary rounded m-2 pt-4 pb-4 pl-8 pr-8 text-center text-white text-xl font-bold select-none cursor-move"
                classList={{
                  "opacity-25": targetIndex() === index,
                }}
                draggable={true}
                onDragStart={() => {
                  setTargetIndex(index);
                }}
                onDragEnd={() => {
                  setTargetIndex(undefined);
                }}
                onDragEnter={() => {
                  setItems((currentItems) => {
                    const updatedItems = currentItems.slice();
                    updatedItems.splice(
                      targetIndex()!,
                      0,
                      ...updatedItems.splice(index, 1)
                    );
                    return updatedItems;
                  });
                  setTargetIndex(index);
                }}
              >
                {item()}
              </div>
            )}
          </Index>
        </div>
      </div>
    </div>
  );
}
