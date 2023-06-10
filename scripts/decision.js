export function hiddenDecision(decisionButton, {decisions}){
    if(decisionButton.dataset.appear){
      decisionButton.hidden = true;
      decisionButton.dataset.appear = false;

      decisions = decisions.filter(de => (!de.hasOwnProperty('appear')))

      console.log(decisions);

      return decisions;
    }

    return decisions;
}

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
    if(decision.hasOwnProperty('appear')) $button.dataset.appear = decision.appear;
    if(decision.appear == false) $button.hidden = true;

    $button.textContent = decision.description;
    $button.className = "decisions__button";
    
    $decisionsFragment.appendChild($button);
  }

  return $decisionsFragment;
}


