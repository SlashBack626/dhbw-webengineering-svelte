<script lang="ts">
  export let title: string;
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
  @media (min-width: 550px) {
    ul {
      padding: 0;
      display: flex;
      list-style: none;
      flex-flow: row nowrap;
      justify-content: stretch;
    }
  }

  li {
    width: 100%;
    padding: 1em;
    text-align: center;
    color: white;
  }
</style>

<header>
  <div>
    <img src="./assets/logodhbw.svg" alt="" />
    <h1>{title}</h1>
  </div>
</header>
<nav>
  <ul>
    <li>Informatik</li>
    <li>Elektrotechnik</li>
    <li>Maschinenbau</li>
    <li>Services</li>
  </ul>
</nav>
