<script lang="ts">
  import Faculty from "./Faculty.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import ServiceMenu from "./ServiceMenu.svelte";
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

  let showServices = false;

  function onNavClick(
    event: CustomEvent<
      "informatik" | "elektrotechnik" | "maschinenbau" | "services"
    >
  ) {
    if (event.detail === "services") {
      showServices = true;
    } else {
      let section = document.getElementById(event.detail);
      section.scrollIntoView({ behavior: "smooth" });
      // section.scrollBy({ top: navHeight, behavior: "smooth" });
    }
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
  }
</style>

<Header title="DHBW WebEngineering" on:navClick={onNavClick} />
<main>
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
</main>
{#if showServices}
  <div id="popupRoot">
    <ServiceMenu />
  </div>
{/if}
<Footer />
