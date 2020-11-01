<script lang="ts">
  export let name: string;
  export let img: string;
  export let description: string;
</script>

<style>
  section {
    background-color: #28272c;
  }
  .title {
    background-color: #061625;
    color: white;
    padding: 1em;
  }

  .content {
    display: flex;
    flex-flow: row wrap;
  }

  img {
    width: 100%;
  }

  @media (min-width: 1150px) {
    .content {
      flex-flow: row nowrap;
    }

    img {
      max-width: 700px;
    }
  }
  p {
    margin: 1em;
    color: white;
    text-align: justify;
  }
</style>

<section>
  <div class="title">
    <h2>{name}</h2>
  </div>
  <div class="content">
    <img src={img} alt="" />
    <p>{description}</p>
  </div>
</section>
