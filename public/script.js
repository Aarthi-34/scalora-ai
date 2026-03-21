async function generateHooks() {
  let niche = document.getElementById('nicheInput').value;
  if(niche.trim() === "") {
    alert("Please enter a niche");
    return;
  }

   let output = document.getElementById('output');
    output.innerHTML = "Generating hooks...⏳" ;

    try {
      const response = await fetch(`/api/hooks?niche=${niche}`);
      const data = await response.json();

      output.innerHTML = "<ul>";

      data.forEach(hook => {
      output.innerHTML += `<li>${hook}</li>`;
    });
    

    output.innerHTML += "</ul>";


  } catch (error) {
    output.innerHTML = "Something went wrong ❌";
  }

  }
function login() {
    alert("Google Sign-In is coming soon in Scalora AI.");
}

function copyHooks() {
    let hooks = document.getElementById('output').innerText;
    if(hooks.trim() === "") {
        alert("No hooks to copy. Please generate hooks first.");
        return;
    }
    navigator.clipboard.writeText(hooks)
    .then(() => {
    alert("Hooks copied to clipboard!");
    })
    .catch(() => {
    alert("Failed to copy hooks. Please try again.");
    });
}

function openHookTool(){
  document.getElementById('hookTool').style.display = 'block';
   document.getElementById('captionTool').style.display = 'none';
    document.getElementById('postTool').style.display = 'none';

}

function comingSoon(){
  alert("This tool is coming soon in Scalora AI.");
}