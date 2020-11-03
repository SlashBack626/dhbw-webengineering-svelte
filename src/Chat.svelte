<script lang="ts">
  import type { MessageData } from "./Interfaces";

  import Message from "./Message.svelte";

  let username: string;
  let group: string = "GlobalChat";
  let msgText: string;
  let msgs: MessageData[] = [];

  function sendMessage() {
    if (!msgText || msgText.length === 0 || !username || username.length === 0)
      return;
    msgs.unshift({ username: username, me: true, content: msgText });
    msgs = msgs;
    msgText = "";
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

  #chat {
    margin: 1em;
    height: 100%;
    background-color: #061625;
    border-radius: 5px;
    overflow-y: auto;
    display: flex;
    flex-flow: column-reverse nowrap;
  }

  #settings {
    margin: 1em;
  }

  input {
    background-color: #061625;
    color: white;
  }
  button {
    background-color: yellowgreen;
  }

  #msgInputBox {
    justify-self: stretch;
    display: flex;
    flex-flow: row nowrap;
    /* justify-content: stretch;
    align-items: stretch; */
  }

  #msgInput {
    width: 100%;
    margin: 1em;
    background-color: #28272c;
    border: none;
    outline: none;
    border-radius: 90px;
  }

  #msgInput:focus {
    border: none;
    outline: none;
  }

  button {
    margin: 1em;
  }
</style>

<div id="chatWindow">
  <h2>Chat</h2>
  <div id="chat">
    <div id="msgInputBox">
      <input
        type="text"
        id="msgInput"
        bind:value={msgText}
        on:keydown={(e) => {
          if (e.key === 'Enter') sendMessage();
        }} />
      <button on:click={sendMessage}>Send</button>
    </div>
    {#each msgs as msg}
      <Message {...msg} />
    {/each}
  </div>
  <div id="settings">
    <label for="Username">Username</label>
    <input type="text" id="Username" bind:value={username} />
    <label for="Group">Group</label>
    <input type="text" id="Group" bind:value={group} />
    <button>Apply</button>
  </div>
</div>
