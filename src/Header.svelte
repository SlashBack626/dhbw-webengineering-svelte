<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  export let title: string;
  let showButton: boolean = window.innerWidth <= 580;
  let hidden: boolean = showButton;
  const dispatch = createEventDispatcher();

  function forward(event: string) {
    dispatch("navClick", event);
  }

  function update() {
    const oldShowButton = showButton;
    showButton = window.innerWidth <= 580;
    if (oldShowButton !== showButton) hidden = showButton;
  }

  window.onresize = update;

  onMount(update);
</script>

<style>
  header {
    background-color: black;
  }

  header div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }

  @media (min-width: 800px) {
    header div {
      justify-content: space-between;
      flex-flow: row nowrap;
    }
  }
  h1 {
    color: white;
    margin: 1rem;
  }

  img {
    margin: 1rem;
  }

  nav {
    position: sticky;
    top: 0;
    left: 0;
    background-color: black;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: stretch;
    flex-flow: row wrap;
    border-top: 1px solid green;
  }
  @media (min-width: 580px) {
    ul {
      padding: 0;
      display: flex;
      list-style: none;
      flex-flow: row nowrap;
      justify-content: stretch;
    }
  }

  @media (max-width: 373px) {
    img {
      width: 100%;
    }
    h1 {
      font-size: 20px;
    }
  }

  li {
    width: 100%;
    padding: 1em;
    text-align: center;
    color: white;
  }
  li:hover {
    background-color: green;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 0.5rem;
    margin: 0.5rem;
  }

  #buttonContainer {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
</style>

<header>
  <div>
    <img src="./assets/logodhbw.svg" alt="DHBW Logo" />
    <h1>{title}</h1>
  </div>
</header>
<nav>
  <ul>
    {#if showButton}
      <div id="buttonContainer">
        <button on:click={() => (hidden = !hidden)}><i
            class="material-icons">menu</i></button>
      </div>
    {/if}
    <li {hidden} on:click={() => forward('informatik')}>Informatik</li>
    <li {hidden} on:click={() => forward('elektrotechnik')}>Elektrotechnik</li>
    <li {hidden} on:click={() => forward('maschinenbau')}>Maschinenbau</li>
    <li {hidden} on:click={() => forward('weather')}>Weather</li>
    <li {hidden} on:click={() => forward('services')}>Services</li>
  </ul>
</nav>
