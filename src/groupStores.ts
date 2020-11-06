import { writable } from "svelte/store";

export const groups = writable<string[]>(["GlobalChat"]);
export const selectedGroup = writable<string>("GlobalChat");
