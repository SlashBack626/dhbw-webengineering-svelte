<script lang="ts">
  import type { MessageData, RawMessage, UserMessage } from "./Interfaces";

  import Message from "./Message.svelte";
  import io from "socket.io-client";

  const socket = io();
  export let username: string;
  export let group: string = "GlobalChat";

  let msgText: string;
  let msgs: UserMessage[] = [];

  console.log(group);
  socket.once("load", (loaded: RawMessage[]) => {
    console.log(loaded);
    msgs = msgs.concat(
      loaded
        .map((msg) => {
          return {
            content: msg.Text,
            room: msg.Group,
            username: msg.Owner,
            timestamp: new Date(msg.Time),
            me: msg.Owner === username,
          };
        })
        .reverse()
    );
  });

  socket.emit("join", group);

  socket.on("msg", (msg: MessageData) => {
    console.log(msg);
    msgs.unshift({ ...msg, me: false });
    msgs = msgs;
  });

  function sendMessage() {
    if (!msgText || msgText.length === 0 || !username || username.length === 0)
      return;

    const date = new Date();
    const msg: MessageData = {
      username: username,
      content: msgText,
      room: group,
      timestamp: date,
    };
    msgs.unshift({ ...msg, me: true });
    socket.emit("msg", msg);
    msgs = msgs;
    msgText = "";
  }
</script>

<style>
  #chat {
    margin: 1em;
    margin-top: 0;
    height: 100%;
    background-color: #061625;
    border-radius: 5px;
    overflow-y: auto;
    display: flex;
    flex-flow: column-reverse nowrap;
    overflow-y: auto;
  }

  input {
    background-color: #061625;
    color: white;
  }
  #send {
    background-color: yellowgreen;
    margin: 1em;
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
</style>

<div id="chat">
  <div id="msgInputBox">
    <input
      type="text"
      id="msgInput"
      autocomplete="off"
      bind:value={msgText}
      on:keydown={(e) => {
        if (e.key === 'Enter') sendMessage();
      }} />

    <button id="send" on:click={sendMessage}>Send</button>
  </div>
  {#each msgs as msg}
    <Message {...msg} />
  {/each}
</div>
