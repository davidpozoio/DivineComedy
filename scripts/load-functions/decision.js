export function hiddenDecisions(decisionButton, { decisions }) {
  if (decisionButton.dataset.appear) {
    decisionButton.style.display = 'none';

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

    if ("next" in decision) $button.dataset.next = decision.next;
    if ("type" in decision) $button.dataset.type = decision.type;
    if ("appear" in decision)
      $button.dataset.appear = decision.appear;
    if (decision.appear == false) $button.hidden = true;

    $button.textContent = decision.description;
    $button.className = "decisions__button";

    $decisionsFragment.appendChild($button);
  }

  return $decisionsFragment;
}
