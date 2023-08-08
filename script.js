const linksHeader = document.querySelectorAll(".nav-list a");
const linksFooter = document.querySelectorAll(".links-footer a");

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;

  console.log(href)

  if (url === href) {
    link.classList.add("ativo");
  }
}

linksHeader.forEach(ativarLinks);
linksFooter.forEach(ativarLinks);
