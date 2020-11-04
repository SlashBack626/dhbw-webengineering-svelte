<script lang="ts">
  import axios from "axios";
  import type { WikiSearch, WikiSearchResultPage } from "./Interfaces";
  let searchText: string;
  let results: WikiSearchResultPage[] = null;
  async function search() {
    if (searchText.length === 0) return;
    let res = await axios.get<WikiSearch>(`/wikisearch/${searchText}`);
    res.data.results.forEach((page) => {
      console.log(page.title);
    });
    results = res.data.results;
  }
</script>

<style>
  #popup {
    min-height: 80px;
    height: auto;
    background-color: #28272c;
    color: white;
    border-radius: 5px;
    margin: 1em;
    padding: 1em;
    border: 1px solid #1e1324;
    overflow-x: auto;
    overflow-y: hidden;
    flex-shrink: 0;
  }

  input {
    margin-top: 10px;
    background-color: #061625;
    color: white;
  }

  button {
    background-color: greenyellow;
  }
  table,
  th,
  td {
    border: 1px solid white;
    border-collapse: collapse;
  }

  td {
    padding: 5px;
    text-align: justify;
  }

  tr td:first-child,
  tr td:nth-child(2) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  a {
    color: white;
  }
  a:visited {
    color: lightgrey;
  }
</style>

<div id="popup">
  <span>Wikipedia search:</span>
  <div>
    <input
      type="text"
      bind:value={searchText}
      on:keydown={(e) => {
        if (e.key === 'Enter') search();
      }} />
    <button on:click={search}>go</button>
    {#if results}
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Extract</th>
        </tr>
        {#each results as page}
          <tr>
            <td>
              <a
                href="https://de.wikipedia.org/?curid={page.pageid}">{page.title}</a>
            </td>
            <td>{page.description}</td>
            <td>{page.extract}</td>
          </tr>
        {/each}
      </table>
    {/if}
  </div>
</div>
