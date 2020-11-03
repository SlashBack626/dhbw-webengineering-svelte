<script lang="ts">
  export let username: string;
  export let content: string;
  export let me: boolean;
</script>

<style>
  .msg {
    overflow: hidden;
    max-width: 80%;
  }

  .msgBody {
    background-color: grey;
    /* min-height: 50px; */
    padding: 1em;
    margin: 1em;
    margin-top: 0;
    text-align: justify;
    width: fit-content;
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
  }
</style>

<div class="msg {me ? 'sent' : 'received'}">
  <span>{username}</span>
  <div class="msgBody">{content}</div>
</div>
