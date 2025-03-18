# MyFirstAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Conceitos estudados

1. criação novo projeto
   - ng new my-first-angular-app
2. ng generate component components/home (convensão)
3. cria novo componente
4. uso de componentes dentro de outros componentes
5. uso de componentes em rotas 
6. criação de estados
7. renderização de dados dinâmicos
8. bind de eventos
9. atributos dinamicos
10. loops e condicionais
11. services(compartilhando logica -metodos entre componentes)
  - ng generate service services/enviaFormulario
12. enviando informacao de um componente para outro
  - @Input - recebe informacao do componente pai
  - @Output-envia  informacao do componente filho para pai