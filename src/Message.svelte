<script lang="ts">
  export let username: string;
  export let content: string;
  export let me: boolean;
</script>

<style>
  .msg {
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    /* align-items: flex-end; */
    max-width: 80%;
    flex-shrink: 0;
  }

  .msgBody {
    background-color: grey;
    /* min-height: 50px; */
    padding: 1em;
    margin: 1em;
    margin-top: 0;
    text-align: justify;
    width: fit-content;
    overflow-wrap: break-word;
  }

  .received {
    align-self: flex-start;
  }

  .sent {
    align-self: flex-end;
  }

  .received .msgBody {
    border-radius: 5px 5px 5px 0;
  }

  .sent .msgBody {
    border-radius: 5px 5px 0 5px;
  }
  span {
    margin-left: 1em;
    margin-right: 1em;
  }

  .sent span {
    align-self: flex-end;
  }
</style>

<div class="msg {me ? 'sent' : 'received'}">
  <span>{username}</span>
  <div class="msgBody">{content}</div>
</div>
