<script lang="ts">
  import Chat from "./Chat.svelte";
  import { groups, selectedGroup } from "./groupStores";
  const maxlength = 10;
  let username: string = "SlashBack";
  let createNewTab: boolean = false;
  //   let groups: string[] = ["GlobalChat"];
  //   let selectedGroupIndex: number = 0;
  //   let selectedGroup: string = groups[selectedGroupIndex];
  let newGroup: string;
  function addTab() {
    createNewTab = true;
    newGroup = "";
  }

  function joinChat() {
    if (
      $groups.findIndex((g) => g === newGroup) === -1 &&
      newGroup.length > 0
    ) {
      console.log(`join ${newGroup}`);
      groups.update((g) => [...g, newGroup]);
      selectedGroup.set(newGroup);
    }
    createNewTab = false;
    console.log($selectedGroup);
  }
</script>

<style>
  #chatWindow {
    /* width: 100%; */
    display: flex;
    flex-flow: column nowrap;
    /* align-items: stretch;
    justify-content: stretch; */
    height: 80vh;
    margin: 1em;
    /* border: 8px solid #204161; */
    border: 1px solid #1e1324;
    background-color: #28272c;
    border-radius: 5px;
    color: white;
  }

  h2 {
    margin: 10px;
    margin-left: 20px;
  }

  #tabs {
    margin: 1em;
    margin-bottom: 5px;
  }

  #tabs button {
    margin: 0;
    margin-left: 5px;
    border: 1px solid black;
    border-bottom: none;
    /* background-color: #28272c; */
    color: white;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(30, 29, 33, 1) 18%,
      rgba(40, 39, 44, 1) 100%
    );
  }

  #tabs button:hover {
    border-color: mediumslateblue;
    color: mediumslateblue;
  }

  input {
    background-color: #061625;
    color: white;
  }

  #settings {
    margin: 1em;
  }
</style>

<div id="chatWindow">
  <h2>Chat</h2>
  <div id="tabs">
    {#each $groups as group}
      <button
        on:click={() => {
          selectedGroup.set(group);
        }}>{group}</button>
    {/each}
    {#if !createNewTab}
      <button id="addButton" on:click={addTab}>Add</button>
    {:else}
      <!-- svelte-ignore a11y-autofocus -->
      <input
        type="text"
        autofocus
        {maxlength}
        on:input={(e) => {
          newGroup = newGroup.trimLeft();
        }}
        bind:value={newGroup}
        on:blur={joinChat}
        on:keydown={(e) => {
          if (e.key === 'Enter') joinChat();
        }} />
    {/if}
  </div>
  {#key $selectedGroup}
    <Chat group={$selectedGroup} {username} />
  {/key}
  <div id="settings">
    <label for="Username">Username</label>
    <input type="text" id="Username" bind:value={username} maxlength="20" />
    <!-- <label for="Group">Group</label>
    <input type="text" id="Group" bind:value={group} />
    <button>Apply</button> -->
  </div>
</div>
