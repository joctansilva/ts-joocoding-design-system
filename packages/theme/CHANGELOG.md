# @atlantico/theme

## 2.0.0-beta.5

### Minor Changes

- Adding new colors, new loading components (CircularProgress, PointsProgress) and adding theme switch to gradients

## 2.0.0-beta.4

### Minor Changes

- Adding Tabs components, new colors: surface-success, on-surface-success, surface-error, on-surface-error, fix: fixing errorText in TextField, fixing spacing in readOnly TextField

## 2.0.0-beta.3

### Minor Changes

- Adding Select and SelectOption components, fixing breakpoints on Tailwind pacakge (unsupported media query using css-vars) and adding optional value on TextFields

## 2.0.0-beta.2

### Minor Changes

- Fixing gradient mapper

## 1.0.0-beta.14

### Major Changes

- Bumping version

## 1.0.0-beta.13

### Major Changes

- Atlantico V2

## 1.0.0-beta.12

### Minor Changes

- Adding AtlSkeleton component and AtlSkeletonColorToken

## 1.0.0-beta.11

### Minor Changes

- Fixing wrong imports

## 1.0.0-beta.10

### Minor Changes

- Fixing build problems

## 1.0.0-beta.9

### Minor Changes

- Fixing problem with exports in package.json on build

## 1.0.0-beta.8

### Minor Changes

- ebd3b4e: Font family now in theme object, screen tokens changed and button outlinednow has white background

## 1.0.0-beta.7

### Minor Changes

- 4 novos ícones adicionados
  account-balance-wallet, contract, handyman, note-stack

  2 novas tipografias
  atlHeadlineIntermediary e atlTextButtonTextSmall

  2 novos tokens tokens
  Foram adicionados novos tokens no tema com os valores de breakpoint e screen, feitos para para facilitar o desenvolvimento responsivo e adaptativo

  Atualização do AtlCheckbox
  Agora é possível desativar o componente de Input interno através da propriedade disableInput. Útil para evitar conflitos quanto for reutilizado dentro de outros componentes invés de diretamente

  Atualização do AtlSelect
  Agora é possível trabalhar com a seleção de múltiplas opções através da propriedade multiple

  Novo hook: useAtlMediaQuery
  Use para realizar media queries em nível de código JS, já integrado com o tema podendo realizar queries como useAtlMediaQuery("mobile"), sem a necessidade de ver os valores de breakpoints específicos

## 1.0.0-beta.6

### Minor Changes

- Fixing build

## 1.0.0-beta.5

### Minor Changes

- fixing release command

## 1.0.0-beta.4

### Minor Changes

- New AtlSelect component, added AtlPortal as internal component and improving build methods

## 1.0.0-beta.3

### Minor Changes

- Updating version to fix build error

## 1.0.0-beta.2

### Minor Changes

- Updated build script to work correctly

## 1.0.0-beta.1

### Minor Changes

- Up version to publish again

## 1.0.0-beta.0

### Major Changes

- First beta version of Atlantico Design System

  Components remaining to develop:

  - AtlCard
  - AtlList
  - AtlTab
  - AtlSelect
  - AtlUploadDragAndDrop
