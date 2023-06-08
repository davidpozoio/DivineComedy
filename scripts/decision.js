export function loadDecisions(decisions, sceneDom) {
  const { $decisionsContainer } = sceneDom;

  $decisionsContainer.innerHTML = "";

  $decisionsContainer.appendChild(getAllDecisions(decisions));
}

function getAllDecisions(decisions) {
  let $decisionsFragment = document.createDocumentFragment();

  for (let decision of decisions) {
    let $button = document.createElement("button");
    $button.id = decision.next;
    $button.textContent = decision.description;
    $decisionsFragment.appendChild($button);
  }

  return $decisionsFragment;
}
