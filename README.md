# Button Component

Resolução do desafio [https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY](https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY)

## 🔥 Desafio:
Criar um componente de botão personalizável com todos os estados no [design](https://www.figma.com/file/vfMDJhGGnqfaskO2aud06o/button-component?node-id=0%3A1) e uma página exibindo todos os estados.

Veja o resultado final <a href="https://laughing-jones-277747.netlify.app/">aqui.</a>

### Etapas concluídas:
* [✔] Diferentes tipos de botão: padrão, contorno e texto.
* [✔] Desativar 'box-shadow'.
* [✔] Desativar o botão.
* [✔] Poder escolher ter ícone à esquerda ou à direita.
* [✔] Tamanhos de botão diferentes.
* [✔] Cores de botão diferentes.
* [✔] Indicadores visuais para quando passar o mouse.

## 🎨 Propriedades do componente:
### Tamanho:
Para mudança de tamanho utiliza-se a propriedade `size` com três valores ( `sm`, `md`, `lg`)··
| `<Button size="sm" />` | `<Button size="md" />` | `<Button size="lg" />`
|---| --- | --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_1.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_2.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_3.PNG)

### Cores:
Para mudança de cor utiliza-se a propriedade `color` com quatro valores ( `default`, `primary`, `secondary`, `danger`)
··
| `<Button color="default" />` | `<Button color="primary" />` | `<Button color="secondary" />` | `<Button color="danger" />`
|---| --- | --- | --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_1.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_4.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_5.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_6.PNG)

### Variante:
O botão também pode variar seu estilo, utilizando `variant` com três valores ( `default`, `outline`, `text`).
··
| `<Button variant="default" />` | `<Button variant="outline" />` | `<Button variant="text" />`
|---| --- | --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_1.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_7.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_8.PNG)

### Desativar sombra e o botão:
Para desativar a sombra utiliza-se `disableShadow` e para desativar o botão `disable`.
| `<Button disableShadow />` | `<Button disable />`
|---| --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_9.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_10.PNG) 

### Ícones:
É possível adicionar qualquer ícone do <a href="https://google.github.io/material-design-icons/">Material Design</a> passando a propriedade `startIcon` ou `endIcon` com o nome do ícone como valor.
··
| `<Button startIcon="local_grocery_store" />` | `<Button endIcon="local_grocery_store" />` | `<Button startIcon="logout" />`
|---| --- | --- |
| ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_11.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_12.PNG) | ![screen](https://github.com/alexdiegoo/button-component-challenge/blob/main/.github/images/print_13.PNG)

## 📚 Aprendizados
Este foi um ótimo desafio para praticar criação de componentes personalizáveis e aprender a utilizar as props do React.
Combinando as propriedades é possível ter varias opções de personalização dos botões.
[Demonstração final](https://laughing-jones-277747.netlify.app/).
