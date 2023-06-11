export function hiddenDecisions(decisionButton, { decisions }) {
  if (decisionButton.dataset.appear) {
    decisionButton.hidden = true;
    decisionButton.dataset.appear = false;

    decisions = decisions.filter(
      (element) => element != decisions[Number(decisionButton.id)]
    );

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
  let id = 0;
  for (let decision of decisions) {
    let $button = document.createElement("button");

    $button.id = id;
    id++;

    if (decision.hasOwnProperty("next")) $button.dataset.next = decision.next;
    if (decision.hasOwnProperty("type")) $button.dataset.type = decision.type;
    if (decision.hasOwnProperty("appear"))
      $button.dataset.appear = decision.appear;
    if (decision.appear == false) $button.hidden = true;

    $button.textContent = decision.description;
    $button.className = "decisions__button";

    $decisionsFragment.appendChild($button);
  }

  return $decisionsFragment;
}
