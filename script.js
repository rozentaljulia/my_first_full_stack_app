const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

factList.innerHtm = "";
factList.loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://cdgxtxyieadyzxvzzxgb.supabase.co/rest/v1/today_i_learned_facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkZ3h0eHlpZWFkeXp4dnp6eGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4OTYxMDgsImV4cCI6MjAxMTQ3MjEwOH0.oprw-146YVSC344tSoqUnBXlHETEN9jjE88p_qXqB2w",
        autorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkZ3h0eHlpZWFkeXp4dnp6eGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4OTYxMDgsImV4cCI6MjAxMTQ3MjEwOH0.oprw-146YVSC344tSoqUnBXlHETEN9jjE88p_qXqB2w",
      },
    }
  );

  const data = await res.json();
  creatFactsList(data);
}
