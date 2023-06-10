export function loadDecisions(decisions, sceneDom) {
  const { $decisionsContainer } = sceneDom;

  $decisionsContainer.innerHTML = "";

  $decisionsContainer.appendChild(getAllDecisions(decisions));
}

function getAllDecisions(decisions) {
  let $decisionsFragment = document.createDocumentFragment();

  for (let decision of decisions) {
    let $button = document.createElement("button");

    if(decision.hasOwnProperty('next')) $button.id = decision.next;
    if(decision.hasOwnProperty('type')) $button.dataset.type = decision.type;
 
    $button.textContent = decision.description;
    $button.className = "decisions__button";
    
    $decisionsFragment.appendChild($button);
  }

  return $decisionsFragment;
}
