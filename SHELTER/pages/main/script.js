const itemsNavigation = document.querySelectorAll("[data-active-link]");

itemsNavigation.forEach((el) =>
  el.addEventListener("click", () => {
    if(el.id=="logo_id"){
        location.href="../main";
    }else if(el.id=="pets_id"){
        location.href="../pets";
    }else if(el.id=="rest_btn_id"){
        location.href="../pets";
    }
  })
);

