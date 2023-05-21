function getRandomNumber (length = 7) {
  let result = 'MyJob-'
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10)
  }
  return result
}

const createMultibranchPipeline = (
  taskSelector,
  nameInputSelector,
  pipelineSelector,
  okButtonSelector,
  name,
  newJobType
) => {
  cy.get(taskSelector).click()
  cy.get(nameInputSelector).type(name)
  cy.get(pipelineSelector).contains(newJobType).click()
  cy.get(okButtonSelector).click()
}

function toggleAndSubmit(disableButton,submitButton) {
  cy.get(disableButton).click();
  cy.get(submitButton).click();
}

module.exports = { getRandomNumber, createMultibranchPipeline ,toggleAndSubmit}
