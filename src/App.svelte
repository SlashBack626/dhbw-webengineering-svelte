<script lang="ts">
  import ChatSelection from "./ChatSelection.svelte";
  import Faculty from "./Faculty.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Weather from "./Weather.svelte";
  import WikiSearch from "./WikiSearch.svelte";
  let navHeight;
  const descriptions = {
    informatik: `
	Informatiker übertragen Vorgänge der realen Welt auf
	Computersysteme, indem sie die Aufgabenstellung in geeignete Modelle
	überführen und diese dann auf Softwaresystemen abbilden. Die
	Vielfalt an Anwendungsmöglichkeiten ist dabei nahezu unbegrenzt und
	steigt stetig mit der zunehmenden Leistungsfähigkeit der Systeme.
	  `,
    elektrotechnik: `
	Die Elektrotechnik bewegt und verändert die Welt: Smartphones,
	Assistenzsysteme, Smart Home oder Medizintechnik sind aus unserem
	Leben nicht mehr wegzudenken, die Energiewende ist in aller Munde.
	Ingenieurinnen und Ingenieure der Elektrotechnik gestalten und
	entwickeln die Systeme und haben so einen direkten Einfluss auf
	unser alltägliches Leben. Sie befassen sich nicht nur mit
	elektrischen und elektronischen Systemen, sondern arbeiten in einem
	sehr vielfältigen Arbeitsfeld, das von der Entwicklung eines
	Produkts über das Projektmanagement bis hin zu Marketing und
	Vertrieb reicht.
	`,
    maschinenbau: `
	Der Maschinenbau mit seinen zahlreichen Ausprägungen verknüpft
	Theorie und Praxis, Naturwissenschaft und Technik. Die umfassende
	Ausbildung an der Dualen Hochschule Stuttgart ermöglicht es
	Absolventinnen und Absolventen des Studiengangs, Aufgaben in vielen
	Tätigkeitsfeldern zu übernehmen.
	`,
  };

  const imgs = {
    informatik:
      "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
    elektrotechnik:
      "https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_960_720.jpg",
    maschinenbau:
      "https://cdn.pixabay.com/photo/2016/03/04/19/36/gears-1236578_960_720.jpg",
  };

  let site: "services" | "weather" | "main" = "main";

  function onNavClick(
    event: CustomEvent<
      "informatik" | "elektrotechnik" | "maschinenbau" | "services" | "weather"
    >
  ) {
    if (event.detail === "services") {
      document.body.style.overflow = "hidden";
    }
    if (
      event.detail === "elektrotechnik" ||
      event.detail === "informatik" ||
      event.detail === "maschinenbau"
    ) {
      site = "main";
      let section = document.getElementById(event.detail); // section will be null if the faculties need to mount first
      section?.scrollIntoView({ behavior: "smooth" }); // --> we cannot scroll then
      // section.scrollBy({ top: navHeight, behavior: "smooth" });
    } else {
      site = event.detail;
    }
  }

  function closePopup(event: MouseEvent) {
    site = "main";
    document.body.style.overflow = "auto";
  }
</script>

<style>
  #popupRoot {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;

    overflow-y: auto;
  }

  img {
    align-self: flex-end;
    margin: 1em;
    width: 50px;
    filter: invert(100%) sepia(9%) saturate(1719%) hue-rotate(343deg)
      brightness(109%) contrast(109%);
  }

  #test {
    height: 150px;
    background-color: black;
  }
</style>

<Header title="DHBW WebEngineering" on:navClick={onNavClick} />
<main>
  {#if site == 'main' || site == 'services'}
    <Faculty
      id="informatik"
      name="Informatik"
      description={descriptions.informatik}
      img={imgs.informatik} />
    <Faculty
      id="elektrotechnik"
      name="Elektrotechnik"
      description={descriptions.elektrotechnik}
      img={imgs.elektrotechnik} />
    <Faculty
      id="maschinenbau"
      name="Maschinenbau"
      description={descriptions.maschinenbau}
      img={imgs.maschinenbau} />
  {:else if site == 'weather'}
    <Weather />
  {/if}
</main>
{#if site == 'services'}
  <div id="popupRoot">
    <img src="./assets/close.svg" alt="close" on:click={closePopup} />
    <WikiSearch />
    <ChatSelection />
    <!-- <Chat group="GlobalChat" username="SlashBack" /> -->
    <div id="test" />
  </div>
{/if}
<Footer />
