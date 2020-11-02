<script lang="ts">
  import axios from "axios";
  let searchText: string;
  async function search(e: MouseEvent) {
    if (searchText.length === 0) return;
    let res = await axios.get(`/wikisearch/${searchText}`);
  }
</script>

<style>
  #popup {
    background-color: #28272c;
    color: white;
    border-radius: 5px;
    margin: 1em;
    padding: 1em;
  }

  input {
    margin-top: 10px;
    background-color: #061625;
    color: white;
  }

  button {
    background-color: greenyellow;
  }
</style>

<div id="popup">
  <span>Wikipedia search:</span>
  <div>
    <input type="text" bind:value={searchText} />
    <button on:click={search}>go</button>
  </div>
</div>
