function generateHooks() {
  let niche = document.getElementById('nicheInput').value;
  if(niche.trim() === "") {
    alert("Please enter a niche.");
    return;
  }
  let hooks=`
  <ul>
  <li> 5 mistakes every ${niche} makes and how to avoid them.</li>
  <li> The ultimate guide to ${niche} in 2026.</li>
  <li> How to master ${niche} in just 30 days.</li>
  <li> The secret to successful ${niche} revealed.</li>
  <li> Why ${niche} is the future of [industry].</li>
  <li> The top 10 tools every ${niche} needs.</li>
  </ul>
  `;
    document.getElementById('output').innerHTML = hooks;
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