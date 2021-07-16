# Button Component

Resolução do desafio <a href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY">https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY</a>

## 🔥 Desafio:
Criar um componente de botão personalizavel com todos os estados no <a href="https://www.figma.com/file/vfMDJhGGnqfaskO2aud06o/button-component?node-id=0%3A1">design</a> e uma página exibindo todos os estados.

### Etapas concluidas:
* [✔] Diferentes tipos de botão: padrão, contorno e texto.
* [✔] Desativar 'box-shadow'.
* [✔] Desativar o botão.
* [✔] Poder escolher ter icone à esquerda ou à direita.
* [✔] Tamanhos de botão diferentes.
* [✔] Cores de botão diferentes.
* [✔] Indicadores visuais para quando passar o mouse.

## 🎨 Propriedades do componente:
### Tamanho:
Para mudança de tamanho utliza-se a propriedade `size` com três valores ( `sm`, `md`, `lg`)
<br />
| `<Button size="sm" />` | `<Button size="md" />` | `<Button size="lg" />`
|---| --- | --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_1.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_2.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_3.PNG)

### Cores:
Para mudança de cor utliza-se a propriedade `color` com quatro valores ( `default`, `primary`, `secondary`, `danger`)
<br />
| `<Button color="default" />` | `<Button color="primary" />` | `<Button color="secondary" />` | `<Button color="danger" />`
|---| --- | --- | --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_1.PNG) | ![screen](./.github/images/print_4.png) | ![screen](./.github/images/print_5.png) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_6.PNG)

### Variante:
O botão também pode variar seu estilo, utilizando `variant` com três valores ( `default`, `outline`, `text`).
<br />
| `<Button variant="default" />` | `<Button variant="outline" />` | `<Button variant="text" />`
|---| --- | --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_1.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_7.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_8.PNG)

### Desativar sombra e o botão:
Para desativar a sombra utiliza-se `disableShadow` e para desativar o botão `disable`.
| `<Button disableShadow />` | `<Button disable />`
|---| --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_9.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_10.PNG) 

### Icones:
É possivel adicionar qualquer icone do <a href="https://google.github.io/material-design-icons/">Material Design</a> passando a propriedade `startIcon` ou `endIcon` com o nome do icone como valor.
<br />
| `<Button startIcon="local_grocery_store" />` | `<Button endIcon="local_grocery_store" />` | `<Button startIcon="logout" />`
|---| --- | --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_11.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_12.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_13.PNG)

## 📚 Aprendizados
Este foi um ótimo desafio para praticar criação de componentes personalizaveis e aprender a utilizar as props do React.
Combinando as propriedades é possivel ter varias opções de personalização dos botões.
